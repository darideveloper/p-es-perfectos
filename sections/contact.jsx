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

  const locations = [
    {
      "name": "Sucursal 1",
      "address": "Av. Siempre Viva 1, Col. Centro, CDMX",
      "map": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481729.0486643141!2d-99.47329144974432!3d19.390436558404843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700693042936!5m2!1ses-419!2smx',
      "schedule": "Lunes a Viernes de 9:00 a 18:00 hrs"
    },
    {
      "name": "Sucursal 2",
      "address": "Av. Siempre Viva 2, Col. Centro, CDMX",
      "map": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.476124026992!2d-7.4518093248741994!3d41.947107271234195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ac1ce29954f7b%3A0x4d86cbc0cef7595!2s32619%20Monterrey%2C%20Ourense%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2smx!4v1700693018777!5m2!1ses-419!2smx',
      "schedule": "Martes a Domingo de 9:00 a 18:00 hrs"
    },
    {
      "name": "Sucursal 3",
      "address": "Av. Siempre Viva 3, Col. Centro, CDMX",
      "map": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.4034778055034!2d-102.29876452592018!3d21.880533479990557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee7cc0593ca5%3A0x53311427223a7467!2sAntigua%20Plaza%20de%20Armas!5e0!3m2!1ses-419!2smx!4v1700692963156!5m2!1ses-419!2smx',
      "schedule": "Lunes a Viernes de 10:00 a 20:00 hrs"
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
        action="#"
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
            `}
          >

            <select
              name="location"
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
            name="Hora"
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
        </div>

      </form>

    </section>
  )
}