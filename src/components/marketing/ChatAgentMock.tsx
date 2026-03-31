"use client";

import { SCRIPT } from "@/app/constants/common";
import { useEffect, useId, useRef, useState } from "react";

/** How long between revealing each bubble (setInterval). */
const STEP_MS = 2600;

export function ChatAgentMock() {
  const formId = useId();
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function advance() {
      setVisibleCount((c) => (c >= SCRIPT.length ? 1 : c + 1));
    }
    advance();
    const id = window.setInterval(advance, STEP_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll only the chat panel — scrollIntoView on a child scrolls the page too.
    el.scrollTop = el.scrollHeight;
  }, [visibleCount]);

  const visible = SCRIPT.slice(0, visibleCount);

  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl">
      <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22"
            viewBox="0 -960 960 960"
            width="22"
            fill="currentColor"
            aria-hidden
          >
            <path d="M470-200h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 134-75.5 249T534-111q-10 5-20 5.5t-18-4.5q-8-5-14-13t-7-19l-5-58Zm90-26q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">Customer support</p>
        <span className="ml-auto text-slate-400" aria-hidden>
          •••
        </span>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[240px] min-h-[240px] space-y-3 overflow-y-auto bg-slate-50/80 px-3 py-3"
      >
        {visible.map((line, index) => (
          <div
            key={`${index}-${line.role}-${line.text.slice(0, 12)}`}
            className={`flex ${line.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`chat-bubble-in max-w-[90%] rounded-xl px-3 py-2 text-[11.5px] leading-relaxed ${
                line.role === "user"
                  ? "bg-[#f3f3f3] text-slate-900"
                  : line.variant === "typing"
                    ? "border border-slate-200/90 bg-[#f9f9f9] text-slate-600"
                    : "border border-slate-100 bg-white text-slate-900 shadow-sm"
              }`}
            >
              {line.role === "agent" && line.variant === "typing" ? (
                <span className="inline-flex flex-wrap items-baseline gap-1">
                  <span
                    className="chat-typing-dots font-medium tracking-widest text-slate-400"
                    aria-hidden
                  >
                    …
                  </span>
                  <span>{line.text}</span>
                </span>
              ) : (
                line.text
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 bg-white p-3">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2">
          <label htmlFor={`${formId}-demo`} className="sr-only">
            Composer
          </label>
          <input
            id={`${formId}-demo`}
            type="text"
            readOnly
            value=""
            placeholder="Start typing…"
            className="min-w-0 flex-1 cursor-default bg-transparent text-xs text-slate-500 outline-none placeholder:text-slate-400"
            aria-hidden
          />
          <span
            className="shrink-0 rounded-lg bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500"
            aria-hidden
          >
            Send
          </span>
        </div>
      </div>
    </div>
  );
}
