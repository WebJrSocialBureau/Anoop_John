import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import BlogForm from "./pages/BlogForm";
import AllBlogs from "./pages/AllBlogs";
import BlogDetail from "./pages/BlogDetail";
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
    <Hero />
    <About />
    <Vision pillars={VISION_PILLARS} />
    <Portfolio projects={PROJECTS} />
    <Expertise areas={EXPERTISE} />
    <Awards awards={AWARDS_LIST} />
    <Stats />
    <Experience timeline={TIMELINE} />
    <Blogs limit={3} />
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
          <BackToTop />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
