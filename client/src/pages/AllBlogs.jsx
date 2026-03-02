import Blogs from "../components/Blogs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AllBlogs = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <Helmet>
        <title>Digital Journal | Anoop John | Stories & Insights</title>
        <meta
          name="description"
          content="Explore stories, insights, and news from the world of digital creation, television production, and cinematic storytelling in Anoop John's Digital Journal."
        />
        <meta property="og:title" content="Digital Journal | Anoop John" />
        <meta
          property="og:description"
          content="Behind the scenes and creative insights from award-winning TV director Anoop John."
        />
        <link rel="canonical" href="https://www.anoopjohnofficial.com/blogs" />
        <meta
          property="og:url"
          content="https://www.anoopjohnofficial.com/blogs"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="px-6 md:px-12 max-w-[1700px] mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-4 sm:mb-6"
        >
          The Digital Journal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
        >
          A collection of stories, insights, and news from the world of digital
          creation and legacy.
        </motion.p>
      </div>
      <Blogs />
    </div>
  );
};

export default AllBlogs;
