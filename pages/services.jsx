import RootLayout from "@/layouts/root-layout"
import Contact from "@/sections/contact"
import H1 from "@/components/h1"
import ImageFullWidth from "@/components/image-full-width"
import TextImageCards from "@/components/text-image-cards"
import { servicesData } from "@/lib/services"

/**
 * Home page component
 * @param {array} slides images to render in the hero section
 * @return {JSX.Element}
 */
export default function Home() {

  return (
    <RootLayout subPage="Servicios">
      <H1
        text="Nuestros Servicios"
      />
      <ImageFullWidth
        src={"/services/hero.jpg"}
        alt="Imagen principal de la página de acerca de servicios"
      />
      <TextImageCards 
        articles={servicesData}
      />
      <Contact />
    </RootLayout>
  )
}