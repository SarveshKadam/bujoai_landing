import { DEMO_HREF } from "@/app/constants/common";

function CTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0c1328] px-8 py-16 text-center shadow-[0_32px_64px_-20px_rgba(12,19,40,0.5)] sm:px-16">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2174ff]/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              We move fast and bring you the best of the latest AI improvements.
            </h2>
            <a
              href={DEMO_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-[#2174ff] px-10 text-base font-semibold text-white shadow-lg shadow-[#2174ff]/30 transition hover:bg-[#1a5fe0]"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
