type Tone = "light" | "dark";

export default function Section({
                                    id,
                                    tone = "light",
                                    eyebrow,
                                    title,
                                    children,
                                }: {
    id: string;
    tone?: Tone;
    eyebrow?: string;
    title: string;
    children: React.ReactNode;
}) {
    const isDark = tone === "dark";

    return (
        <section id={id} className={isDark ? "bg-black text-white" : "bg-white text-black"}>
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <header className="mb-10 md:mb-14">
                    {eyebrow && (
                        <p className={isDark ? "text-xs tracking-[0.25em] text-white/60" : "text-xs tracking-[0.25em] text-black/60"}>
                            {eyebrow.toUpperCase()}
                        </p>
                    )}
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
                </header>

                {children}
            </div>
        </section>
    );
}
