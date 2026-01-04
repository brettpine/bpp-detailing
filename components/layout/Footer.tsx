import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="border-t border-white/10 pt-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-white/55">
                            © {new Date().getFullYear()} BPP Detailing
                        </p>

                        <SocialLinks variant="footer" />
                    </div>

                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-white/55">
                            Made by{" "}
                            <a
                                href="https://pinecoded.co.uk"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-white hover:opacity-80"
                            >
                                PineCoded
                            </a>
                        </p>

                        <p className="text-xs text-white/45">
                            Social icons by{" "}
                            <a
                                href="https://icons8.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/70 hover:text-white underline underline-offset-4"
                            >
                                Icons8
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
