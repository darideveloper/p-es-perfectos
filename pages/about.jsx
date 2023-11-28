import RootLayout from "@/layouts/root-layout"
import Contact from "@/sections/contact"
import H1 from "@/components/h1"
import H2 from "@/components/h2"
import ImageFullWidth from "@/components/image-full-width"
import Image from "next/image"

/**
 * Home page component
 * @param {array} slides images to render in the hero section
 * @return {JSX.Element}
 */
export default function Home() {

  const sections = [
    {
      "title": "Título 1",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem rerum obcaecati non quos tenetur temporibus, veniam numquam mollitia consequatur laboriosam, dicta atque, pariatur repellat necessitatibus! Neque ipsam sunt eius!",
      "image": "/about/1.jpg"
    },
    {
      "title": "Título 2",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem rerum obcaecati non quos tenetur temporibus, veniam numquam mollitia consequatur laboriosam, dicta atque, pariatur repellat necessitatibus! Neque ipsam sunt eius!",
      "image": "/about/2.jpg"
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

      {sections.map(section => (
        <>
          <section
            className={`
              about-wrapper
              container
              mx-auto
              flex
              flex-col md:flex-row
              md:even:flex-row-reverse
              items-center
              justify-center
              gap-8
              text-center
              px-4
              max-w-5xl
              my-16
            `}
          >
            <div 
              className="text"
              data-aos="fade-up"
            >
              <H2
                text={section.title}
              />
              <p>
                {section.text}
              </p>
            </div>

            <Image
              src={section.image}
              alt="Imagen de la página de acerca de nosotros"
              width={500}
              height={500}
            />
          </section>
        </>
      ))}

      <Contact />
    </RootLayout>
  )
}