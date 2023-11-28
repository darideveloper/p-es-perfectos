/**
 * h1 component
 * @param {string} text text to render
 * @returns {JSX.Element}
 */
export default function H1 ({text}) {
  return (
    <h1 
      className={`
        text-4xl
        font-bold
        text-blue
        text-center
        my-12
      `}
    >
      {text}
    </h1>
  )
}