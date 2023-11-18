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

  const pathOpen = <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm12.5 10.75c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.248c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.252c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" />
  const pathClose = <path d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm7.491 6.432 2.717-2.718c.146-.146.338-.219.53-.219.404 0 .751.325.751.75 0 .193-.073.384-.22.531l-2.717 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-2.728-2.728-2.728 2.728c-.147.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z" fill-rule="nonzero" />

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
        duration-200
        ${className}
        ${isChanging && "opacity-0"}
      `}
    />
  )

}