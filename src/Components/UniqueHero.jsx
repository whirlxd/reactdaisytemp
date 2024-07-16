// src/components/UniqueHeroSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "./githubglobe";
import { AnimationOnScroll } from "react-animation-on-scroll";
const UniqueHeroSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const toggleTyping = () => setIsTyping(!isTyping);

  return (
    <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent"></div>
      <div className="relative z-10 text-center">
        <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`text-5xl font-bold text-white ${
              isTyping ? "typewriter" : ""
            }`}
          >
            Cyber Security 101
          </motion.h1>
        </AnimationOnScroll>

        <br></br>
        <RotatingText
          words={["HTTPS", "XSS", "SQL Injection", "CSRF", "DDoS", "Malware"]}
        />
        <br></br>
        <AnimationOnScroll animateOnce="true" animateIn="slideInUp" delay={700}>
          <p className="text-xl text-balance text-white">
            Dive into the fundamentals of web cyber security with our
            easy-to-follow guide. Learn how to safeguard your online presence
            and prevent cyber threats.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce="true" animateIn="slideInUp" delay={800}>
          <div className="mt-8">
            <a
              href="#features"
              className="inline-flex h-12 w-48 text-pretty text-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 "
            >
              <p className="ml-8 bold">Get Started</p>
            </a>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default UniqueHeroSection;
