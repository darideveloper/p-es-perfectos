import { useState } from 'react'

import Image from 'next/image'
import BtnMenu from '@/components/btn-menu.jsx'
import Link from 'next/link'
import BtnCta from '@/components/btn-cta'

import { titleFont } from '@/lib/fonts.js'

/**
 * Header with logo, menu, social and icons
 * @returns {jsx}
 */
export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: "#", label: "Nuestro equipo" },
    { href: "#", label: "Contacto" },
    { href: "#", label: "Acerca de" },
    { href: "#", label: "Servicios" },
  ]


  const socials = [
    { 
      href: "https://www.facebook.com/" ,
      path: '<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>',
      label: "Facebook"
    },
    { 
      href: "https://www.youtube.com/", 
      path: '<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>',
      label: "TikTok"
    },
    { 
      href: "https://www.tiktok.com/",
      path: '<path d="m12.4 1.7c0 0 0 1 0 7.2v7.3c-0.1 0.3-0.2 0.5-0.2 0.6 0 0-0.1 0.2-0.1 0.3-0.1 0.1-0.2 0.3-0.2 0.3-0.1 0.1-0.2 0.3-0.2 0.4-0.1 0.1-0.3 0.2-0.4 0.3-0.1 0-0.2 0.2-0.3 0.2-0.1 0.1-0.2 0.2-0.3 0.2-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.1-0.2 0.1-0.3 0.1-0.1 0.1-0.3 0.1-0.5 0.1-0.3 0-0.4 0-0.6 0-0.1-0.1-0.3-0.1-0.4-0.1-0.1-0.1-0.3-0.2-0.4-0.2-0.1-0.1-0.3-0.2-0.4-0.2-0.1-0.1-0.3-0.2-0.4-0.3-0.1-0.1-0.2-0.3-0.3-0.4-0.1-0.1-0.2-0.3-0.3-0.4 0-0.1-0.1-0.3-0.1-0.4-0.1 0-0.1-0.2-0.1-0.3 0-0.1-0.1-0.3-0.1-0.4 0-0.1 0-0.4 0-0.5 0-0.1 0-0.3 0.1-0.4 0-0.2 0-0.3 0.1-0.4 0-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.1 0.3-0.2 0.4-0.3 0.1-0.1 0.3-0.2 0.4-0.2 0 0 0.2-0.1 0.3-0.1 0.1-0.1 0.3-0.1 0.4-0.2q0.2 0 0.6 0 0.4 0 0.6 0.1c0.1 0 0.2 0 0.2 0h0.1v-3.6c-0.1 0-0.4 0-0.8 0q-0.7 0-0.9 0c-0.1 0-0.3 0-0.4 0.1 0 0-0.2 0-0.3 0-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.1-0.3 0.2-0.5 0.2-0.2 0.1-0.4 0.2-0.6 0.3-0.2 0.1-0.4 0.2-0.6 0.3-0.1 0.1-0.3 0.3-0.4 0.4-0.1 0.1-0.3 0.2-0.4 0.3-0.1 0.1-0.3 0.3-0.5 0.4-0.1 0.2-0.2 0.4-0.3 0.5 0 0-0.1 0.2-0.2 0.2-0.1 0.1-0.1 0.3-0.2 0.3 0 0.1-0.1 0.3-0.2 0.4-0.1 0.2-0.1 0.3-0.2 0.4 0 0 0 0.1-0.1 0.2 0 0.1 0 0.2-0.1 0.3 0 0.1 0 0.3-0.1 0.4 0 0 0 0.2-0.1 0.3 0 0.1 0 0.3 0 0.3 0 0.1-0.1 0.3-0.1 0.5 0 0.2 0 0.4 0 0.6 0 0.1 0 0.4 0 0.5 0 0.2 0 0.4 0.1 0.5 0 0.1 0 0.2 0 0.3 0 0.1 0.1 0.3 0.1 0.4 0 0.1 0.1 0.3 0.1 0.4 0.1 0.2 0.2 0.4 0.2 0.5 0.1 0.2 0.2 0.4 0.3 0.5 0 0.1 0.2 0.4 0.3 0.5 0.1 0.1 0.2 0.3 0.2 0.3 0 0.1 0.1 0.1 0.1 0.2 0 0 0.2 0.2 0.3 0.3 0.1 0.1 0.2 0.3 0.3 0.4 0.1 0.1 0.3 0.2 0.4 0.3 0.1 0.1 0.4 0.3 0.5 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.5 0.2 0.6 0.3 0.1 0 0.4 0.1 0.5 0.2 0.2 0 0.4 0.1 0.6 0.1 0.1 0 0.4 0.1 0.5 0.1q0.2 0 0.8 0c0.5 0 0.8 0 1 0 0.1 0 0.3-0.1 0.5-0.1 0.1 0 0.4-0.1 0.5-0.2 0.2 0 0.4-0.1 0.5-0.1 0.1-0.1 0.3-0.2 0.4-0.2 0.2-0.1 0.4-0.2 0.6-0.3 0.1-0.1 0.3-0.2 0.4-0.3 0.2-0.1 0.4-0.3 0.5-0.4 0.1-0.1 0.3-0.3 0.4-0.4 0.1-0.1 0.3-0.3 0.4-0.4 0.1-0.2 0.2-0.4 0.3-0.4 0-0.1 0.1-0.3 0.2-0.4 0-0.1 0.1-0.3 0.2-0.4 0.1-0.1 0.2-0.3 0.2-0.5 0.1-0.1 0.2-0.3 0.2-0.4 0-0.1 0.1-0.3 0.1-0.5 0.1-0.1 0.1-0.4 0.1-0.5 0-0.2 0.1-0.5 0.1-0.7 0-0.2 0-2 0-4q0-3.5 0-3.5 0.1 0 0.2 0.1c0 0 0.2 0.1 0.3 0.2 0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.3 0.2 0.4 0.2 0.1 0 0.2 0.1 0.3 0.1 0.1 0.1 0.3 0.1 0.4 0.2 0.2 0 0.4 0.1 0.5 0.1 0.2 0.1 0.4 0.1 0.5 0.2 0.2 0 0.4 0 0.6 0 0.1 0.1 0.4 0.1 0.6 0.1 0.3 0 0.5 0 0.5 0 0 0 0-0.1 0-1.7v-1.8q-0.3 0-0.5 0c-0.1 0-0.3-0.1-0.3-0.1-0.1 0-0.3 0-0.4 0-0.1-0.1-0.2-0.1-0.4-0.2-0.1 0-0.4-0.1-0.5-0.2-0.2-0.1-0.5-0.2-0.6-0.3-0.1-0.1-0.3-0.2-0.4-0.3-0.1-0.1-0.3-0.2-0.4-0.3 0-0.1-0.2-0.3-0.3-0.4-0.1-0.1-0.2-0.3-0.3-0.4-0.1-0.2-0.3-0.4-0.3-0.6-0.1-0.1-0.2-0.3-0.3-0.5 0-0.1-0.1-0.3-0.1-0.4 0-0.1-0.1-0.3-0.1-0.5 0-0.1 0-0.3 0-0.5 0-0.2 0-0.2-0.1-0.2 0-0.1-0.7-0.1-1.7-0.1-1 0-1.8 0-1.8 0.1z"/>',
      label: "Tiktok"
    },

  ]

  return (
    <header
      className={`
      container
      mx-auto
      flex
      items-center md:items-start
      justify-between
      px-4
      md:pt-4
      flex-row md:flex-col
      relative
    `}
    id='header'
    >

      <Image
        className={`
        logo
      `}
        src={`/logo.webp`}
        width={200}
        height={200}
        alt={`logo de Pies Perfectos`}
      />

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
        `}>

        <nav
          className={`
          menu
          w-full lg:w-auto 
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
                    px-8
                    inline-block
                    hover:opacity-50 md:hover:opacity-100 
                    duration-300
                    text-white md:text-blue
                    ${titleFont.className}
                    border-b-2 
                    border-transparent md:hover:border-blue
                  `}
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
            items-center
            justify-center
            w-full lg:w-auto
            pb-10 md:pb-0
            md:mt-4 lg:mt-0
            lg:mr-4
          `}>
          {
            socials.map ((social, key) => (
              <a 
                href={social.href} 
                target='_blank'
                key={key}
                className={`
                  social
                  p-3
                  duration-200
                  hover:opacity-50
                `}
              >
                <svg 
                  viewBox="0 0 24 24"
                  className={`
                    fill-white md:fill-blue
                    ${social.classNameSvg}
                    w-5
                  `}
                  dangerouslySetInnerHTML={{ __html: social.path }}
                />  
              
              </a>
            ))
          }

        </div>
      </div>

      <BtnCta 
        herf="#cita"
        label="Agendar cita"
        className={`
          hidden md:block
          absolute
          top-5
          right-5
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