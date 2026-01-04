import Section from "@/components/layout/Section";

const towns = ["Littlehampton", "Rustington", "Goring", "Ferring", "Worthing", "Arundel"];

export default function Area() {
    return (
        <Section
            id="area"
            tone="light"
            eyebrow="Coverage"
            title="Local coverage, mobile service."
        >
            <div className="grid gap-12 md:grid-cols-2">
                <div className="max-w-xl text-black/70">
                    <p className="text-lg text-black/80">
                        Based around East Preston, West Sussex, and happy to travel nearby. If you’re slightly outside
                        the standard radius, just ask — I’ll always be upfront.
                    </p>

                    <div className="mt-10 grid gap-4">
                        <div className="border-t border-black/15 pt-5">
                            <p className="text-xs tracking-[0.25em] text-black/60">STANDARD RADIUS</p>
                            <p className="mt-2 text-2xl font-semibold tracking-tight text-black">
                                ~10 miles
                            </p>
                            <p className="mt-2 text-sm text-black/60">
                                Perfect for regular maintenance cleans and local bookings.
                            </p>
                        </div>

                        <div className="border-t border-black/15 pt-5">
                            <p className="text-xs tracking-[0.25em] text-black/60">MOBILE SETUP</p>
                            <p className="mt-2 text-2xl font-semibold tracking-tight text-black">
                                Driveway / on-site
                            </p>
                            <p className="mt-2 text-sm text-black/60">
                                Ideally access to water & power nearby. If not, just message and we’ll work it out.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/15 pt-5">
                    <p className="text-xs tracking-[0.25em] text-black/60">COMMON AREAS</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {towns.map((t) => (
                            <span
                                key={t}
                                className="border border-black/15 px-3 py-2 text-sm text-black/70"
                            >
                {t}
              </span>
                        ))}
                        <span className="border border-black/15 px-3 py-2 text-sm text-black/70">
              + surrounding areas
            </span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
