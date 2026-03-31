"use client";

import { INTENTS } from "@/app/constants/common";
import { useEffect, useId, useState } from "react";

type Turn = "customer" | "agent";

export function VoiceAgentMock() {
  const id = useId();
  const [intentId, setIntentId] = useState<(typeof INTENTS)[number]["id"]>(
    "billing",
  );
  const [paused, setPaused] = useState(false);
  const [turn, setTurn] = useState<Turn>("customer");
  const intent =
    INTENTS.find((i) => i.id === intentId) ?? INTENTS[INTENTS.length - 1];

  const agentTurn = turn === "agent";
  const waveAnimating = agentTurn && !paused;
  const waveFrozen = agentTurn && paused;

  useEffect(() => {
    if(paused) return;
    const interval = window.setInterval(() => {
      setTurn((prev) => (prev === "customer" ? "agent" : "customer"));
    }, 3200);
    return () => clearInterval(interval);
  }, [intentId, paused]);

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-slate-200/80 bg-linear-to-br from-white to-slate-50 p-6 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div
          className={`flex min-w-0 max-w-[32%] flex-1 flex-col items-center rounded-[20px] border bg-white py-5 transition-colors ${
            turn === "customer"
              ? "border-[#2174ff]/50 shadow-[0_0_0_1px_rgba(33,116,255,0.12)]"
              : "border-slate-200/90"
          }`}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              turn === "customer" ? "bg-[#2174ff]/10" : "bg-slate-100"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <circle cx="10" cy="7" r="4" fill="#2174ff" />
              <rect
                x="4"
                y="12"
                width="12"
                height="6"
                rx="3"
                fill="#2174ff"
                opacity={0.9}
              />
            </svg>
          </div>
          <span className="mt-3 text-center text-[11px] text-slate-800">
            Customer
          </span>
        </div>
        <div
          className="flex h-9 w-[140px] shrink-0 items-end justify-center gap-[3px] rounded-2xl bg-slate-100 px-1 pb-1.5 pt-2"
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={`inline-block h-3 w-[3px] rounded-full bg-[#2174ff]/80 ${
                waveAnimating ? "voice-wave-bar" : ""
              } ${waveFrozen ? "voice-wave-bar voice-wave-bar--paused" : ""} ${
                !agentTurn ? "voice-wave-bar--idle" : ""
              }`}
              style={
                waveAnimating || waveFrozen
                  ? { animationDelay: `${i * 70}ms` }
                  : undefined
              }
            />
          ))}
        </div>
        <div
          className={`flex min-w-0 max-w-[32%] flex-1 flex-col items-center rounded-[20px] border py-5 transition-colors ${
            turn === "agent"
              ? "border-[#2174ff]/50 bg-white shadow-[0_0_0_1px_rgba(33,116,255,0.12)]"
              : "border-slate-200 bg-slate-100"
          }`}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              turn === "agent" ? "bg-[#2174ff]/10" : "bg-slate-200"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path
                d="M10 2.5L11.2 6c.2.6.6 1 1.2 1.2L16 8.5l-3.6 1.3c-.6.2-1 .6-1.2 1.2L10 14l-1.2-3.1c-.2-.6-.6-1-1.2-1.2L4 8.5l3.6-1.3c.6-.2 1-.6 1.2-1.2L10 2.5z"
                fill={turn === "agent" ? "#2174ff" : "rgb(75, 85, 99)"}
              />
            </svg>
          </div>
          <span className="mt-3 text-center text-[11px] text-slate-800">
            AI Agent
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-3 py-3">
        <span className="w-[78px] shrink-0 rounded-md bg-slate-100 px-2 py-1 text-center text-xs font-semibold text-slate-500">
          {turn === "customer" ? "Customer" : "Agent"}
        </span>
        <span className="min-w-0 flex-1 truncate text-left text-xs text-slate-700">
          {turn === "customer" ? intent.prompt : intent.reply}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <label htmlFor={`${id}-intent`} className="sr-only">
          Conversation intent
        </label>
        <select
          id={`${id}-intent`}
          value={intentId}
          onChange={(e) =>
            setIntentId(e.target.value as (typeof INTENTS)[number]["id"])
          }
          className="max-w-[60%] cursor-pointer rounded-lg border border-slate-200 bg-white/80 px-2 py-1.5 text-sm text-slate-700 outline-none transition focus-visible:ring-2 focus-visible:ring-[#2174ff]/40"
        >
          {INTENTS.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-[#0c1328] shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2174ff]/40"
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
}
