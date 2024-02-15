import Socials from "./socials"
/**
 * Footer section
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer
      className={`
        w-full
        bg-blue
        py-4 sm:py-2
      `}
      id="footer"
    >
      <div 
        className={`
          container
          mx-auto
          px-4
          flex
          flex-wrap
          justify-between
          items-center
        `} 
      >
        <p 
          className={`
            texts
            text-center
            text-white
            flex
            flex-wrap
            gap-2 sm:gap-4 lg:gap-8
            justify-center
            items-center
            mx-auto
            text-xs
          `}
        >

          <span className="copy">
            &copy; 2023 <strong>Pies Perfectos</strong>
          </span>
          <span className="powered">
            Powered by <a href="https://www.darideveloper.com/" target="_blank">Dari Developer</a>
          </span>
        </p>

        <div 
          className={`
            socials
            w-auto
            mx-auto
            my-2 sm:my-0
            flex
            justify-center
            items-center
          `}
        >
          <Socials 
            color="white"
          />
        </div>
      </div>
    </footer>
  )
}