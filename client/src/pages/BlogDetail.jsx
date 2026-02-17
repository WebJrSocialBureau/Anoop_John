import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, Loader2 } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs/${id}`);
        setBlog(response.data.data.blog);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <Loader2 className="w-12 h-12 text-red-500 animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">Post Not Found</h1>
        <Link
          to="/blogs"
          className="text-red-500 flex items-center gap-2 hover:underline"
        >
          <ArrowLeft size={20} /> Back to Digital Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-12">
      <article className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 md:mb-8 group text-xs md:text-sm"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>

          <div className="mb-8 md:mb-12">
            <span className="px-3 py-1 bg-red-600 text-[9px] md:text-[10px] font-black tracking-widest uppercase text-white rounded-full mb-4 md:mb-6 inline-block">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-zinc-500 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border-y border-white/5 py-4 md:py-6">
              <span className="flex items-center gap-2">
                <User size={14} className="text-red-500" />
                {blog.author?.name || "Anonymous"}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-red-500" />
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="prose prose-invert prose-red max-w-none">
            <div
              className="text-zinc-300 text-base md:text-lg leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetail;
