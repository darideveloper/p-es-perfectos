import { useEffect, useState } from 'react'

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

  useEffect(() => {
    // Add aos to header in desktop
    if (window.innerWidth > 768) {
      const header = document.querySelector('#header')
      header.setAttribute('data-aos', 'fade-down')
    }
  }, [])

  const links = [
    { href: "#", label: "Nuestro equipo" },
    { href: "#", label: "Contacto" },
    { href: "#", label: "Acerca de" },
    { href: "#", label: "Servicios" },
  ]


  const socials = [
    {
      href: "https://www.facebook.com/podologiapiesperfectos?mibextid=LQQJ4d",
      path: '<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>',
      label: "Facebook"
    },
    {
      href: "https://www.youtube.com/@PodologiaPiesPerfectos",
      path: '<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>',
      label: "Youtube"
    },
    {
      href: "https://www.tiktok.com/@piesperfectosmx?_r=1&_d=ea7e2j14m25f0g&sec_uid=MS4wLjABAAAA7qYxZaYgt5m8KjC9-wyViuBsyobJ4-H1i78Spm4P8jPesTFsbgZCgX-zbSufcuej&share_author_id=6903743280237822977&sharer_language=es&source=h5_m&u_code=dg0f89l6b9fdjc&ug_btm=b0,b0&sec_user_id=MS4wLjABAAAA7qYxZaYgt5m8KjC9-wyViuBsyobJ4-H1i78Spm4P8jPesTFsbgZCgX-zbSufcuej&utm_source=copy&social_share_type=4&utm_campaign=client_share&utm_medium=ios&tt_from=copy&user_id=6903743280237822977&share_link_id=292EB47C-D57C-4691-A357-F81554C63EDF&share_app_id=1233",
      path: '<path d="m12.4 1.7c0 0 0 1 0 7.2v7.3c-0.1 0.3-0.2 0.5-0.2 0.6 0 0-0.1 0.2-0.1 0.3-0.1 0.1-0.2 0.3-0.2 0.3-0.1 0.1-0.2 0.3-0.2 0.4-0.1 0.1-0.3 0.2-0.4 0.3-0.1 0-0.2 0.2-0.3 0.2-0.1 0.1-0.2 0.2-0.3 0.2-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.1-0.2 0.1-0.3 0.1-0.1 0.1-0.3 0.1-0.5 0.1-0.3 0-0.4 0-0.6 0-0.1-0.1-0.3-0.1-0.4-0.1-0.1-0.1-0.3-0.2-0.4-0.2-0.1-0.1-0.3-0.2-0.4-0.2-0.1-0.1-0.3-0.2-0.4-0.3-0.1-0.1-0.2-0.3-0.3-0.4-0.1-0.1-0.2-0.3-0.3-0.4 0-0.1-0.1-0.3-0.1-0.4-0.1 0-0.1-0.2-0.1-0.3 0-0.1-0.1-0.3-0.1-0.4 0-0.1 0-0.4 0-0.5 0-0.1 0-0.3 0.1-0.4 0-0.2 0-0.3 0.1-0.4 0-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.1 0.3-0.2 0.4-0.3 0.1-0.1 0.3-0.2 0.4-0.2 0 0 0.2-0.1 0.3-0.1 0.1-0.1 0.3-0.1 0.4-0.2q0.2 0 0.6 0 0.4 0 0.6 0.1c0.1 0 0.2 0 0.2 0h0.1v-3.6c-0.1 0-0.4 0-0.8 0q-0.7 0-0.9 0c-0.1 0-0.3 0-0.4 0.1 0 0-0.2 0-0.3 0-0.1 0.1-0.3 0.1-0.4 0.1-0.1 0.1-0.3 0.2-0.5 0.2-0.2 0.1-0.4 0.2-0.6 0.3-0.2 0.1-0.4 0.2-0.6 0.3-0.1 0.1-0.3 0.3-0.4 0.4-0.1 0.1-0.3 0.2-0.4 0.3-0.1 0.1-0.3 0.3-0.5 0.4-0.1 0.2-0.2 0.4-0.3 0.5 0 0-0.1 0.2-0.2 0.2-0.1 0.1-0.1 0.3-0.2 0.3 0 0.1-0.1 0.3-0.2 0.4-0.1 0.2-0.1 0.3-0.2 0.4 0 0 0 0.1-0.1 0.2 0 0.1 0 0.2-0.1 0.3 0 0.1 0 0.3-0.1 0.4 0 0 0 0.2-0.1 0.3 0 0.1 0 0.3 0 0.3 0 0.1-0.1 0.3-0.1 0.5 0 0.2 0 0.4 0 0.6 0 0.1 0 0.4 0 0.5 0 0.2 0 0.4 0.1 0.5 0 0.1 0 0.2 0 0.3 0 0.1 0.1 0.3 0.1 0.4 0 0.1 0.1 0.3 0.1 0.4 0.1 0.2 0.2 0.4 0.2 0.5 0.1 0.2 0.2 0.4 0.3 0.5 0 0.1 0.2 0.4 0.3 0.5 0.1 0.1 0.2 0.3 0.2 0.3 0 0.1 0.1 0.1 0.1 0.2 0 0 0.2 0.2 0.3 0.3 0.1 0.1 0.2 0.3 0.3 0.4 0.1 0.1 0.3 0.2 0.4 0.3 0.1 0.1 0.4 0.3 0.5 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.5 0.2 0.6 0.3 0.1 0 0.4 0.1 0.5 0.2 0.2 0 0.4 0.1 0.6 0.1 0.1 0 0.4 0.1 0.5 0.1q0.2 0 0.8 0c0.5 0 0.8 0 1 0 0.1 0 0.3-0.1 0.5-0.1 0.1 0 0.4-0.1 0.5-0.2 0.2 0 0.4-0.1 0.5-0.1 0.1-0.1 0.3-0.2 0.4-0.2 0.2-0.1 0.4-0.2 0.6-0.3 0.1-0.1 0.3-0.2 0.4-0.3 0.2-0.1 0.4-0.3 0.5-0.4 0.1-0.1 0.3-0.3 0.4-0.4 0.1-0.1 0.3-0.3 0.4-0.4 0.1-0.2 0.2-0.4 0.3-0.4 0-0.1 0.1-0.3 0.2-0.4 0-0.1 0.1-0.3 0.2-0.4 0.1-0.1 0.2-0.3 0.2-0.5 0.1-0.1 0.2-0.3 0.2-0.4 0-0.1 0.1-0.3 0.1-0.5 0.1-0.1 0.1-0.4 0.1-0.5 0-0.2 0.1-0.5 0.1-0.7 0-0.2 0-2 0-4q0-3.5 0-3.5 0.1 0 0.2 0.1c0 0 0.2 0.1 0.3 0.2 0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.3 0.2 0.4 0.2 0.1 0 0.2 0.1 0.3 0.1 0.1 0.1 0.3 0.1 0.4 0.2 0.2 0 0.4 0.1 0.5 0.1 0.2 0.1 0.4 0.1 0.5 0.2 0.2 0 0.4 0 0.6 0 0.1 0.1 0.4 0.1 0.6 0.1 0.3 0 0.5 0 0.5 0 0 0 0-0.1 0-1.7v-1.8q-0.3 0-0.5 0c-0.1 0-0.3-0.1-0.3-0.1-0.1 0-0.3 0-0.4 0-0.1-0.1-0.2-0.1-0.4-0.2-0.1 0-0.4-0.1-0.5-0.2-0.2-0.1-0.5-0.2-0.6-0.3-0.1-0.1-0.3-0.2-0.4-0.3-0.1-0.1-0.3-0.2-0.4-0.3 0-0.1-0.2-0.3-0.3-0.4-0.1-0.1-0.2-0.3-0.3-0.4-0.1-0.2-0.3-0.4-0.3-0.6-0.1-0.1-0.2-0.3-0.3-0.5 0-0.1-0.1-0.3-0.1-0.4 0-0.1-0.1-0.3-0.1-0.5 0-0.1 0-0.3 0-0.5 0-0.2 0-0.2-0.1-0.2 0-0.1-0.7-0.1-1.7-0.1-1 0-1.8 0-1.8 0.1z"/>',
      label: "Tiktok"
    },
    {
      href: "",
      path: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
      label: "Instagram"
    }

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
            flex-row 
            items-center
            justify-center
            w-full
            pb-10
            md:hidden
          `}>
          {
            socials.map((social, key) => (
              <a
                href={social.href}
                target='_blank'
                key={key}
                className={`
                  social
                  p-3 lg:p-1
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
        href="#cita"
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