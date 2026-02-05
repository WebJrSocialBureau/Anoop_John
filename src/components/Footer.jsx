import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none text-white">
        <h2 className="text-[50vw] font-serif font-black absolute -bottom-1/4 -right-1/4 select-none whitespace-nowrap leading-none italic">
          ANOOP
        </h2>
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 md:gap-32 mb-20 md:mb-40">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-6xl md:text-[140px] font-serif font-bold text-white mb-16 tracking-tighter leading-[0.8]">
              Elevating <br /> <span className="text-amber-500">Reality.</span>
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                Inquiry / Masterclasses / Productions
              </p>
              <a
                href="mailto:hello@anoopjohn.media"
                className="text-xl sm:text-3xl md:text-6xl font-light hover:text-amber-500 transition-colors flex items-center gap-6 group font-serif text-white"
              >
                hello@anoopjohn.media{" "}
                <ArrowUpRight className="w-5 h-5 md:w-12 md:h-12 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-24 items-end text-right">
            <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Instagram — Feed
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                LinkedIn — Network
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                IMDb — Filmography
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.4em] text-gray-700">
          <div className="flex flex-col md:flex-row gap-8">
            <span>© 2024 ANOOP JOHN MEDIA GROUP</span>
            <span className="text-white/20">PRIVATE & CONFIDENTIAL</span>
          </div>
          <span>KERALA, INDIA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
