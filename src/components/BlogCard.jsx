import React from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-red-600 text-[10px] font-black tracking-widest uppercase text-white rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={12} className="text-red-500" />
            {blog.date}
          </span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300 leading-tight">
          {blog.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {blog.excerpt}
        </p>

        <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-white group/btn">
          Read Story
          <ArrowRight
            size={14}
            className="text-red-500 group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
