import BtnIcon from '@/components/btn-icon.jsx'
import { useEffect, useState } from 'react'

/**
 * Button to open/close menu
 * @param {boolean} isMenuOpen menu status
 * @param {function} setIsMenuOpen function to change menu status 
 * @param {string} className extra css classes
 * @returns {jsx}
 */
export default function BtnMenu({ isMenuOpen, setIsMenuOpen, className }) {

  const [isChanging, setIsChanging] = useState(false)
  const [path, setPath] = useState(null)

  const pathOpen = <path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" />
  const pathClose = <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero" />

  // Change image when menu status changes
  useEffect(() => {
    setIsChanging(true)
    setTimeout(() => {
      if (isMenuOpen) {
        setPath(pathClose)
      } else {
        setPath(pathOpen )
      }
    }, 200)

    setTimeout(() => {
      setIsChanging(false)
    }, 400)    
  }, [isMenuOpen])

  return (
    <BtnIcon
      onClick={() => {
        setIsMenuOpen(!isMenuOpen)}
      }
      path={path}
      className={`
        menu-btn
        duration-100
        border-2
        border-blue
        rounded-md
        p-1
        ${className}
      `}
      classNameSvg={`
        duration-100
        ${isChanging && "opacity-0"}
      `}
    />
  )

}