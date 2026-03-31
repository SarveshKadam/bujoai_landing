"use client";

import {
  bubbleBase,
  COPILOT_ANSWER,
  COPILOT_FOLLOWUP,
  COPILOT_PROMPT,
  CUSTOMER_CHAT_SCRIPT,
  JOHN_AVATAR_SRC,
  MAX_STEP,
  SEARCH_STATUS,
  STEP_MS,
  TYPING_LINE,
} from "@/app/constants/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function renderCustomerText(text: string, highlight?: string) {
  if (!highlight) return text;
  const i = text.indexOf(highlight);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="rounded bg-slate-200/90 px-0.5">{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

/** Static John / customer chat (Framer “customer chat” block). */
function CustomerChatPanel() {
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col bg-white">
      <div
        className="flex shrink-0 items-center gap-2 border-b border-slate-200/80 px-3 py-2.5"
        data-framer-name="customer chat"
      >
        <div className="relative h-[22px] w-[22px] shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200/80">
          <Image
            src={JOHN_AVATAR_SRC}
            alt=""
            width={22}
            height={22}
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 19.5%" }}
            sizes="22px"
          />
        </div>
        <p className="text-sm font-medium tracking-tight text-[#666]">John</p>
        <span className="ml-auto text-[#474747]" aria-hidden>
          <svg width={12} height={3} viewBox="0 0 12 2.667" aria-hidden>
            <path
              fill="currentColor"
              d="M2.667 1.333C2.667 2.07 2.07 2.667 1.333 2.667.597 2.667 0 2.07 0 1.333 0 .597.597 0 1.333 0 2.07 0 2.667.597 2.667 1.333zM7.333 1.333C7.333 2.07 6.736 2.667 6 2.667c-.736 0-1.333-.597-1.333-1.333 0-.736.597-1.333 1.333-1.333.736 0 1.333.597 1.333 1.333zM12 1.333C12 2.07 11.403 2.667 10.667 2.667 9.93 2.667 9.333 2.07 9.333 1.333c0-.736.597-1.333 1.333-1.333.736 0 1.333.597 1.333 1.333z"
            />
          </svg>
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-[18px]">
          {CUSTOMER_CHAT_SCRIPT.map((turn, idx) => (
            <div
              key={idx}
              className={`flex ${turn.from === "customer" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`${bubbleBase} ${
                  turn.from === "customer"
                    ? "bg-white text-slate-900"
                    : "bg-[#f5f5f5] text-slate-900"
                }`}
              >
                {renderCustomerText(turn.text, turn.highlight)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-slate-200/80 px-3 pb-3 pt-2">
        <div className="rounded-2xl border border-slate-200/90 bg-white px-3 py-2 shadow-sm">
          <div className="flex items-end gap-2">
            <div className="hidden sm:flex shrink-0 gap-2 pb-0.5 text-[#666]">
              <span
                className="flex h-5 w-5 items-center justify-center"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </span>
              <span
                className="flex h-5 w-5 items-center justify-center"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </span>
            </div>
            <p className="min-w-0 flex-1 pb-0.5 text-xs leading-none text-[#737373]">
              Start typing….
            </p>
            <div className="flex hidden sm:flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100/90 px-3 py-1.5">
              <span className="text-xs leading-none text-black">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-black"
                aria-hidden
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopilotPanelDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    function advance() {
      setStep((s) => (s >= MAX_STEP ? 1 : s + 1));
    }
    advance();
    const id = window.setInterval(advance, STEP_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [step]);

  return (
    <div
      className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 shadow-lg backdrop-blur-sm"
      role="region"
      aria-label="Copilot preview"
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-slate-200/80 px-3 py-2">
        <span className="text-amber-500" aria-hidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 1.5l1.62 4.9h5.24l-4.24 3.08 1.62 4.98L12 11.42l-4.24 3.08 1.62-4.98L5.14 6.4h5.24L12 1.5zM5 14.5l.95 2.86 2.86.95-2.86.95-.95 2.86-.95-2.86-2.86-.95 2.86-.95.95-2.86z" />
          </svg>
        </span>
        <p className="text-xs font-semibold text-slate-800">Copilot</p>
        <span className="ml-auto text-slate-400" aria-hidden>
          •••
        </span>
      </div>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-2.5 py-2.5"
      >
        {step >= 1 && (
          <div className="flex justify-end">
            <div className="chat-bubble-in max-w-[95%] rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 text-[11px] leading-snug text-slate-800 shadow-sm">
              {COPILOT_PROMPT}
            </div>
          </div>
        )}

        {step >= 2 && (
          <div className="chat-bubble-in flex items-center gap-1.5 px-0.5 text-[10px] font-medium text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="shrink-0 text-slate-400"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            {SEARCH_STATUS}
          </div>
        )}

        {step === 3 && (
          <div className="flex justify-start">
            <div className="chat-bubble-in max-w-[95%] rounded-xl border border-slate-200/80 bg-[#f3f4f6] px-2.5 py-2 text-[11px] leading-snug text-slate-700">
              <span className="inline-flex flex-wrap items-baseline gap-1">
                <span
                  className="chat-typing-dots font-medium tracking-widest text-slate-400"
                  aria-hidden
                >
                  …
                </span>
                <span>{TYPING_LINE}</span>
              </span>
            </div>
          </div>
        )}

        {step >= 4 && (
          <div className="flex justify-start">
            <div className="chat-bubble-in max-w-[95%] rounded-xl border border-slate-200/80 bg-[#f3f4f6] px-2.5 py-2 text-[11px] leading-snug text-slate-800">
              {COPILOT_ANSWER}
            </div>
          </div>
        )}

        {step >= 5 && (
          <div className="flex justify-start">
            <div className="chat-bubble-in max-w-[95%] rounded-xl border border-slate-200/80 bg-[#f3f4f6] px-2.5 py-2 text-[11px] leading-snug text-slate-800">
              {COPILOT_FOLLOWUP}
            </div>
          </div>
        )}
      </div>

      {step >= 6 && (
        <div className="chat-bubble-in flex shrink-0 items-center gap-2 border-t border-slate-200/80 bg-slate-50/90 px-2.5 py-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
            aria-label="Copy"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex min-h-8 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#2174ff] px-3 text-[11px] font-semibold text-white shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Send in chat
          </button>
        </div>
      )}
    </div>
  );
}

export function CopilotPreview({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)]">
      <div className="copilot-preview-frame relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={720}
          sizes={sizes}
          className="w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(33,116,255,0.14)_1px,transparent_1.01px)] [background-size:24px_24px] opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2 sm:p-4 lg:p-5">
          <div className="pointer-events-auto flex h-full w-full max-w-[920px] max-h-[520px] sm:max-h-[580px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-sm">
            {" "}
            <div className="flex min-h-0 min-w-0 flex-[1.08] flex-col border-r border-slate-200/80">
              <CustomerChatPanel />
            </div>
            <div className="flex min-h-0 min-w-0 flex-1 flex-col p-1.5 sm:p-2">
              <CopilotPanelDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
