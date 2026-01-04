import Image from "next/image";

type Variant = "header" | "footer" | "contact";

type Social = {
    label: string;
    href: string;
    iconSrc: string;
};

const socials: Social[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/bpp-detailing",
        iconSrc: "/images/icons8-facebook.svg",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/bpp-detailing",
        iconSrc: "/images/icons8-instagram.svg",
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@bpp-detailing",
        iconSrc: "/images/icons8-tiktok.svg",
    },
];

export default function SocialLinks({
                                        variant = "header",
                                    }: {
    variant?: Variant;
}) {
    const base =
        "inline-flex items-center gap-3";

    const iconWrap =
        variant === "header"
            ? "h-9 w-9 border border-white/15 hover:border-white/35 bg-black"
            : variant === "footer"
                ? "h-9 w-9 border border-white/15 hover:border-white/35 bg-black"
                : "h-10 w-10 border border-white/15 hover:border-white/35 bg-black";

    const iconSize = variant === "contact" ? 20 : 18;

    return (
        <div className={base}>
            {socials.map((s) => (
                <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`grid place-items-center ${iconWrap} transition-colors`}
                    title={s.label}
                >
                    <Image
                        src={s.iconSrc}
                        alt={s.label}
                        width={iconSize}
                        height={iconSize}
                        className="invert opacity-80 hover:opacity-100 transition-opacity"
                    />
                </a>
            ))}
        </div>
    );
}
