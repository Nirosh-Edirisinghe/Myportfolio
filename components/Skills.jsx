// Skills.jsx
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaPython, FaGithub, FaFigma } from "react-icons/fa";
import { SiJavascript, SiMaterialui, SiTailwindcss, SiMysql, } from "react-icons/si";
import reacticon from '../assets/reactjsicon.png'
import javascripticon from '../assets/javascripticon.png'
import tailwindticon from '../assets/tailwindicon.png'
import muiicon from '../assets/materialui.png'
import nexticon from '../assets/nextjsicon.png'

import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center mb-2 text-lg font-ovo'
      >
        My Skills
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl text-gray-800 font-ovo dark:text-gray-200'
      >
        Technical Arsenal
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-10">
        {/* Frontend Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="shadow-md rounded-2xl border-[2px] border-gray-200 p-8 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/20 dark:hover:shadow-white dark:hover:bg-darkHover/10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 dark:text-gray-400">Frontend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 dark:text-white/80">
            <SkillCard icon={<FaReact className="text-sky-500" />} name="React Js" />
            <SkillCard
              icon={<Image src={nexticon} alt="HTML" className="w-8 h-8" />}
              name="Next Js"
            />
            <SkillCard
              icon={<Image src={javascripticon} alt="HTML" className="w-8 h-8" />}
              name="Javascript"
            />
            <SkillCard icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
            <SkillCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />

            <SkillCard
              icon={<Image src={tailwindticon} alt="HTML" className="w-8 h-8" />}
              name="TailwindCss"
            />
            <SkillCard icon={<FaBootstrap className="text-purple-600" />} name="Bootstrap" />
            <SkillCard
              icon={<Image src={muiicon} alt="HTML" className="w-8 h-8" />}
              name="MUI"
            />
            <SkillCard icon={<FaFigma className="text-pink-500" />} name="Figma" />


          </div>
        </motion.div >

        {/* Others Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="shadow-md rounded-2xl border-[2px] border-gray-200 p-8 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/20 dark:hover:shadow-white dark:hover:bg-darkHover/10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 dark:text-gray-400">Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 dark:text-white/80">
            <SkillCard
              icon={<FaPython className="text-yellow-500 text-4xl" />}
              name="Python"
            />
            <SkillCard
              icon={<Image src={assets.nodeicon} alt="HTML" className="w-8 h-8" />}
              name="Node Js"
            />
            <SkillCard
              icon={<Image src={assets.laravelticon} alt="HTML" className="w-8 h-8" />}
              name="Laravel"
            />
            <SkillCard
              icon={<Image src={assets.expressicon} alt="HTML" className="w-8 h-8" />}
              name="Express Js"
            />
            <SkillCard
              icon={<Image src={assets.mysqlticon} alt="HTML" className="w-8 h-8" />}
              name="MySQL"
            />
            <SkillCard
              icon={<Image src={assets.mongodb} alt="HTML" className="w-8 h-8" />}
              name="MongoDB"
            />
            <SkillCard
              icon={<Image src={assets.posgreeicon} alt="HTML" className="w-8 h-8" />}
              name="PostgreSQL"
            />


          </div>
        </motion.div >
      </motion.div>
    </motion.section >
  );
}

function SkillCard({ icon, name }) {
  return (
    <div className="flex items-center gap-2 border-[0.5px] border-gray-300 rounded-xl p-3 hover:shadow-xl transition duration-200  bg-gray-100 dark:bg-transparent dark:border-white/20">
      <span className="text-2xl">{icon}</span>
      <p className="font-medium">{name}</p>
    </div>
  );
}
