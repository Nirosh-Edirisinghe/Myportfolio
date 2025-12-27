import { assets, Bio } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaCheckCircle } from "react-icons/fa";


const Header = () => {
  return (
    // <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 pt-4'>
    //   <motion.div
    //     initial={{ scale: 0 }}
    //     whileInView={{ scale: 1 }}
    //     transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    //   >
    //     <Image src={assets.myprofile} alt='' className='rounded-full w-32' />
    //   </motion.div>

    //   <motion.h3
    //     initial={{ y: -20, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 1 }}
    //     transition={{ duration: 0.6, delay: 0.3 }}
    //     className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
    //   >
    //     Hi I'm Nirosh Edirisinghe
    //     <Image src={assets.hand_icon} alt='' className='w-6' />
    //   </motion.h3>

    //   <motion.h1
    //     initial={{ y: -30, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 1 }}
    //     transition={{ duration: 0.8, delay: 0.5 }}
    //     className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'
    //   >
    //     Web developer based in Sri Lanka
    //   </motion.h1>

    //   <motion.p
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 0.6, delay: 0.7 }}
    //     className='max-w-2xl mx-auto font-ovo'
    //   >I am a web developer from Sri Lanka, with 1 year of experience in muliple comapnies.
    //   </motion.p>

    //   <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
    //     <motion.a
    //       initial={{ y: 30, opacity: 0 }}
    //       whileInView={{ y: 0, opacity: 1 }}
    //       transition={{ duration: 0.6, delay: 1 }}
    //       className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent' href="#conatct"
    //     >
    //       Conatct me <Image src={assets.right_arrow_white} alt='' className='w-4' />
    //     </motion.a>

    //     <motion.a
    //       initial={{ y: 30, opacity: 0 }}
    //       whileInView={{ y: 0, opacity: 1 }}
    //       transition={{ duration: 0.6, delay: 1.2 }}
    //       href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
    //     >
    //       my resume <Image src={assets.download_icon} alt='' className='w-4' />
    //     </motion.a >
    //   </div>
    // </div>


    <div className='relative w-full h-screen flex items-center justify-center'>

      {/* --- MOBILE SOCIAL ICONS (top center) --- */}
      <div className='flex md:hidden justify-center gap-5 absolute bottom-10 w-full'>
        <a href={Bio.facebook} target='_blank'><FaFacebookF className="text-gray-900 text-2xl hover:scale-110 transition dark:text-gray-400" /></a>
        <a href={Bio.insta} target='_blank'><FaInstagram className="text-gray-900 text-2xl hover:scale-110 transition dark:text-gray-400" /></a>
        <a href={Bio.linkedin} target='_blank'><FaLinkedinIn className="text-gray-900 text-2xl hover:scale-110 transition dark:text-gray-400" /></a>
        <a href={Bio.github} target='_blank'><FaGithub className="text-gray-900 text-2xl hover:scale-110 transition dark:text-gray-400" /></a>
      </div>

      {/* --- DESKTOP RIGHT SIDE SOCIAL ICONS --- */}
      <div className='hidden md:flex flex-col gap-10 absolute right-10 top-1/2 -translate-y-1/2'>
        <a href={Bio.facebook} target='_blank'>
          <div className="relative group">
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100  group-hover:-translate-y-3 translate-y-1 group-hover:scale-100  scale-95  bg-white text-gray-800 border border-gray-800 text-xs px-2 py-1 rounded transition-all duration-300 delay-100" >
              Facebook
            </span>
            <FaFacebookF className="text-gray-700  text-2xl hover:scale-110 transition dark:text-gray-400" />
          </div>
        </a>


        <a href={Bio.insta} target='_blank'>
          {/* Instagram */}
          <div className="relative group">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100  group-hover:-translate-y-3 translate-y-1 group-hover:scale-100  scale-95  bg-white text-gray-800 border border-gray-800 text-xs px-2 py-1 rounded transition-all duration-300 delay-100" >
              Instagram
            </span>
            <FaInstagram className="text-gray-700 text-2xl hover:scale-110 transition dark:text-gray-400" />
          </div>
        </a>

        <a href={Bio.linkedin} target='_blank'>
          {/* LinkedIn */}
          <div className="relative group">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100  group-hover:-translate-y-3 translate-y-1 group-hover:scale-100  scale-95  bg-white text-gray-800 border border-gray-800 text-xs px-2 py-1 rounded transition-all duration-300 delay-100" >
              LinkedIn
            </span>
            <FaLinkedinIn className="text-gray-700 text-2xl hover:scale-110 transition dark:text-gray-400" />
          </div>
        </a>

        <a href={Bio.github} target='_blank'>
          {/* GitHub */}
          <div className="relative group">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100  group-hover:-translate-y-3 translate-y-1 group-hover:scale-100  scale-95  bg-white text-gray-800 border border-gray-800 text-xs px-2 py-1 rounded transition-all duration-300 delay-100" >
              GitHub
            </span>
            <FaGithub className="text-gray-700 text-2xl hover:scale-110 transition dark:text-gray-400" />
          </div>
        </a>
      </div>

      {/* --- MAIN CENTER CONTENT --- */}
      <div className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-2 pt-4'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.myprofile} alt='' className='rounded-full w-32 ' />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex items-end gap-2 text-2xl md:text-3xl mb-3  font-ovo'
        >
          Nirosh Edirisinghe
          {/* <Image src={assets.hand_icon} alt='' className='w-6' /> */}
          <FaCheckCircle className="text-blue-500 w-5 h-5 mb-1" />
        </motion.h3>

        {/* <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-3xl sm:text-6xl lg:text-[66px] font-outfit'
        >
          Web developer based in Sri Lanka
        </motion.h1> */}

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[50px] text-gray-800 font-semibold font-outfit dark:text-gray-300"
        >
          I am a{' '}
          <span className="text-primary">
            <Typewriter
              words={Bio.roles}
              loop={true}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='max-w-2xl mx-auto font-ovo text-gray-800 dark:text-gray-200'
        >
          Creative Web Developer with a passion for crafting responsive, high-performing web apps using modern web tech.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='px-8 py-2 border border-white rounded-full bg-gray-900 text-white flex items-center gap-2 dark:bg-transparent'
            href="#contact"
          >
            Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Myportfolio/Nirosh_Edirisinghe_Resume.pdf"
            download
            className='px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
          >
            My Resume <Image src={assets.download_icon} alt='' className='w-4' />
          </motion.a>
          {/* <a
            href="/Myportfolio/Nirosh_Edirisinghe_Resume.pdf"
            download="Nirosh_Edirisinghe_Resume.pdf"
          >
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
            >
              My Resume <Image src={assets.download_icon} alt="" className="w-4" />
            </motion.span>
          </a> */}

        </div>
      </div>
    </div>




  )
}

export default Header
