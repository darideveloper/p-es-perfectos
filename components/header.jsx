import Image from 'next/image'
import BtnMenu from '@/components/btn-menu.jsx'
import Link from 'next/link'
import BtnCta from '@/components/btn-cta'

import { useEffect, useState } from 'react'
import { titleFont } from '@/lib/fonts.js'
import Socials from './socials'

/**
 * Header with logo, menu, social and icons
 * @param {string} currentPage current page like services, about, etc
 * @returns {JSX.Element}
 */
export default function Header({currentPage}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Add aos to header in desktop
    if (window.innerWidth > 768) {
      const header = document.querySelector('#header')
      header.setAttribute('data-aos', 'fade-down')
    }
  }, [])

  const links = [
    { href: "/#team", label: "Nuestro equipo" },
    { href: "#contact", label: "Contacto" },
    { href: "/about", label: "Acerca de" },
    { href: "/services", label: "Servicios" },
  ]

  return (
    <header
      className={`
        container
        mx-auto
        flex
        items-center md:items-start lg:items-center
        justify-between
        px-4
        md:pt-4
        flex-row md:flex-col lg:flex-row
        relative
      `}
      id='header'
    >

      <Link
        href="/"
        className={`
          w-60 md:w-96
        `}
      >
        <Image
          className={`
            logo
            h-auto
          `}
          src={`/logo.webp`}
          width={200}
          height={61.5}
          alt={`logo de Pies Perfectos`}
          priority={true}
        />
      </Link>

      <div
        className={`
          nav-wrapper
          fixed md:relative
          top-0
          ${isMenuOpen ? "left-0" : "-left-64"} md:left-0
          w-64 md:w-full
          h-screen md:h-auto
          bg-blue md:bg-transparent
          duration-500
          flex
          flex-col lg:flex-row
          items-center
          justify-between
          py-16 md:py-4
          z-20
          shadow-lg md:shadow-none
          shadow-black
        `}>

        <nav
          className={`
          menu
          w-full lg:w-auto lg:mx-auto
          h-full
        `}>
          <ul
            className={`
              flex
              items-center
              justify-center
              flex-col md:flex-row
              gap-4
            `}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className={`
                    text-center
                    text-lg
                  `}
              >
                <Link
                  href={link.href}
                  className={`
                    py-2
                    px-8 lg:p-2 xl:p-4
                    inline-block
                    ${currentPage != link.label && "hover:opacity-50 md:hover:opacity-100"}
                    duration-300
                    text-white md:text-blue
                    ${titleFont.className}
                    border-b-2 
                    border-transparent ${currentPage != link.label && "md:hover:border-blue"}
                    // Disable active links
                    ${currentPage == link.label && "opacity-60 cursor-default"}
                  `}
                  disabled={currentPage == link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`
            socials
            flex
            flex-row 
            items-center
            justify-center
            w-full
            pb-10
            md:hidden
          `}>

          <Socials />

        </div>
      </div>

      <BtnCta
        href="#contact"
        label="Agendar cita"
        className={`
          text-center
          hidden md:block
          absolute lg:static
          top-5
          right-5
          hover:scale-105
          lg:w-80 xl:w-72
        `}
      />

      <BtnMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        className={`
          md:hidden
        `}
      />
    </header>
  )
}