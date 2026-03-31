import { DEMO_HREF } from "@/app/constants/common";

function Blob() {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2174ff]/12 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-[#2174ff]/8 blur-3xl" />
      </div>
    );
  }

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Blob />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
            Wingman is now Bujo
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0c1328] sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem]">
            AI for Enterprise Customer Support.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Deploy conversational AI that reduces contact center costs, cuts
            response times, and improves CSAT across phone and chat.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DEMO_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-[#2174ff] px-8 text-base font-semibold text-white shadow-lg shadow-[#2174ff]/25 transition hover:bg-[#1a5fe0]"
            >
              Book a demo
            </a>
            <a
              href="#products"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-semibold text-[#0c1328] transition hover:border-slate-300 hover:bg-slate-50"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Hero mockup */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl border border-slate-200/80 bg-linear-to-b from-slate-100 to-white p-2 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.18)]">
            <div className="overflow-hidden rounded-xl bg-[#0c1328] shadow-inner">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                <span className="ml-3 text-xs text-slate-400">
                  Customer workspace
                </span>
              </div>
              <div className="grid gap-0 sm:grid-cols-[1fr_220px]">
                <div className="space-y-4 p-6 sm:p-8">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white/10 px-4 py-3 text-sm text-slate-200">
                      Customer
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-[#2174ff]/40 bg-[#2174ff]/15 px-4 py-3 text-sm text-white">
                      <span className="mb-1 block text-xs font-medium text-[#7eb8ff]">
                        AI Agent
                      </span>
                      How do I upgrade my plan?
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-10 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slate-500">
                      Start typing….
                    </div>
                    <span className="rounded-xl bg-[#2174ff] px-4 py-2.5 text-xs font-semibold text-white">
                      Send
                    </span>
                  </div>
                </div>
                <div className="hidden border-l border-white/10 bg-black/20 p-5 sm:block">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Copilot
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    Provide real time assistance to your existing staff for
                    faster and accurate customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
