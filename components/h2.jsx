
/**
 * Subtitle component
 * @param {string} text subtitle text
 * @param {boolean} isHidden if true, hide to user. Default: false
 * @param {string} className additional class names
 * @returns {JSX.Element}
 */
export default function H2({ text, isHidden = false, className="" }) {
  return (
    <h2
      className={`
          text-3xl
          text-center
          text-blue
          font-bold
          my-6
          ${isHidden ? 'title-hidden' : ''}
          ${className}
        `}
    >
      {text}
    </h2>
  )

}