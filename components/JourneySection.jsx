import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react"

const JourneySection = () => {
  const [lineHeight, setLineHeight] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("journey-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // How much user scrolled inside the journey section
      const visible = Math.min(
        Math.max(0, windowHeight - rect.top),
        rect.height
      );

      // Convert to percentage for the colored line
      const percent = (visible / rect.height) * 100;

      setLineHeight(`${percent}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="journey-section"
      className="relative py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center mb-2 text-lg font-ovo'>My Journey</motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl text-gray-800 font-ovo mb-6 dark:text-gray-200">Growth & Experience</motion.h2>

        <div className="flex flex-col space-y-24 relative">
          {/* ===== LEFT FULL LINE BACKGROUND ===== */}
          <div className="absolute left-[27px] top-0 w-1 h-full bg-gray-400 rounded-full" />

          {/* ===== LEFT COLORED SCROLL LINE ===== */}
          <div
            className="absolute left-[27px] top-0 w-1 bg-gray-600 rounded-full transition-all duration-200"
            style={{ height: lineHeight }}
          />

          {/* ======= INTERNSHIP ======= */}
          <div className="flex items-start relative">
            <div className="flex flex-col items-center mr-8 relative z-10">
              <div className="bg-gray-200
               border-4 border-gray-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                <Image src={assets.esupport} alt="" className="w-8" />
              </div>
            </div>

            <div className="border-[0.5px] border-gray-300 rounded-2xl p-6 flex-1 shadow-md">
              <h3 className="text-2xl text-gray-900 font-semibold dark:text-gray-300">
                Software Engineering Intern
              </h3>
              <p className="text-gray-800 mt-1 dark:text-gray-400">eSupport Technologies (Pvt) Ltd</p>
              <p className="text-gray-600 mt-1 dark:text-gray-400">May - Nov 2025</p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Software Engineering Intern at eSupport Technologies, contributing to real-world web solutions using React, MUI, Laravel, and MySQL.Gained hands-on experience in building modern systems, improving performance, and working within a professional development team.
              </p>
            </div>
          </div>

          {/* ======= BITC DEGREE ======= */}
          <div className="flex items-start relative">
            <div className="flex flex-col items-center mr-8 relative z-10">
              <div className="bg-gray-200 border-4 border-gray-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                🎓
              </div>
            </div>

            <div className=" border-[0.5px] border-gray-300 rounded-2xl p-6 flex-1 shadow-md">
              <h3 className="text-2xl text-gray-900 font-semibold dark:text-gray-300">
                Bachelor of Information and Communication Technology (Hons)
              </h3>
              <p className="text-gray-800 mt-1 dark:text-gray-400">
                Rajarata University of Sri Lanka
              </p>
              <p className="text-gray-600 mt-1 dark:text-gray-400">2021 – Present</p>
              <p className="mt-4 text-gray-600 dark:text-white">
                A passionate ICT undergraduate at Rajarata University of Sri Lanka, focused on building modern digital solutions.Driven by curiosity and hands-on learning in software development and emerging technologies.Maintaining a strong academic performance with a current GPA of 3.48 while continuously growing in the tech field.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default JourneySection;
