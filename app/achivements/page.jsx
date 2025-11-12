'use client'
import React, { useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import Image from 'next/image';
import { achivements, assets, projects } from '@/assets/assets';
import { motion } from "motion/react"

const Myachivements = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-white text-gray-900 px-6 md:px-16 py-10  dark:bg-darkTheme  dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-5xl font-ovo mb-3">My Achivemets</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-800 font-ovo dark:text-white">
          Here are some of my Achivemets.
        </motion.p>
      </motion.div>

      {/* Project Cards */}
       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achivements.map((item, index) => (

          <motion.div
          whileHover={{ scale: 1.03 }}
            key={index}
            className="border border-gray-400 shadow-md rounded-2xl overflow-hidden hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 transition-all cursor-pointer flex flex-col h-full dark:hover:bg-darkHover dark:hover:shadow-white dark:border-gray-700"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col justify-between ">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-black/10 text-gray-700 text-xs px-2 py-1 rounded-full dark:bg-darkHover dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-semibold mb-1 text-gray-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-white/80">
                  {item.date}
                </p>
              </div>
 
              {/* <div className='flex justify-center '>
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center justify-center gap-3 mt-auto w-[50%]  border border-gray-500 font-ovo px-1 py-2 rounded-full duration-500 transition-all "
                >
                  Github
                  <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />

                </a>
              </div> */}

            </div>
          </motion.div>

        ))}
      </div>

    </motion.section>
  )
}

export default Myachivements
