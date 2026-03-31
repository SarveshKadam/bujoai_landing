import Image from "next/image";

function Clients() {
  return (
    <section
      id="products"
      className="border-y border-slate-100 bg-slate-50/50 py-14"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Trusted by industry leaders
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <span>
            <Image
              src="https://framerusercontent.com/images/TbBEg1blO2WkqoRYD0Ud41whI.png?scale-down-to=512&width=1280&height=587"
              alt="Retail"
              width={100}
              height={100}
            />
          </span>
          <span>
            <Image
              src="https://framerusercontent.com/images/dgzokGYF8ZmR9VlErwvL00R86uQ.png?scale-down-to=512&width=2269&height=746"
              alt="Healthcare"
              width={100}
              height={100}
            />
          </span>
          <span>
            <Image
              src="https://framerusercontent.com/images/InZ0gHFFwHJLgGHzMP2r2UPiZc.png?width=420&height=274"
              alt="Telecom"
              width={100}
              height={100}
            />
          </span>
          <span>
            <Image
              src="https://framerusercontent.com/images/d6PBJG6ekgv5pSLcPzXTibQmLI.png?scale-down-to=512&width=1298&height=328"
              alt="Fintech"
              width={100}
              height={100}
            />
          </span>
          <span>
            <Image
              src="https://framerusercontent.com/images/QVER33vywPYyVAfCani8YVIjy6c.png?width=341&height=148"
              alt="Travel"
              width={100}
              height={100}
            />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Clients;
