import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import {
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  User as UserIcon,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/blogs`);
      setBlogs(response.data.data.blogs);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`${API_URL}/blogs/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      toast.success("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-400">Manage your stories and content</p>
          </div>

          <Link
            to="/admin/blogs/new"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-full transition-all transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Create New Blog
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121212] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#121212] border border-white/5 rounded-xl text-gray-400 hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Blogs List */}
        <div className="grid grid-cols-1 gap-4">
          {isLoading ? (
            <div className="py-20 flex justify-center">
              <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
            </div>
          ) : filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-[#0a0a0a] border border-white/5 hover:border-white/20 rounded-2xl p-6 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden bg-white/5">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x300?text=No+Image";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-700">
                        <ExternalLink className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {blog.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <UserIcon className="w-4 h-4" />
                        {blog.author?.name || "Admin"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/blogs/${blog._id}`}
                      target="_blank"
                      className="p-3 bg-[#121212] border border-white/5 rounded-xl text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
                      title="View Post"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                    <Link
                      to={`/admin/blogs/edit/${blog._id}`}
                      className="p-3 bg-[#121212] border border-white/5 rounded-xl text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
                      title="Edit Post"
                    >
                      <Edit2 className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="p-3 bg-[#121212] border border-white/5 rounded-xl text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-all"
                      title="Delete Post"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-[#0a0a0a] border border-dashed border-white/10 rounded-2xl">
              <p className="text-gray-500 mb-4">No blogs found</p>
              <Link
                to="/admin/blogs/new"
                className="text-amber-500 hover:underline"
              >
                Create your first blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
