import React from "react";

const Hero = () => {
  return (
    <section className="relative z-10 flex min-h-112.5 flex-col items-center justify-center px-5 text-center">
      {/* Client Badge */}
      <div className="mb-7 flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-3">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((item) => (
            <img
              key={item}
              src={`https://i.pravatar.cc/40?img=${item + 10}`}
              alt="Client"
              className="h-8 w-8 rounded-full border-2 border-[#17100e]"
            />
          ))}
        </div>

        <div className="text-left">
          <div className="text-sm tracking-wider text-orange-500">★★★★★</div>
          <p className="text-[11px] text-gray-400">115+ happy clients</p>
        </div>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[52px]">
        Automate <span className="text-orange-600">Intelligence.</span>
        <br />
        Accelerate Growth.
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
        Our AI-powered SaaS platform empowers businesses to streamline
        operations, automate repetitive tasks, and make smarter, data-driven
        decisions—all from one intuitive dashboard.
      </p>

      {/* Buttons */}
      <div className="mt-7 flex flex-wrap justify-center gap-4">
        <button className="rounded-lg bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
          Get Started
        </button>

        <button className="rounded-lg border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:border-orange-500 hover:text-orange-500">
          See Details
        </button>
      </div>
    </section>
  );
};

export default Hero;
