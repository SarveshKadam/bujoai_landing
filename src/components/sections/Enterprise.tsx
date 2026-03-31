import { ENTERPRISE_ITEMS } from "@/app/constants/common";

function Enterprise() {
  return (
    <section id="enterprise" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-[#0c1328] sm:text-4xl">
          Enterprise ready conversational AI that fits into your existing stack
          without adding operational risk.
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENTERPRISE_ITEMS.map((item) => (
            <div
              key={item.title.slice(0, 40)}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <p className="text-lg font-bold leading-relaxed text-slate-600">{item.title}</p>
              <p className="text-base leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Enterprise;
