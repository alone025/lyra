import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { AnimatedModalDemo } from '../pages/Test';
import { useModal } from '../ui/animated-modal';

const Navbar = () => {
  const {open} = useModal()
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? !open && 'bg-dark-100/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <span className="text-xl font-bold uppercase gradient-text">Lyra UZ</span>
          </NavLink>
          
          <div className="hidden sm:flex sm:space-x-8">
            {['Home', 'About', 'Projects'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'
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
          
      
          <AnimatedModalDemo nvBtn />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;