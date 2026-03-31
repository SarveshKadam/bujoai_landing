import Image from "next/image";
import { VoiceAgentMock } from "../marketing/VoiceAgentMock";
import { IMG_CHAT, IMG_VOICE } from "@/app/constants/common";
import { ChatAgentMock } from "../marketing/ChatAgentMock";

function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(33,116,255,0.22)_1px,transparent_1.01px)] [background-size:24px_24px] ${className ?? ""}`}
    />
  );
}

function AiAgent() {
  return (
    <section
      id="agents"
      className="relative overflow-hidden border-y border-slate-100 bg-slate-50 py-20 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(33,116,255,0.12),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0c1328] sm:text-4xl">
            Delight customers 24/7 with conversational AI agents
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Handle high volumes of calls and chats with natural, on brand
            conversations that actually resolve problems.
          </p>
        </div>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 relative min-h-[280px] sm:min-h-[360px]">
            <div className="relative h-[420px] sm:h-[480px] lg:h-auto lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.15)]">
              <Image
                src={IMG_VOICE}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <DotGrid className="opacity-70 mix-blend-multiply" />
              <div className="absolute inset-0 flex justify-center items-center">
                <VoiceAgentMock />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-xl font-bold text-[#0c1328] sm:text-2xl">
              Voice support agents
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Voice agents that understand intent, handle complex scenarios, and
              close out calls with accurate, reliable actions.
            </p>
          </div>
        </div>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-2 relative min-h-[280px] sm:min-h-[360px]">
            <div className="relative h-[420px] sm:h-[480px] lg:h-auto lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.15)]">
              <Image
                src={IMG_CHAT}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <DotGrid className="opacity-70 mix-blend-multiply" />
              <div className="absolute inset-0 flex justify-center items-center">
                <ChatAgentMock />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-1">
            <h3 className="text-xl font-bold text-[#0c1328] sm:text-2xl">
              Chat support agents
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Chat agents that troubleshoot, answer questions, and complete
              workflows with the same quality as your best human agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiAgent;
