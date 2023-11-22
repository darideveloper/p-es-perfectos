import Image from 'next/image'
import Link from 'next/link'
import H2 from '@/components/h2'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green'

import { useEffect, useState } from 'react'

/**
 * Hero section component
 * @param {array} slides images to render
 * @return {jsx}
*/
export default function Hero({ slides }) {

  const [slidesPerView, setSlidesPerView] = useState(1)
  const [useArrows, setUseArrows] = useState(false)

  /**
   * Change number of slides and arrows per view in swipper depending on screen width
   */
  function updateSlidesPerView() {
    if (window.innerWidth < 508) {
      setSlidesPerView(1)
      setUseArrows(true)
    } else if (window.innerWidth < 800)  {
      setSlidesPerView(2)
      setUseArrows(false)
    } else {
      setSlidesPerView(3)
      setUseArrows(false)
    }
  }

  /**
   * Short long links to a max of 20 characters
   */
  function shortLinks() {
    const links = document.querySelectorAll('.slider-details a')
    links.forEach(link => {
      if (link.innerText.length > 20) {
        link.innerText = link.innerText.slice(0, 20) + '...'
      }
    })
  }

  useEffect(() => {

    // Short links when load
    shortLinks()

    // Set slides per view when loads and on resize
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
  }, [])

  return (
    <section
      className={`
        hero
        w-full
        my-20
      `}
      id='hero'
      data-aos="fade-up"
      data-aos-delay="500"
    >

      <H2 
        text="Galería principal"
        isHidden={true}
      />

      <Splide
        className={``}
        options={{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
          arrows: useArrows,
          perPage: slidesPerView,
          perMove: 1,
          pagination: !useArrows,
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <Link href="#cita">
              <Image
                src={slide}
                alt={`Slide ${index}`}
                width={500}
                height={500}
                className={`
                duration-300
                {/*Blur effect only in desktop*/}
                ${!useArrows && "blur-sm hover:blur-none"}
              `}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}