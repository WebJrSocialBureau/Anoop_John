import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 bg-zinc-950">
      <div className="container mx-auto">
        <div className="glass p-8 md:p-24 lg:p-32 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
              Future Collaboration
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-white mb-12 tracking-tighter leading-[0.9]">
              Let's craft the <span className="italic">next legend.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-16 font-light">
              Interested in a masterclass or co-producing the next major TV
              format? Leave your contact to start the dialogue.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="media@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-10 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500 transition-colors pr-24"
                disabled={isSubmitted}
              />
              <button
                type="submit"
                className={`absolute right-2 top-2 bottom-2 w-16 md:w-20 rounded-full flex items-center justify-center transition-all ${
                  isSubmitted
                    ? "bg-green-500"
                    : "bg-amber-500 hover:bg-white text-black"
                }`}
              >
                {isSubmitted ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-10 text-[10px] font-black tracking-widest text-white/30 uppercase">
              <span className="flex items-center gap-2">
                <ArrowUpRight className="w-3 h-3" /> Consulting
              </span>
              <span className="flex items-center gap-2">
                <ArrowUpRight className="w-3 h-3" /> Direction
              </span>
              <span className="flex items-center gap-2">
                <ArrowUpRight className="w-3 h-3" /> Format Sales
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
