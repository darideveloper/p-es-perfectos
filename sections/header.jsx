import Image from 'next/image'
import BtnMenu from '@/components/btn-menu.jsx'
import { useState } from 'react'

export default function Header () {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
  <header
    className={`
      container
      mx-auto
      flex
      items-center
      justify-between
      px-4
    `}
  >
    <nav 
      className={`
        menu
        fixed
        top-0
        ${isMenuOpen ? "left-0" : "-left-64"}
        w-64
        h-screen
        bg-blue
        duration-500
      `}>  
    </nav>

    <Image 
      className={`
        logo
      `}
      src={`/logo.webp`} 
      width={200} 
      height={200} 
      alt={`logo de Pies Perfectos`}  
    />
    
    <BtnMenu
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
    

    <div
      className={`
        contacts
        debug
        hidden
      `}
    >

    </div>
  </header>
 ) 
}