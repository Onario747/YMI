import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHandsHelping,
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaUserMd,
  FaCross,
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
        "Support our educational programs by helping develop materials and assisting in workshops for individuals with autism.",
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

        {/* Young Minds Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto bg-secondary-50 rounded-xl p-8 shadow-lg border border-secondary-200 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <FaCross className="w-24 h-24 text-secondary-500" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Young Minds Community
              </h3>
              <p className="text-gray-700 mb-4">
                A sub-unit of the Young Minds Initiative that aims to foster
                love, togetherness, and a sense of community.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span>
                    We encourage individuals with autism that they can be the
                    best versions of themselves and succeed in any career path
                    they choose.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span>
                    We build a supportive community where everyone feels valued
                    and understood.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span>Most importantly, we show love through Christ.</span>
                </li>
              </ul>
              <div className="bg-secondary-100 p-4 rounded-lg">
                <p className="font-bold text-center text-gray-900">
                  MOTTO: GOD LOOKED AT THE WORLD AND KNEW THAT IT NEEDED ONE OF
                  YOU, SO YOU ARE IMPORTANT AND HAVE A PURPOSE TO FULFILL
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Medical Professionals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-5xl mx-auto bg-primary-50 rounded-xl p-8 shadow-lg border border-primary-200 mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
            For Medical Professionals & Therapists
          </h3>
          <p className="text-gray-700 text-center mb-6">
            We welcome healthcare professionals, therapists, and specialists who
            want to contribute their expertise to support individuals with
            autism.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <FaUserMd className="w-10 h-10 text-primary-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">
                Medical Professionals
              </h4>
              <p className="text-gray-600 text-center">
                Doctors, nurses, and healthcare providers can offer specialized
                support and medical guidance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <FaHandsHelping className="w-10 h-10 text-primary-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">
                Therapists & Specialists
              </h4>
              <p className="text-gray-600 text-center">
                Speech therapists, occupational therapists, and behavioral
                specialists can provide valuable expertise.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <motion.a
              href="#professional-volunteer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow"
            >
              Professional Volunteer Application
            </motion.a>
          </div>
        </motion.div>

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
              onClick={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfs375n2eS_NDiw1zGb8MeLhPTBr0qMV1t08JQgMq_JrkvMIg/viewform?usp=dialog",
                  "_blank"
                );
              }}
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
