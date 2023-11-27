import H2 from "../components/h2"
import Image from "next/image"

/**
 * Team section component
 * @returns {JSX.Element}
 */
export default function Team() {

  const teamMembers = [
    {
      name: "dari developer 1",
      speciality: "podólogo",
    },
    {
      name: "dari developer 2",
      speciality: "anestesista",
    },
    {
      name: "dari developer 3",
      speciality: "enfermero",
    },
  ]

  return (
    <section
      className={`
        team
        container
        mx-auto
        my-32
      `}
      id="team"
    >
      <H2
        text="Nuestro Equipo"
        className={`
          mt-0
        `}
      />
      <p
        className={`
          text-center
          text-gray-500
          mt-4
          w-10/12
          mx-auto
        `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </p>
      <div
        className={`
          members
          mt-10
          flex
          flex-wrap
          justify-center
          items-center
          gap-8
        `}
      >
        {
          teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                member
                flex
                flex-col
                items-center
                justify-center
                p-4
                bg-gray-100
                w-64
                py-5
                rounded-xl
                group
                duration-500
                hover:scale-105
                shadow-lg
              `}
              data-aos="fade-down"
              data-aos-delay={200*(teamMembers.length-index)}
            >
              <Image
                src={`/team/${member.name.replaceAll(" ", "-")}.webp`}
                alt={member.name}
                className={`
                  w-10/12
                  rounded-full
                  mb-4
                  duration-500
                  group-hover:-rotate-6
                `}
                width={200}
                height={200}
              />
              <h3
                className={`
                  text-xl
                  capitalize
                `}
              >
                {member.name}
              </h3>
              <p
                className={`
                  text-grey group-hover:text-blue
                  text-md
                  capitalize
                  duration-500
                  text-md group-hover:text-xl
                  inline-block           
                  h-8       
                `}
              >
                {member.speciality}
              </p>
            </div>
          ))
        }
      </div>

    </section>
  )

}