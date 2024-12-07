
import { motion } from 'framer-motion';
import { Smartphone, Globe, Settings, Code, Database, Cloud, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Responsive and modern web applications using cutting-edge technologies.',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Automation Services',
      description: 'Custom automation solutions to streamline your business processes.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed for your specific needs.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Design',
      description: 'Efficient and scalable database architectures for your applications.',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and management services.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 blur-sm brightness-[.3] hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Ideas Into
              <span className="gradient-text block leading-normal mt-2">Digital Reality</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We craft exceptional digital solutions that drive innovation and business growth
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-shadow inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-gradient cursor-pointer p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-colors"
              >
                <motion.div whileHover={{ rotate: 180 }} className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-dark-100 overflow-hidden">
        {/* <div className="absolute inset-0 hero-gradient opacity-50" /> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl uppercase font-bold mb-8">
            Start Your Project Today
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r uppercase from-primary to-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-shadow inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;