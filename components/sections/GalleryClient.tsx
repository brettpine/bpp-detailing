"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Stage = "before" | "during" | "after";

const STAGES: Stage[] = ["before", "during", "after"];
const STAGE_LABEL: Record<Stage, string> = {
    before: "Before",
    during: "During",
    after: "After",
};

export type GallerySet = {
    id: string; // "set01"
    images: Partial<Record<Stage, string>>;
};

type SequenceItem = {
    setIndex: number;
    stage: Stage;
    src: string;
};

export default function GalleryClient({ sets }: { sets: GallerySet[] }) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Swipe tracking
    const startRef = useRef<{ x: number; y: number; t: number } | null>(null);

    // Build a single ordered sequence:
    // set01-before, set01-during, set01-after, set02-before, ...
    const sequence: SequenceItem[] = useMemo(() => {
        const seq: SequenceItem[] = [];
        sets.forEach((set, setIndex) => {
            STAGES.forEach((stage) => {
                const src = set.images[stage];
                if (src) seq.push({ setIndex, stage, src });
            });
        });
        return seq;
    }, [sets]);

    const active = sequence[activeIndex];

    const openModal = (setIndex: number, stage: Stage) => {
        const idx = sequence.findIndex(
            (x) => x.setIndex === setIndex && x.stage === stage
        );
        if (idx !== -1) {
            setActiveIndex(idx);
            setOpen(true);
        }
    };

    const closeModal = () => setOpen(false);

    const next = () => {
        if (!sequence.length) return;
        setActiveIndex((i) => (i + 1) % sequence.length);
    };

    const prev = () => {
        if (!sequence.length) return;
        setActiveIndex((i) => (i - 1 + sequence.length) % sequence.length);
    };

    // Keyboard controls: ESC close, arrows navigate
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, sequence.length]);

    // ---- Swipe handlers (attach to modal image area) ----
    const handleTouchStart = (e: React.TouchEvent) => {
        const t = e.touches[0];
        startRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const start = startRef.current;
        startRef.current = null;
        if (!start) return;

        const t = e.changedTouches[0];
        const dx = t.clientX - start.x;
        const dy = t.clientY - start.y;
        const dt = Date.now() - start.t;

        // Don’t trigger swipe if it's mostly vertical (scroll gesture)
        if (Math.abs(dy) > Math.abs(dx) * 1.2) return;

        // Thresholds: distance OR quick flick
        const distanceOK = Math.abs(dx) > 60;
        const flickOK = dt < 250 && Math.abs(dx) > 35;
        if (!distanceOK && !flickOK) return;

        if (dx < 0) next(); // swipe left -> next
        else prev(); // swipe right -> prev
    };

    if (!sets.length) return null;

    return (
        <>
            <div className="mt-12 space-y-12">
                {sets.map((set, setIndex) => (
                    <div key={set.id} className="border-t border-white/10 pt-8">
                        <div className="mb-6 flex items-end justify-between gap-6">
                            <p className="text-xs tracking-[0.25em] text-white/50">
                                SET {String(setIndex + 1).padStart(2, "0")}
                            </p>
                            <p className="text-xs text-white/35">Tap an image to enlarge</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {STAGES.map((stage) => {
                                const src = set.images[stage];

                                return (
                                    <button
                                        key={stage}
                                        type="button"
                                        onClick={() => src && openModal(setIndex, stage)}
                                        className="group relative aspect-[4/5] w-full overflow-hidden bg-white/5 ring-1 ring-white/10 text-left disabled:cursor-not-allowed"
                                        disabled={!src}
                                        aria-label={
                                            src
                                                ? `Open ${STAGE_LABEL[stage]} image`
                                                : `Missing ${STAGE_LABEL[stage]} image`
                                        }
                                    >
                                        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 pt-4">
                      <span className="text-xs tracking-[0.25em] text-white/65">
                        {STAGE_LABEL[stage].toUpperCase()}
                      </span>
                                            <span className="text-xs text-white/35">
                        {set.id.toUpperCase()}
                      </span>
                                        </div>

                                        {src ? (
                                            <div className="absolute inset-0">
                                                <Image
                                                    src={src}
                                                    alt={`${STAGE_LABEL[stage]} image`}
                                                    fill
                                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                                <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            </div>
                                        ) : (
                                            <div className="flex h-full items-center justify-center px-6 text-sm text-white/40">
                                                Missing {STAGE_LABEL[stage].toLowerCase()}
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {open && active && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                    role="dialog"
                    aria-modal="true"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) closeModal();
                    }}
                >
                    <div className="relative w-full max-w-5xl">
                        {/* Top bar */}
                        <div className="mb-3 flex items-center justify-between gap-4">
                            <div className="text-xs tracking-[0.25em] text-white/60">
                                {sets[active.setIndex]?.id.toUpperCase()} •{" "}
                                {STAGE_LABEL[active.stage].toUpperCase()}
                            </div>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-black px-4 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black"
                            >
                                Close
                            </button>
                        </div>

                        {/* Image (swipe area) */}
                        <div
                            className="relative aspect-[16/10] overflow-hidden ring-1 ring-white/10 bg-black touch-pan-y"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Image
                                src={active.src}
                                alt="Enlarged gallery image"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        {/* Controls */}
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={prev}
                                    className="bg-black px-4 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black"
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    onClick={next}
                                    className="bg-black px-4 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black"
                                >
                                    Next
                                </button>
                            </div>

                            {/* Boxed stage selector (highlighted) */}
                            <div className="flex flex-wrap gap-2">
                                {STAGES.map((s) => {
                                    const has = !!sets[active.setIndex]?.images[s];
                                    const isActive = s === active.stage;

                                    return (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => {
                                                if (!has) return;

                                                const idx = sequence.findIndex(
                                                    (x) => x.setIndex === active.setIndex && x.stage === s
                                                );
                                                if (idx !== -1) setActiveIndex(idx);
                                            }}
                                            disabled={!has}
                                            className={[
                                                "px-4 py-2 text-sm font-semibold border transition-colors",
                                                isActive
                                                    ? "bg-white text-black border-white"
                                                    : "bg-black text-white border-white/20 hover:bg-white hover:text-black",
                                                !has
                                                    ? "opacity-40 cursor-not-allowed hover:bg-black hover:text-white"
                                                    : "",
                                            ].join(" ")}
                                        >
                                            {STAGE_LABEL[s]}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                            <p className="text-xs text-white/40">
                                {activeIndex + 1} / {sequence.length}
                            </p>

                            <p className="text-xs text-white/40">
                                Swipe left/right • <span className="text-white/60">← →</span> •{" "}
                                <span className="text-white/60">ESC</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
