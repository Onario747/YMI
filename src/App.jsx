import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import Resources from "./components/Resources";
import Volunteers from "./components/Volunteers";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg">
        <Navbar />
      </div>
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Resources />
        <Volunteers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
