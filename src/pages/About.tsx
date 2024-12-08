import { motion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Completed Projects', value: '200+' },
    { label: 'Happy Clients', value: '150+' },
    { label: 'Team Members', value: '50+' },
  ];

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Focused',
      description: 'We put our clients first, ensuring their success is our top priority.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Quality-Driven',
      description: 'We maintain the highest standards in every project we deliver.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies.',
    },
  ];

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
    <div className="min-h-screen pt-16 bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold mb-6 text-white">About Lyra Uz</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              We are a team of passionate developers and designers dedicated to creating
              exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 card-gradient rounded-lg shadow-lg"
              >
                <div className="text-5xl font-extrabold text-gray-100 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-400">
              These core values guide everything we do
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-gradient p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:shadow-primary/20"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-100 mx-auto mb-4 hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Team</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-400">
              Meet the talented individuals who make it all possible
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card-gradient rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300"
              >
                <img
                  src={`https://source.unsplash.com/random/400x400?portrait&${index}`}
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-1">
                    {['John Doe', 'Jane Smith', 'Mike Johnson'][index]}
                  </h3>
                  <p className="text-gray-400">
                    {[
                      'Lead Developer',
                      'UI/UX Designer',
                      'Project Manager',
                    ][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
