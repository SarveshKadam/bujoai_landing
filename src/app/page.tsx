import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import AiAgent from "@/components/sections/AiAgent";
import AiCopilot from "@/components/sections/AiCopilot";
import Knowledge from "@/components/sections/Knowledge";
import PlayBooks from "@/components/sections/PlayBooks";
import Enterprise from "@/components/sections/Enterprise";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Clients />
        <AiAgent />
        <AiCopilot />
        <Knowledge />
        <PlayBooks />
        <Enterprise />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
