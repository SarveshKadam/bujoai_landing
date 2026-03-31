import Logo from "./Logo";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-slate-500">Copyright</p>
        </div>
        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <p className="font-semibold text-[#0c1328]">Products</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href="#agents" className="hover:text-[#2174ff]">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#copilot" className="hover:text-[#2174ff]">
                  AI Copilot
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#0c1328]">Industries</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <span>Finance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
