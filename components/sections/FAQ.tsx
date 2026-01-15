import Section from "@/components/layout/Section";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

const faqs: AccordionItem[] = [
    {
        question: "Do I need access to water or power?",
        answer:
            "Ideally, yes — a tap and a plug socket nearby makes things quicker. If you don’t have access, message me anyway and we’ll work out what’s possible.",
    },
    {
        question: "How long does a valet usually take?",
        answer:
            "As a rough guide: Basic Exterior or Interior is usually around 45–75 minutes. Mini Valet is typically 1.5–2.5 hours. Full Valet can be 2.5–4 hours depending on the vehicle and condition.",
    },
    {
        question: "What if my car is very dirty?",
        answer:
            "No problem — just let me know (or send a couple of photos) so I can quote accurately and allow the right amount of time. I’ll always be upfront if extra work is needed.",
    },
    {
        question: "Do you work in bad weather?",
        answer:
            "Light rain is usually fine. For heavy rain or strong wind, we may need to reschedule — I’d rather deliver a proper finish than rush it. If the forecast looks rough, I’ll message you in advance.",
    },
    {
        question: "Do you charge extra for larger vehicles?",
        answer:
            "Sometimes, yes. Larger vehicles (SUVs, estates, vans) or heavily soiled interiors can take longer, so pricing may vary. Send your vehicle type and a couple of photos and I’ll confirm the price before we book.",
    },
    {
        question: "Can I book outside your standard area?",
        answer:
            "Yes — I’m based around East Preston and regularly travel to nearby areas. If you’re slightly outside the usual radius, just ask and I’ll let you know what’s possible.",
    },
    {
        question: "Do you offer regular maintenance cleans?",
        answer:
            "Absolutely. If you’d like a monthly or fortnightly maintenance clean, message me and we can set something up that suits your schedule.",
    },
];

export default function FAQ() {
    return (
        <Section
            id="faq"
            tone="dark"
            eyebrow="FAQ"
            title="Quick answers before you book."
        >
            <div className="max-w-2xl text-white/65">
                If you’re not sure what you need, or you have a question that isn’t
                listed here, just drop me a message.
            </div>

            <div className="mt-10">
                <Accordion items={faqs} variant="dark" />
            </div>
        </Section>
    );
}
