import { CopilotPreview } from "../marketing/CopilotPreview";
import { IMG_COPILOT } from "@/app/constants/common";

function AiCopilot() {
  return (
    <section id="copilot" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0c1328] sm:text-4xl">
            Upskill your staff with AI copilot
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Close knowledge gaps and improve communication across your existing
            team. The copilot surfaces the right answer, policy, or next action
            in real time so they can respond to customers faster, better, and in
            multiple languages.
          </p>
        </div>

        <div className="relative mt-14">
          <CopilotPreview
            src={IMG_COPILOT}
            alt="Support dashboard with AI copilot"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

export default AiCopilot;
