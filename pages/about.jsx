import RootLayout from "@/layouts/root-layout"
import Contact from "@/components/contact"
import H1 from "@/components/h1"
import ImageFullWidth from "@/components/image-full-width"
import TextImageCards from "@/components/text-image-cards"
import { metaData } from "@/lib/meta"

/**
 * Home page component
 * @param {array} slides images to render in the hero section
 * @return {JSX.Element}
 */
export default function Home() {

  const articles = [
    {
      "title": "Pies Perfectos",
      "description": metaData.description,
      "image": "/about/1.webp",
      "id": "about-1"
    },
  ]

  return (
    <RootLayout subPage="Acerca de">
      <H1
        text="Acerca de Nosotros"
      />
      <ImageFullWidth
        src={"/about/hero.jpg"}
        alt="Imagen principal de la página de acerca de nosotros"
      />
      <TextImageCards 
        articles={articles}
      />
      <Contact />
    </RootLayout>
  )
}