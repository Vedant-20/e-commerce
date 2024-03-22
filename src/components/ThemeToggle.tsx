"use client"

import * as React from "react"

import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes"



export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <div className="flex justify-end items-center  ">
        <div className="flex justify-center items-center p-2 border-2 dark:border-white border-black">
        <FiSun className="m-4" onClick={()=>setTheme('light')}  />
          <BsMoonStars className="m-4" onClick={() => setTheme("dark")} />
        </div>
      
      </div>
          
          
        
    </>
  )
}
