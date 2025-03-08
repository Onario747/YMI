import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileAlt, FaUserFriends, FaQuestionCircle, FaNewspaper } from 'react-icons/fa';

const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resources = [
    {
      icon: <FaFileAlt className="w-8 h-8 text-primary-600" />,
      title: "Educational Materials",
      description: "Access our comprehensive collection of educational resources about autism."
    },
    {
      icon: <FaUserFriends className="w-8 h-8 text-primary-600" />,
      title: "Parent Guides",
      description: "Practical guides and tips for parents supporting children with autism."
    },
    {
      icon: <FaQuestionCircle className="w-8 h-8 text-primary-600" />,
      title: "FAQ Section",
      description: "Answers to commonly asked questions about autism and our services."
    },
    {
      icon: <FaNewspaper className="w-8 h-8 text-primary-600" />,
      title: "Latest Research",
      description: "Stay updated with the latest research and developments in autism care."
    }
  ];

  return (
    <section id="resources" className="section-padding bg-neutral-warm" ref={ref}>
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access valuable resources and information to support your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600">
                {resource.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;