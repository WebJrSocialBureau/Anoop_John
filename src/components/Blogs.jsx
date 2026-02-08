import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import PremiumHeading from "./PremiumHeading";
import BlogCard from "./BlogCard";
import AddBlogModal from "./AddBlogModal";
import { BLOGS as INITIAL_BLOGS } from "../constants/data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <section
      id="blogs"
      className="py-24 px-6 md:px-12 max-w-[1700px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <PremiumHeading title="Digital Journal" subtitle="Thoughts & News" />

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-3 bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-500 rounded-full px-8 py-4 transition-all duration-500"
        >
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white">
            Write Story
          </span>
          <div className="w-8 h-8 rounded-full bg-red-600 group-hover:bg-white flex items-center justify-center transition-colors">
            <Plus size={16} className="text-white group-hover:text-red-600" />
          </div>
        </motion.button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>

      <AddBlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddBlog}
      />
    </section>
  );
};

export default Blogs;
