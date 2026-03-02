import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Vision from "./components/Vision";
import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Newsletter from "./components/Newsletter";
import Stats from "./components/Stats";
import Marquee from "./components/Marquee";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
// Lazy load components for better performance
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const BlogForm = lazy(() => import("./pages/BlogForm"));
const AllBlogs = lazy(() => import("./pages/AllBlogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
  </div>
);
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

import {
  PROJECTS,
  TIMELINE,
  VISION_PILLARS,
  AWARDS_LIST,
  PROCESS_STEPS,
  EXPERTISE,
} from "./constants/data";

const Home = () => (
  <main>
    <Helmet>
      <title>Anoop John | Award-Winning TV Director & Media Professional</title>
      <meta
        name="description"
        content="Official portfolio of Anoop John, award-winning TV director, media architect, and non-fiction visionary with 17+ years of experience in television disruption."
      />
      <link rel="canonical" href="https://anoopjohn.com" />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Anoop John | Award-Winning TV Director"
      />
      <meta
        property="og:description"
        content="Explore the creative journey and portfolio of Anoop John, a visionary in television direction and production."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://anoopjohn.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Hero />
    <div className="[content-visibility:auto] [contain-intrinsic-size:1000px]">
      <About />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:500px]">
      <Vision pillars={VISION_PILLARS} />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:1500px]">
      <Portfolio projects={PROJECTS} />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:800px]">
      <Expertise areas={EXPERTISE} />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:600px]">
      <Awards awards={AWARDS_LIST} />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:300px]">
      <Stats />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:500px]">
      <Experience timeline={TIMELINE} />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:800px]">
      <Blogs limit={3} />
    </div>
    <Newsletter />
    <Marquee />
  </main>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-[#050505] min-h-screen selection:bg-amber-500/30 overflow-x-hidden">
          <Toaster position="top-right" />
          <ScrollToTop />
          <SmoothScroll />
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blogs" element={<AllBlogs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blogs/new"
                element={
                  <ProtectedRoute>
                    <BlogForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blogs/edit/:id"
                element={
                  <ProtectedRoute>
                    <BlogForm />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
          <BackToTop />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
