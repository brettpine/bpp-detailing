"use client";

import { useId, useState } from "react";

export type AccordionItem = {
    question: string;
    answer: string;
};

export default function Accordion({
                                      items,
                                      defaultOpenIndex = -1,
                                      variant = "light",
                                  }: {
    items: AccordionItem[];
    defaultOpenIndex?: number;
    variant?: "light" | "dark";
}) {

    const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);
    const baseId = useId();

    return (
        <div
            className={[
                "border-t",
                variant === "dark"
                    ? "border-white/15 divide-y divide-white/15"
                    : "border-black/15 divide-y divide-black/15",
            ].join(" ")}
        >

        {items.map((item, i) => {
                const isOpen = openIndex === i;
                const buttonId = `${baseId}-btn-${i}`;
                const panelId = `${baseId}-panel-${i}`;

                return (
                    <div key={item.question} className="py-3">
                        <button
                            id={buttonId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenIndex(isOpen ? -1 : i)}
                            className="group flex w-full items-center justify-between gap-4 py-3 text-left"
                        >
              <span
                  className={[
                      "text-base font-semibold tracking-tight md:text-lg",
                      variant === "dark" ? "text-white" : "text-black",
                  ].join(" ")}
              >

                {item.question}
              </span>

                            {/* Plus / Minus icon */}
                            <span
                                className={[
                                    "grid h-9 w-9 place-items-center border transition-colors",
                                    variant === "dark"
                                        ? "border-white/20 text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white"
                                        : "border-black/20 text-black/70 group-hover:bg-black group-hover:text-white group-hover:border-black",
                                ].join(" ")}
                            >

                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current" />
                  <span
                      className={[
                          "absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current transition-opacity",
                          isOpen ? "opacity-0" : "opacity-100",
                      ].join(" ")}
                  />
                </span>
              </span>
                        </button>

                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className={[
                                "grid transition-[grid-template-rows] duration-200 ease-out",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                            ].join(" ")}
                        >
                            <div className="overflow-hidden">
                                <p
                                    className={[
                                        "pb-4 pr-2 text-sm leading-relaxed md:text-base",
                                        variant === "dark" ? "text-white/70" : "text-black/70",
                                    ].join(" ")}
                                >

                                {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
