import fs from 'fs/promises'
import path from 'path'

import RootLayout from "@/layouts/root-layout"
import Hero from "@/components/hero"
import InfoCards from "@/components/info-cards"
import Team from "@/components/team"
import Contact from "@/components/contact"

/**
 * Home page component
 * @param {array} slides images to render in the hero section
 * @return {JSX.Element}
 */
export default function Home({slides}) {
  return (
    <RootLayout>
      <h1 className='title-hidden'>Pies Perfectos</h1>
      <Hero 
        slides={slides}  
      />
      <InfoCards />
      <Team />
      <Contact />
    </RootLayout>
  )
}

export async function getStaticProps() {

  // Get images from slides directory
  const slidesDirectory = path.join(process.cwd(), 'public', 'slides')
  const slides = await fs.readdir(slidesDirectory)

  // Add full path to each image
  slides.forEach((slide, index) => {
    slides[index] = `/slides/${slide}`
  })

  return {
    props: {
      slides
    },
  }
}
