"use client";
import React from 'react'

interface SlideProps {
  title: string,
  description: string,
  icon: any,
}
function Slide({ title, description, icon }: SlideProps) {
  return (
    <div className='flex flex-col rounded-2xl border-2 border-accent-blue max-w-[300px] overflow-hidden'>
      <div className='flex flex-col p-10 gap-4 h-full'>
        {icon && <div className='flex justify-center items-center size-20 bg-gradient-to-tr from-accent-blue to-accent-green text-background rounded-full p-4'>
          {React.cloneElement(icon, { className: 'text-background' })}
        </div>}
        <h3 className='font-title text-xl !font-bold text-accent-blue'>{title}</h3>
        <p className='font-text !text-accent-blue'>{description}</p>
      </div>
    </div>
  )
}

export default Slide