import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Portfolio", href: "/#works" },
    { name: "Legacy", href: "/#about" },
    { name: "Timeline", href: "/#experience" },
  ];

  if (user) {
    navLinks.push({ name: "Dashboard", href: "/admin", isRoute: true });
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-100 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference">
        <Link
          to="/"
          className="text-xl font-serif font-black tracking-tighter text-white"
        >
          ANOOP JOHN
        </Link>

        <div className="flex gap-8 items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all text-white border border-white/10"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-90 flex flex-col items-center justify-center p-12"
          >
            <div className="space-y-8 text-center">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-4xl md:text-6xl font-serif font-bold text-white hover:italic hover:text-amber-500 transition-all"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-4xl md:text-6xl font-serif font-bold text-white hover:italic hover:text-amber-500 transition-all"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}

              {!user ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl md:text-6xl font-serif font-bold text-amber-500 hover:italic transition-all"
                  >
                    Login
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={handleLogout}
                    className="block text-4xl md:text-6xl font-serif font-bold text-red-500 hover:italic transition-all mx-auto"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
