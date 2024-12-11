import { motion, useCycle } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface NavbarProps {
  handleOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleOpenModal }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const sidebarVariants = {
    open: {
      clipPath: `circle(1000px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 7,
      },
    },
    closed: {
      clipPath: `circle(30px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const links = ["Home", "About", "Projects"];

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="fixed top-0 w-full z-50 bg-dark-100/80 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <NavLink to="/" className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                <span className="text-xl font-bold uppercase gradient-text">
                  Lyra UZ
                </span>
              </NavLink>

              <div className="hidden sm:flex sm:space-x-8">
                {links.map((item) => (
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
                  <button className="px-4 py-2 bg-primary text-white rounded">
                    Open Modal
                  </button>
                </span>
              
                <div
                  className={`burger ${
                    isOpen ? "open" : ""
                  } block lg:hidden`}
                  onClick={() => toggleOpen()}
                >
                  <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
                  <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
                  <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={sidebarVariants}
          className="fixed top-0 left-0 bottom-0 max-w-[350px] w-full bg-dark-100/80 text-white p-6"
        >
          <nav className="flex flex-col gap-4 mt-16">
            {links.map((link) => (
              <NavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-lg font-medium hover:text-primary"
                onClick={() => toggleOpen()}
              >
                {link}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
