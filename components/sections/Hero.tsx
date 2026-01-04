import Image from "next/image";

export default function Hero() {
    return (
        <section id="top" className="relative min-h-[78vh] bg-black text-white">
            <div className="absolute inset-0">
                {/* Put a placeholder image at: public/images/hero.jpg */}
                <Image
                    src="/images/hero.jpeg"
                    alt="Car detailing in progress"
                    fill
                    className="object-cover object-[50%_30%] md:object-[50%_35%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%)]" />
            </div>

            <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28">
                <p className="text-xs tracking-[0.25em] text-white/70">MOBILE CAR VALETING • DETAILING</p>

                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                    Professional mobile car valeting &amp; detailing in East Preston.
                </h1>

                <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
                    Focused on the finer details, with pride in every finish.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#contact"
                        className="bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
                    >
                        Get a quote
                    </a>
                    <a
                        href="#services"
                        className="border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black"
                    >
                        View packages
                    </a>
                </div>
            </div>
        </section>
    );
}
