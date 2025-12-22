import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { useRouter } from "next/navigation";

const Work = ({ isDarkMode }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-ovo'
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
      >
        Welcome to my web development portfolio Explore a xollection of projects showcasing my expertise in web development.
      </motion.p>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 dark:text-black'> */}
      {/* {
          workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
              <button onClick={() => router.push("/projects")}>
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='send-icon' className='w-5' />
                </div>
                
              </div>
              </button>

            </motion.div>
          ))
        } */}

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="py-2 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white dark:bg-darkHover/40 overflow-hidden"
            >

              
              <div className="w-full h-36 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              
              <div className="p-4 flex flex-col h-full justify-between">

                <div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {project.description}
                  </p>
                </div>

               
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    className=" flex items-center gap-2 border border-gray-400 dark:border-gray-600 px-3 py-1 rounded-full text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                  >
                    GitHub
                    <Image
                      src={assets.send_icon}
                      className="w-4 opacity-70"
                      alt="send"
                    />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div> */}

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="p-1 border border-gray-300 dark:border-gray-700 
      rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
      cursor-pointer bg-white dark:bg-darkHover/40 overflow-hidden 
      flex flex-col h-full"
            >

             
              <div className="w-full h-50 overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-black/10 text-gray-700 text-xs px-2 py-0.5 rounded-full dark:bg-darkHover dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

           
              <div className="p-4 flex flex-col justify-between h-full">

                <div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {project.description}
                  </p>
                </div>

               
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-gray-400 
            dark:border-gray-600 px-3 py-1 rounded-full text-sm 
            hover:bg-black hover:text-white dark:hover:bg-white 
            dark:hover:text-black transition"
                  >
                    GitHub
                    <Image
                      src={assets.send_icon}
                      className="w-4 opacity-70"
                      alt="send"
                    />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>


      </motion.div> */}



      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 dark:text-black"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="p-1 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 duration-500 cursor-pointer bg-white  dark:bg-darkHover/40 overflow-hidden flex flex-col h-full "
            >
              {/* Image */}
              <div className="w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-black/10 text-gray-700 text-xs px-2 py-0.5 rounded-full dark:bg-darkHover dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {project.description}
                  </p>
                </div>

                {/* Github Button */}
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-gray-400 dark:border-gray-600 px-3 py-1 rounded-full text-sm hover:shadow-black dark:hover:bg-white dark:hover:text-black transition"
                  >
                    GitHub
                    <Image
                      src={assets.send_icon}
                      className="w-4 opacity-70"
                      alt="send"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <motion.a
       onClick={() => router.push("/projects")}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
         className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </motion.a>

    </motion.div>


  )
}

export default Work
