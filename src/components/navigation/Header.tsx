import { DEMO_HREF } from '@/app/constants/common';
import Image from 'next/image'
import Logo from './Logo';


function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-8">
      <Logo />
      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <a
          href="#agents"
          className="transition-colors hover:text-[#0c1328]"
        >
          AI Agents
        </a>
        <a
          href="#copilot"
          className="transition-colors hover:text-[#0c1328]"
        >
          AI Copilot
        </a>
      </nav>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-gray-300/60 px-3 py-1.5 bg-white/60 backdrop-blur">
          <span className="hidden md:block text-sm text-gray-500">Backed by</span>

          <div className="relative h-5 w-[90px]">
            <Image
              src="https://framerusercontent.com/images/jjwyd93aCdzelKPXC1OHWESdvmI.png"
              alt="Y Combinator"
              fill
              className="object-contain"
              sizes="100px"
              priority
            />
          </div>
        </div>
        <a
          href={DEMO_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-[#0c1328] px-5 text-sm font-semibold text-white transition hover:bg-[#141d38]"
        >
          Book demo
        </a>
      </div>
    </div>
  </header>
  )
}

export default Header