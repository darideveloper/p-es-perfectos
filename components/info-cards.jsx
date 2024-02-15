import H2 from "@/components/h2"
import BtnCta from "@/components/btn-cta"
import { servicesData } from "@/lib/services"
import { useEffect, useState } from "react"

/**
 * Info cards section
 * @return {JSX.Element}
 */
export default function InfoCards() {

  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    // Copy serviuces data
    const cardsDataSort = servicesData.map (card => {

      const copiedCard = {...card}

      if (copiedCard.description.length > 80) {
        copiedCard.description = copiedCard.description.slice(0, 80) + '...'
      }
      return copiedCard
    })
    setCardsData(cardsDataSort)
  }, [])
 

  return (
    <section
      className={`
        container
        mx-auto
        w-10/12
        my-20
      `}
      id="info-cards"
    >
      <H2
        text="Servicios"
        isHidden={true}
      />

      <div
        className={`
          content
          grid
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
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
                flex
                flex-col
                items-start
                justify-between
              `}
              data-aos="fade-up"
              data-aos-delay={200*index}
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