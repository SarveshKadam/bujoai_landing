const ENTERPRISE_ITEMS = [{
  title: "SOC 2 and privacy first",
  description: "No personally identifiable information is stored in the platform or sent directly to base LLMs. Controls align with enterprise security and privacy standards.",
}, {
  title: "Strong guardrails",
  description: "Policy driven guardrails prevent disallowed topics, competitor mentions, and off brand responses, with full auditability.",
}, {
  title: "Hallucination free",
  description: "Every response is anchored in your approved knowledge base and systems of record, so AI stays accurate and consistent.",
}, {
  title: "Multiple voices and personalities",
  description: "Configure different AI personalities and tones for each use case, product line, or region while keeping content strictly on script.",
}, {
  title: "Interoperable LLM providers",
  description: "Use your preferred LLM vendor or mix of vendors while keeping your enterprise data in a single governed knowledge layer.",
}, {
  title: "Insights and analytics",
  description: "Get clear reporting on intents, resolutions, containment, and sentiment so CX, operations, and product teams can act on real customer data.",
}];

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
