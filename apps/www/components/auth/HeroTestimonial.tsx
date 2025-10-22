// components/HeroTestimonial.tsx
import React from "react";

export function HeroTestimonial() {
  return (
    <div className="p-5 h-full hidden lg:block">
      <div
        className="flex h-full rounded-xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/creative-ai-thumb.jpeg")',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col items-center justify-end relative z-10">
          <h1 className="text-3xl font-bold mb-3 text-white">Welcome</h1>
          <div className="font-medium text-white text-center">
            Turn concepts into reality with our <br /> AI Website Generator for landing pages and dashboards.
          </div>
          <div className="mt-7 text-6xl font-semibold text-white">Creative Tim</div>
          <div className="group bg-white/70 border w-fill mt-40 relative m-4 p-4 pr-1 py-1 rounded-xl lg:p-6 lg:ring-1 lg:ring-inset lg:ring-white/20">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="font-display text-lg text-amber-400">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="font-display text-sm mt-4 text-black">
                  &quot;Creative Tim has transformed our web development process. The AI-powered platform helps us create beautiful, functional pages in a fraction of the time, letting us focus on what matters most - delivering value to our customers.&quot;
                </div>
                <div className="font-display text-sm mt-6 flex flex-row items-center">
                  <div>
                    <div className="font-semibold mb-1 text-black">Sarah Chen</div>
                    <div className="text-black">Head of Product @TechForward</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
