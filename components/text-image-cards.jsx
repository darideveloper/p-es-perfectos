import Image from "next/image"
import H2 from "@/components/h2"

/**
 * Articles with text and image
 * @param {array} articles array of objects with title, text and image
 * @returns {JSX.Element}
 */
export default function TextImageCards({ articles }) {

  return (

    <section 
      className={`
        text-image-cards
        mx-auto
        max-w-5xl
        px-4
        text-center
      `}
    >

      {articles.map(article => (
        <>
          <article
            className={`
            wrapper
            flex
            flex-col md:flex-row
            md:even:flex-row-reverse
            items-center
            justify-center
            gap-8
            my-24
          `}
          >
            <div
              className="text"
              data-aos="fade-up"
            >
              <H2
                text={article.title}
              />
              <p>
                {article.text}
              </p>
            </div>

            <Image
              src={article.image}
              alt="Imagen de la página de acerca de nosotros"
              width={500}
              height={500}
            />
          </article>
        </>
      ))}
    </section>
  )
}