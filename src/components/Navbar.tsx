import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedModalDemo } from "../pages/Test";

interface NavbarProps {
  handleOpenModal: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ handleOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
          scrolled ? "bg-dark-100/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <span className="text-xl font-bold uppercase gradient-text">
                Lyra UZ
              </span>
            </NavLink>

            <div className="hidden sm:flex sm:space-x-8">
              {["Home", "About", "Projects"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-gray-300 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          initial={false}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-8">
              <span onClick={handleOpenModal}>
                <AnimatedModalDemo nvBtn />
              </span>

              <div
                className={`burger ${isMenuOpen ? "open" : ""} block sm:hidden`}
                onClick={toggleMenu}
              >
                <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
                <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41] dark:bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <div
        className={`menu duration-300 h-full xl:w-[calc(100%-170px)] lg:hidden max-w-xl xl:max-w-none xl:h-auto fixed inset-0 z-[99] pt-20 lg:pt-24 px-5 pb-6 flex flex-col justify-between xl:hidden bg-black ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="xl:flex xl:gap-x-5">
          <Link
            to={"/"}
            onClick={toggleMenu}
            className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:bg-[#f8f9fa1a] dark:bg-opacity-10"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            onClick={toggleMenu}
            className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:bg-[#f8f9fa1a] dark:bg-opacity-10"
          >
            About
          </Link>
          <Link
            to={"/projects"}
            onClick={toggleMenu}
            className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer bg-[#f8f9fa] dark:bg-[#f8f9fa1a] dark:bg-opacity-10"
          >
            Projects
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
