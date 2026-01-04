import Section from "@/components/layout/Section";

const packages = [
    {
        title: "Basic Exterior Wash",
        price: "From £25",
        idealFor: "maintenance cleans, regular customers",
        includes: [
            "Wheels & tyres cleaned (non-acidic)",
            "Pre-wash / snow foam",
            "Hand wash (two-bucket method)",
            "Rinse & towel dry",
            "Tyre shine",
        ],
    },
    {
        title: "Basic Interior Clean",
        price: "From £25",
        idealFor: "daily drivers, light interior refresh",
        includes: [
            "Full interior vacuum (seats, carpets, mats)",
            "Dashboard, doors & centre console wiped",
            "Cup holders & crevices cleaned",
            "Interior glass cleaned",
            "Rubbish removed",
        ],
    },
    {
        title: "Mini Valet",
        price: "From £45",
        featured: true,
        idealFor: "the best all-round refresh",
        includes: [
            "Basic Exterior Wash",
            "Basic Interior Clean",
            "Door shuts wiped",
            "Final finish check & touch-ups",
        ],
    },
    {
        title: "Full Valet",
        price: "From £70",
        idealFor: "deeper clean & “like-new” feel",
        includes: [
            "Everything in Mini Valet",
            "More detailed interior clean",
            "Fiddly & hard-to-reach areas cleaned (vents, trims, switches)",
            "Luxury Cotton Fresh Fragrance applied",
            "Extra time spent on overall finish",
        ],
    },
];


export default function Services() {
    return (
        <Section id="services" tone="light" eyebrow="Packages" title="Clear prices. Proper work.">
            <div className="grid gap-10 md:grid-cols-2">
                {packages.map((p) => (
                    <div
                        key={p.title}
                        className={[
                            "relative pt-6",
                            p.featured
                                ? "border-l-4 border-black bg-black/[0.03] pl-4"
                                : "border-t border-black/15",
                        ].join(" ")}
                    >

                        {/* Featured badge */}

                        {p.featured ? (
                            <div className="absolute -top-3 right-0">
                <span className="inline-flex items-center gap-2 bg-black px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  Most popular
                </span>
                            </div>
                        ) : null}

                        <div className="flex items-baseline justify-between gap-6">
                            <h3 className={`text-xl tracking-tight md:text-2xl ${p.featured ? "font-bold" : "font-semibold"}`}>

                            {p.title}
                            </h3>

                            <p className="text-lg font-semibold">{p.price}</p>
                        </div>

                        <p className="mt-2 text-sm text-black/60">
                            <span className="font-medium text-black/70">Ideal for:</span> {p.idealFor}
                        </p>
                        {p.featured && (
                            <p className="mt-1 text-xs text-black/50">
                                Recommended for most vehicles
                            </p>
                        )}

                        <ul className="mt-4 space-y-2 text-sm text-black/75">
                            {p.includes.map((i) => (
                                <li key={i}>{i}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 border-t border-black/15 pt-6 text-sm text-black/60">
                Prices may vary by vehicle size/condition. Send a couple photos + postcode for a fast quote.
            </div>
        </Section>
    );
}
