
function Knowledge() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/80 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0c1328] sm:text-4xl">
            Use AI to modernize customer support at scale while staying aligned
            with your proprietary products and services, brand voice, processes,
            and compliance requirements.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 space-y-6 lg:order-1">
            <h3 className="text-2xl font-bold text-[#0c1328]">
              Turn all product and service data into an enterprise knowledge
              graph
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Your enterprise data may be spread across multiple departments, IT
              systems, PDFs, and partner portals.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We digitize and connect your data from every source into a single
              knowledge graph that captures relationships between products,
              services, orders, and org policies. This becomes the foundational
              knowledge base for AI conversations.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)]">
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                Lead journey
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Inbound Lead",
                  "Discovery",
                  "Qualified",
                  "Bad Fit",
                  "Book Demo",
                  "End Call",
                ].map((step, i) => (
                  <span
                    key={step}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      i === 4
                        ? "bg-[#2174ff] text-white"
                        : "bg-slate-50 text-slate-600 ring-1 ring-slate-200"
                    }`}
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
