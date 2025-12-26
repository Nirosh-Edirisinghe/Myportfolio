'use client'
import React, { useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import Image from 'next/image';
import { assets, projects } from '@/assets/assets';
import { motion } from "motion/react"

const MyProject = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter Projects Based on Selected Category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
        (item) =>
          item.category.toLowerCase() === selectedCategory.toLowerCase()
      )


  const categories = ['All', 'FullStack', 'FrontEnd', 'Mobile', 'Mini']

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
          className="text-center text-5xl text-gray-800 font-ovo dark:text-gray-200 mb-3">My Projects</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-800 font-ovo  dark:text-white">
          I have worked on a wide range of projects. Here are some of my projects.
        </motion.p>
      </motion.div>

      {/* Toggle Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center bg-white border border-gray-300 rounded-full p-2 shadow-sm px-3 gap-2 dark:border  dark:border-white/50 dark:bg-transparent">
          {categories.map((category) => ( 
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                ? 'bg-black/80 text-white shadow-md dark:bg-darkHover'
                : 'text-gray-700 hover:bg-black/10 dark:text-white/80'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div >


      {/* Project Cards */}
      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (

          <motion.div
          whileHover={{ scale: 1.03 }}
            key={index}
            className="border border-gray-400 shadow-md rounded-2xl overflow-hidden hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 transition-all cursor-pointer flex flex-col h-full dark:hover:bg-darkHover/20 dark:hover:shadow-white dark:border-gray-700"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => ( 
                    <span
                      key={i}
                      className="bg-black/10 text-gray-700 text-sm px-3 py-1 rounded-full dark:bg-darkHover dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className='flex justify-center '>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center justify-center gap-3 mt-auto w-[50%]  border border-gray-500 font-ovo px-1 py-2 rounded-full duration-500 transition-all "
                >
                  Github
                  <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />

                </a>
              </div>

            </div>
          </motion.div>

        ))}
      </motion.div>
    </motion.section>
  )
}

export default MyProject
