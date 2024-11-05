import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-10 bg-background'>
      <div className='max-w-3xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2 p-4'>
        <div className='font-title text-4xl'>MP</div>
        <div className='flex flex-wrap items-center gap-4 lg:gap-8'>
          <Link href='#about'>
            About
          </Link>
          <Link href='#skills'>
            Skills
          </Link>
          <Link href='#projects'>
            Projects
          </Link>
          <Link href='#workflow'>
            Workflow
          </Link>
          <Link href='#contacts'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar