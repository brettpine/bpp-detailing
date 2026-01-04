import fs from "fs";
import path from "path";
import Section from "@/components/layout/Section";
import GalleryClient, { type GallerySet } from "@/components/sections/GalleryClient";

type Stage = "before" | "during" | "after";

function getGallerySets(): GallerySet[] {
    const dir = path.join(process.cwd(), "public/images/gallery");
    const exts = /\.(png|jpe?g|webp|avif)$/i;

    let files: string[] = [];
    try {
        files = fs.readdirSync(dir).filter((f) => exts.test(f));
    } catch {
        return [];
    }

    // set01-before.jpg etc
    const re = /^(set\d+)-(before|during|after)\.(png|jpe?g|webp|avif)$/i;

    const map = new Map<string, GallerySet>();

    for (const file of files) {
        const match = file.match(re);
        if (!match) continue;

        const setId = match[1].toLowerCase();
        const stage = match[2].toLowerCase() as Stage;

        if (!map.has(setId)) {
            map.set(setId, { id: setId, images: {} });
        }

        map.get(setId)!.images[stage] = `/images/gallery/${file}`;
    }

    return Array.from(map.values()).sort((a, b) =>
        a.id.localeCompare(b.id, undefined, { numeric: true })
    );
}

export default function Gallery() {
    const sets = getGallerySets();

    return (
        <Section
            id="gallery"
            tone="dark"
            eyebrow="Gallery"
            title="A clean finish you’ll notice."
        >
            <div className="max-w-2xl text-white/70">
                <p>
                    A few real before / during / after shots — more coming soon.
                </p>
            </div>

            {!sets.length ? (
                <div className="mt-10 border-t border-white/10 pt-6 text-white/60">
                    No gallery images found in{" "}
                    <span className="text-white/85">public/images/gallery</span>.
                </div>
            ) : (
                <GalleryClient sets={sets} />
            )}
        </Section>
    );
}
