"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";

const navLeft = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
];

const navRight = [
    { label: "Area", href: "#area" },
    { label: "FAQ", href: "#faq" },
    { label: "Book", href: "#contact" },
];

const allLinks = [...navLeft, ...navRight];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close on ESC
    useEffect(() => {
        if (!mobileOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [mobileOpen]);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (!mobileOpen) return;

        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = original;
        };
    }, [mobileOpen]);

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-black text-white">
            <div className="border-b border-white/10">
                {/* Desktop */}
                <nav className="mx-auto hidden h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 md:grid">
                    <div className="flex items-center gap-6 justify-start">
                        {navLeft.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm font-medium tracking-wide text-white/70 hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <a href="#top" className="flex items-center justify-center">
                        <div className="relative h-10 w-28 md:h-12 md:w-32">
                            <Image
                                src="/images/logo.svg"
                                alt="BPP Detailing"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>

                    <div className="flex items-center gap-6 justify-end">
                        {navRight.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm font-medium tracking-wide text-white/70 hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}

                        <span className="h-5 w-px bg-white/15" />

                        <SocialLinks variant="header" />
                    </div>
                </nav>

                {/* Mobile */}
                <nav className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 md:hidden">
                    {/* Left spacer (keeps logo truly centred) */}
                    <div />

                    {/* Centred logo */}
                    <a href="#top" className="flex items-center justify-center">
                        <div className="relative h-10 w-28">
                            <Image
                                src="/images/logo.svg"
                                alt="BPP Detailing"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>

                    {/* Right menu button */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileOpen(true)}
                            className="border border-white/20 px-4 py-2 text-sm font-medium text-white/85 hover:text-white"
                            aria-label="Open menu"
                        >
                            Menu
                        </button>
                    </div>
                </nav>
            </div>

            {/* Overlay */}
            <div
                className={[
                    "fixed inset-0 z-[60] transition-opacity duration-200",
                    mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
                ].join(" ")}
                onClick={() => setMobileOpen(false)}
            >
                {/* darken + blur */}
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
            </div>

            {/* Slide-in drawer */}
            <aside
                className={[
                    "fixed right-0 top-0 z-[70] h-full w-[85vw] max-w-sm bg-black text-white",
                    "border-l border-white/10",
                    "transition-transform duration-200 ease-out",
                    mobileOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
                aria-hidden={!mobileOpen}
            >
                <div className="flex h-20 items-center justify-between px-5 border-b border-white/10">
                    <p className="text-xs tracking-[0.25em] text-white/60">MENU</p>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        className="border border-white/20 px-4 py-2 text-sm font-medium text-white/85 hover:text-white"
                        aria-label="Close menu"
                    >
                        Close
                    </button>
                </div>

                <div className="px-5 py-6">
                    <div className="space-y-2">
                        {allLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                className="block border border-white/10 px-4 py-3 text-sm font-medium text-white/80 hover:bg-white hover:text-black"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6">
                        <p className="mb-4 text-xs tracking-[0.25em] text-white/50">
                            SOCIALS
                        </p>
                        <SocialLinks variant="header" />
                    </div>

                    <p className="mt-8 text-xs text-white/45">
                        Tap outside the menu to close.
                    </p>
                </div>
            </aside>
        </header>
    );
}
