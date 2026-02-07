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
import {
  PROJECTS,
  TIMELINE,
  VISION_PILLARS,
  AWARDS_LIST,
  PROCESS_STEPS,
  EXPERTISE,
} from "./constants/data";

const App = () => {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-amber-500/30 overflow-x-hidden">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision pillars={VISION_PILLARS} />
        <Portfolio projects={PROJECTS} />
        <Expertise areas={EXPERTISE} />
        <Awards awards={AWARDS_LIST} />
        <Stats />
        <Experience timeline={TIMELINE} />
        <Newsletter />
        <Marquee />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
