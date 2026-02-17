import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Image as ImageIcon, Type, Layout } from "lucide-react";

const AddBlogModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Insights",
    excerpt: "",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    setFormData({
      title: "",
      category: "Insights",
      excerpt: "",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-500/10"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
                    Create Blog
                  </h2>
                  <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mt-2">
                    Add to your legacy
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-red-600 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-zinc-500 ml-1">
                    <Type size={12} className="text-red-500" /> Title
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-zinc-700"
                    placeholder="Enter post title..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-zinc-500 ml-1">
                      <Layout size={12} className="text-red-500" /> Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 transition-all appearance-none"
                    >
                      <option>Insights</option>
                      <option>Production</option>
                      <option>Masterclass</option>
                      <option>Behind Scenes</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-zinc-500 ml-1">
                      <ImageIcon size={12} className="text-red-500" /> Image URL
                    </label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-zinc-700 font-mono text-xs"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-zinc-500 ml-1">
                    Excerpt
                  </label>
                  <textarea
                    required
                    rows="3"
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-zinc-700 resize-none"
                    placeholder="A brief summary of your story..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black tracking-[0.3em] uppercase py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group"
                >
                  Publish Post
                  <Plus
                    size={20}
                    className="group-hover:rotate-90 transition-transform duration-500"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddBlogModal;
