import React from "react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-16 md:pt-20 lg:pt-24 pb-5 px-6 md:px-12 lg:px-20 bg-black relative overflow-hidden"
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
                href="mailto:anoop@time7.in"
                className="text-xl sm:text-3xl md:text-6xl font-light hover:text-amber-500 transition-colors flex items-center gap-6 group font-serif text-white"
                aria-label="Send an email to Anoop John"
              >
                anoop@time7.in
              </a>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/anopjohn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram - Anoop John"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/10 text-white hover:text-amber-500 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/anoopj0hn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook - Anoop John"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/10 text-white hover:text-amber-500 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="https://in.linkedin.com/in/anoop-john-8b2a63141"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn - Anoop John"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/10 text-white hover:text-amber-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@bigtv24x7live"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube - BigTV24x7Live"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/10 text-white hover:text-amber-500 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="flex flex-row items-center gap-3 text-[9px] md:text-[11px] font-bold text-muted uppercase tracking-[0.2em] mt-6 justify-start w-full text-left">
              <span>POWERED BY</span>

              <a href="https://www.socialbureau.in/enquiry-form" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center">
                <img
                  src="https://www.socialbureau.in/assets/logo.webp"
                  alt="SocialBureau"
                  className="h-5 md:h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.4em] text-gray-700">
          <div className="flex flex-col md:flex-row gap-8">
            <span>© 2024 ANOOP JOHN MEDIA GROUP</span>
          </div>
          <span>KERALA, INDIA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
