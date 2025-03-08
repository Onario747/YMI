import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-500/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80"
          alt="Children playing and learning together"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Embracing Autism,<br />
              <span className="text-secondary-300">Empowering Lives</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Creating a world where every individual with autism is understood, 
              supported, and empowered to reach their full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100"
              >
                Get Involved
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 border-2 border-white bg-transparent hover:bg-white/10"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <div className="flex justify-center mt-16">
            {[
              { title: "100%", desc: "Dedication to Care" }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-[400px] w-full"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-200">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;