'use client'
import React from 'react'
import { useTheme } from "@/context/ThemeContext";
import Image from 'next/image';
import { assets } from '@/assets/assets';

const MyProject = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  return (
    <>
    </>
  )
}

export default MyProject
