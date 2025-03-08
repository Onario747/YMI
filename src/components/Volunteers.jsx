import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHandsHelping,
  FaUsers,
  FaHeart,
  FaGraduationCap,
} from "react-icons/fa";

const Volunteers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const volunteerRoles = [
    {
      icon: <FaHandsHelping className="w-12 h-12 text-primary-300" />,
      title: "Support Specialist",
      description:
        "Work directly with families and individuals with autism to provide emotional support and practical guidance.",
    },
    {
      icon: <FaUsers className="w-12 h-12 text-primary-300" />,
      title: "Community Organizer",
      description:
        "Help organize events, workshops, and awareness campaigns in your local community.",
    },
    {
      icon: <FaGraduationCap className="w-12 h-12 text-primary-300" />,
      title: "Educational Assistant",
      description:
        "Support our educational programs by helping develop materials and assisting in workshops.",
    },
    {
      icon: <FaHeart className="w-12 h-12 text-primary-300" />,
      title: "Fundraising Champion",
      description:
        "Help raise funds to support our programs and initiatives for families affected by autism.",
    },
  ];

  return (
    <section
      id="volunteers"
      className="py-20 bg-gradient-to-b from-primary-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Join Our Volunteer Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference in the lives of individuals with autism. Your time
            and skills can help create a more inclusive world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {volunteerRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card hover:border-primary-300 hover:border transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">{role.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                {role.title}
              </h3>
              <p className="text-gray-600 text-center">{role.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto bg-primary-600 rounded-xl p-8 shadow-lg text-white"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">
            Ready to Make a Difference?
          </h3>
          <p className="text-center mb-8">
            We welcome volunteers from all backgrounds and skill sets. Whether
            you can offer a few hours a week or a few hours a month, your
            contribution matters.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Apply to Volunteer
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteers;
