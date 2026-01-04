import Section from "@/components/layout/Section";
import SocialLinks from "@/components/shared/SocialLinks";


export default function Contact() {
    return (
        <Section
            id="contact"
            tone="dark"
            eyebrow="Book"
            title="Send a message — I’ll reply with a clean quote."
        >
            <div className="grid gap-12 md:grid-cols-2">
                <div className="max-w-xl text-white/70">
                    <p className="text-lg text-white/80">
                        The fastest way to book is a quick message with a couple photos. I’ll
                        give you an honest price and a time estimate.
                    </p>

                    <div className="mt-10 border-t border-white/10 pt-6">
                        <p className="text-xs tracking-[0.25em] text-white/60">SEND THIS</p>
                        <ul className="mt-4 space-y-2 text-sm text-white/75">
                            <li>✅ Car make/model</li>
                            <li>✅ Service you want (Exterior / Interior / Mini / Full)</li>
                            <li>✅ Condition (pet hair, stains, mud, etc.)</li>
                            <li>✅ Postcode</li>
                            <li>✅ 2–4 photos</li>
                        </ul>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-6">
                        <p className="text-xs tracking-[0.25em] text-white/60">SOCIALS</p>
                        <p className="mt-3 text-sm text-white/65">
                            Drop me a message and I’ll reply with a clean quote.
                        </p>
                        <div className="mt-5">
                            <SocialLinks variant="contact" />
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-white/55">
                        Availability: evenings + weekends
                    </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                    <p className="text-xs tracking-[0.25em] text-white/60">WHAT YOU GET</p>

                    <div className="mt-6 space-y-5 text-sm text-white/75">
                        <div>
                            <p className="text-white font-semibold">Detail-focused work</p>
                            <p className="mt-1 text-white/65">
                                I don’t rush jobs. The finish matters — especially the small stuff.
                            </p>
                        </div>

                        <div>
                            <p className="text-white font-semibold">Safe methods & products</p>
                            <p className="mt-1 text-white/65">
                                Proper wash process, non-acidic wheel cleaning, and careful interior work.
                            </p>
                        </div>

                        <div>
                            <p className="text-white font-semibold">Clear pricing</p>
                            <p className="mt-1 text-white/65">
                                Simple packages with honest expectations. If something needs extra time,
                                I’ll tell you before I start.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
