import H2 from "@/components/h2"
import Loading from "@/components/loading"
import Input from "@/components/input"
import BtnSubmit from "@/components/btn-submit"

import { useState } from "react"

/**
 * Contact section
 * @returns {jsx}
 */
export default function Contact() {

  // Get page host
  const host = typeof window !== "undefined" && window.location.host

  // Locations data
  const locations = [
    {
      "name": "Sucursal Coyula",
      "address": "Juárez 20B, Col. Coyula, Tonala, Jalisco",
      "map": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14932.76514948161!2d-103.24677180744843!3d20.661795296773576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b431b63df17d%3A0xf6bf4553808c4432!2sJu%C3%A1rez%2020%2C%20Coyula%2C%2045410%20Coyula%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1701097833328!5m2!1ses-419!2smx',
      "schedule": "Lunes a Viernes de 9:00 a 18:00 hrs",
      "phone": "(331) 144 2486"
    },
    {
      "name": "Sucursal Jardines Vallarta",
      "address": "Maurice Baring 202, Col. Jardines Vallarta, Zapopan, Jalisco",
      "map": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.767016030591!2d-103.42284702619412!3d20.679055599700607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae93b85feca3%3A0x7c5e6b278c39b9ac!2sMaurice%20Baring%20202%2C%20Jardines%20Vallarta%2C%2045027%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1701097866260!5m2!1ses-419!2smx',
      "schedule": "Martes a Domingo de 9:00 a 18:00 hrs",
      "phone": "(333) 009 0886"
    },
    {
      "name": "Sucursal Lomas de Atemajac",
      "address": "Lomas del mar 2100, Col. Lomas de Atemajac, Zapopan, Jalisco",
      "map": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.900829455305!2d-103.36427702619297!3d20.714251298509364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afd4f8b78c93%3A0x3369002e97248876!2sLomas%20del%20Mar%202100%2C%20Lomas%20de%20Atemajac%2C%2045178%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1701097899627!5m2!1ses-419!2smx',
      "schedule": "Lunes a Viernes de 10:00 a 20:00 hrs",
      "phone": "(332) 655 3693"
    }
  ]

  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section className="contact" id="contact">

      <H2
        text="Agenda una cita"
      />

      <form
        action={process.env.NEXT_PUBLIC_CONTACT_FORM_URL}
        method="post"
        className={`
          
        `}
      >
        <div
          className={`
            location
            container
            mx-auto
          `}
          data-aos="fade-up"
        >

          <label
            htmlFor="location"
            className={`
              text-md
              block
              text-center
            `}
          >
            Selecciona una sucursal
          </label>

          <div
            className={`
              select-wrapper
              flex
              flex-col md:flex-row
              items-center
              justify-center
              gap-0 md:gap-4
              my-5
            `}
          >

            <select
              name="sucursal"
              id="location"
              value={selectedLocation.name}
              onChange={(e) => {

                // Show loading
                setIsLoading(true)

                // Change map data
                const location = locations.find(location => location.name === e.target.value)
                setTimeout(() => {
                  setSelectedLocation(location)
                }, 100)

                // Hide loading
                setTimeout(() => {
                  setIsLoading(false)
                }, 2000)

              }}
              className={`
                w-72
                text-xl
                mx-auto md:mx-0
                block
                my-2
                px-5
                py-2
                border-2
                border-blue
                rounded-md
                bg-blue
                text-white
              `}
            >
              {locations.map((location, index) => {
                return (
                  <option key={index} value={location.name}>{location.name}</option>
                )
              })}
            </select>

            <div
              className={`
                texts
                w-11/12 md:w-auto
              `}
            >

              <p
                className={`
                  location-address
                  w-full
                  mx-auto md:mx-2
                  text-center
                  max-w-xs
                `}
              >
                {selectedLocation.address}
              </p>

              <p
                className={`
                  location-schedule
                  w-full
                  mx-auto md:mx-2
                  text-center
                  text-blue
                  text-sm
                `}>
                {selectedLocation.schedule}
              </p>

              <a
                className={`
                  location-schedule
                  w-full
                  mx-auto md:mx-2
                  text-center
                  text-blue
                  text-sm
                  font-bold
                  inline-block
                `}
                href={`tel:+52${selectedLocation.phone.replace("(", "").replace(")", "").replaceAll(" ", "")}`}
              >
                {selectedLocation.phone}
              </a>
            </div>


          </div>

        </div>

        <div
          className={`
            map-wrapper
            w-full
            relative
            h-80
          `}>
          <Loading
            isVisible={isLoading}
            bgColor="bg-blue"
            extraClasses="w-full h-full"
          />
          <iframe
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={selectedLocation.map}
            className={`
              w-full
              h-full
              my-5
            `}
          >
          </iframe>
        </div>

        <div
          className={`
            inputs-wrapper
            w-full
            max-w-3xl
            mx-auto
            mt-12
            flex
            flex-wrap
            items-center
            justify-between
          `}
          id="inputs-wrapper"
          data-aos="fade-down"
        >
          <Input
            name="name"
            placeholder="Juan Pérez"
            type="text"
            label="Nombre"
          />

          <Input
            name="telefono"
            placeholder="55 1234 5678"
            type="tel"
            label="Teléfono"
          />

          <Input
            name="email"
            placeholder="sample@gmail.com"
            type="email"
            label="Correo"
          />

          <Input
            name="fecha"
            type="date"
            label="Fecha"
          />

          <Input
            name="hora"
            type="time"
            label="Hora"
          />


          <BtnSubmit
            label="Agendar"
            className={`
              w-48
              text-center
              mx-auto
              scale-90
              mt-4
            `}
          />

          {/* hidden inputs */}
          <Input
            name="api_key"
            type="hidden"
            value={process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY}
          />

          <Input
            type="hidden"
            name="user"
            value={process.env.NEXT_PUBLIC_CONTACT_FORM_USER}
          />

          <Input
            type="hidden"
            name="subject"
            value="Nuevo mensaje de contacto en tu web!"
          />
          <Input
            type="hidden"
            name="redirect"
            value={"https://" + host + "?thanks=true"}
          />

        </div>
      </form>
    </section>
  )
}