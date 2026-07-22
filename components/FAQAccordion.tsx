"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="rounded-[1.25rem] border border-black/5 bg-white shadow-[0_14px_35px_-24px_rgba(0,0,0,0.25)]">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-black">{item.question}</span>
              <span className="ml-4 text-xl text-[#F4C400]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-zinc-600">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
