import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import PremiumHeading from "./PremiumHeading";
import BlogCard from "./BlogCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const Blogs = ({ limit }) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs`);
        let fetchedBlogs = response.data.data.blogs;
        if (limit) {
          fetchedBlogs = fetchedBlogs.slice(0, limit);
        }
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [limit]);

  return (
    <section
      id="blogs"
      className="py-24 px-6 md:px-12 max-w-[1700px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <PremiumHeading title="Digital Journal" subtitle="Thoughts & News" />

        {limit && (
          <Link
            to="/blogs"
            className="group flex items-center gap-3 text-amber-500 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">
              Explore All Stories
            </span>
            <div className="w-10 h-10 rounded-full border border-amber-500/30 group-hover:border-white flex items-center justify-center transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        )}
      </div>

      {isLoading ? (
        <div className="py-20 flex justify-center">
          <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
        </div>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No stories published yet.
        </div>
      )}
    </section>
  );
};

export default Blogs;
