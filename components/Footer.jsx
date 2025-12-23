import { assets, Bio } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaCheckCircle } from "react-icons/fa";

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-10'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />nirosh.p.edirisinghe@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-gray-700 dark:text-gray-200'>
        <p>© 2025 Nirosh Edirisinghe. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href={Bio.facebook}><FaFacebookF className="text-gray-700 text-2xl  dark:text-gray-400" /></a></li>
          <li><a target='_blank' href={Bio.insta}><FaInstagram className="text-gray-700 text-2xl  dark:text-gray-400" /></a></li>
          <li><a target='_blank' href={Bio.linkedin}><FaLinkedinIn className="text-gray-700 text-2xl  dark:text-gray-400" /></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
