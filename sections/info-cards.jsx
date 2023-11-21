import BtnCta from "@/components/btn-cta"

/**
 * Info cards section
 * @return {jsx}
 */
export default function InfoCards() {
  const cardsData = [
    {
      "title": "Servicio 1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "link": {
        "href": "#",
        "label": "Contactar"
      }
    },
    {
      "title": "Servicio 2",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "link": {
        "href": "#",
        "label": "Contactar"
      }
    },
    {
      "title": "Servicio 3",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "link": {
        "href": "#",
        "label": "Contactar"
      }
    },
    {
      "title": "Servicio 4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "link": {
        "href": "#",
        "label": "Contactar"
      }
    },
  ]

  return (
    <section
      className={`
        container
        mx-auto
        w-10/12
        my-6
      `}
      id="info-cards"
    >
      <h2 className='title-hidden'>Servicios</h2>

      <div
        className={`
          content
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          w-full
        `}>

        {
          cardsData.map((cardData, index) => (
            <article
              key={index}
              className={`
                info-card
                width-full
                bg-blue
                px-5
                py-10
                text-white
              `}
            >
              <h3
                className={`
                  text-3xl
                  mb-2
                `}
              >
                {cardData.title}
              </h3>
              <p
                className={`
                  opacity-60
                `}
              >
                {cardData.description}
              </p>
              <BtnCta
                href={cardData.link.href}
                label={cardData.link.label}
                className={`
                  text-lg
                  hover:-translate-y-2
                  mt-6
                `}
                isPhantom={true}
              />

            </article>
          ))
        }
      </div>
    </section>
  )
}