import { useState, useEffect } from "react"

import Image from "next/image"

/**
 * Loading spinner
 * @param {bool} isVisible Show or hide loading 
 * @param {string} bgColor Background color
 * @param {string} extraClasses Extra classes
 * @returns 
 */
export default function Loading({ isVisible = true, bgColor, extraClasses = "", isRelative = false }) {

  const [display, setDisplay] = useState("flex")
  const [opacity, setOpacity] = useState("opacity-100")

  // Hide and show loading
  useEffect(() => {
    if (isVisible) {
      setDisplay("flex")
      setTimeout(() => {
        setOpacity("opacity-100")
      }, 200)
    } else {
      setOpacity("opacity-0")
      setTimeout(() => {
        setDisplay("hidden")
      }, 200)
    }
  }, [isVisible])


  return (
    <div
      className={`
        loadding
        absolute top-0 left-0 right-0 bottom-0
        width-full height-full
        loading
        justify-center
        duration-300
        flex
        items-center
        ${opacity}
        ${display}
        ${bgColor}
        ${extraClasses}
      `}
    >
      <img
        src={"spinner.gif"}
        alt="spinner de cargando"
        className={`
          ${isRelative ? 'w-2/6 h-auto' : 'w-20 h-20'}
        `}
      />
    </div>
  )
}