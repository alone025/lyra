
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { sampleProjects } from '../data/projects';
import { AnimatedModalDemo } from './Test';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger) 



const Projects = () => {




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <div id='contein' className="min-h-screen pt-16 bg-black text-gray-200">
      {/* Hero Section */}
      <section id='hero_section' className="relative py-20 bg-black text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology,projects)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold mb-6 text-white">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects_section' className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sampleProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card-gradient rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='cta_section' className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold uppercase mb-6 text-white">Don't wait for tomorrow. Start your project now.</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Let us bring your ideas to life with our expertise and passion for innovation.
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-700 uppercase text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Contact Us
            </motion.button> */}
                 <AnimatedModalDemo nvBtn={false} />
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Projects;
