import React from "react";

function PlayBooks() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/80 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0c1328] sm:text-4xl">
            Handle complex Scenarios, Procedures and Call Scripts
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Large enterprises operate with detailed rules, SOPs, and call flows
            that depend on many factors such as membership level, geography,
            point in the journey, and account status.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We document your business processes, scripts, and rules, and provide
            proven templates for common use cases so AI agents and humans can
            follow the same high quality playbook.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Account & Access",
            "Incident & Outages",
            "Appointments & Dispatch",
            "Complaints & Retention",
            "Sales & Booking",
          ].map((label) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold text-[#0c1328] shadow-sm"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlayBooks;
