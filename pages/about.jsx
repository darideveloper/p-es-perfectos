import RootLayout from "@/layouts/root-layout"
import Contact from "@/sections/contact"
import H1 from "@/components/h1"
import ImageFullWidth from "@/components/image-full-width"
import TextImageCards from "@/components/text-image-cards"

/**
 * Home page component
 * @param {array} slides images to render in the hero section
 * @return {JSX.Element}
 */
export default function Home() {

  const articles = [
    {
      "title": "Título 1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem rerum obcaecati non quos tenetur temporibus, veniam numquam mollitia consequatur laboriosam, dicta atque, pariatur repellat necessitatibus! Neque ipsam sunt eius!",
      "image": "/about/1.jpg",
      "id": "about-1"
    },
    {
      "title": "Título 2",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem rerum obcaecati non quos tenetur temporibus, veniam numquam mollitia consequatur laboriosam, dicta atque, pariatur repellat necessitatibus! Neque ipsam sunt eius!",
      "image": "/about/2.jpg",
      "id": "about-2"
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