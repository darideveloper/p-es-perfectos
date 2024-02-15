/**
 * Input component
 * @param {string} name - input name
 * @param {string} placeholder - input placeholder
 * @param {string} type - input type
 * @param {string} value - input value
 * @param {bool} required - is required
 * @param {function} onChange - function to handle change
 * @param {string} label - label text 
 * @param {string} className - extra classes
 * @returns {JSX.Element}
 */
export default function Input({ name, placeholder, type, value, required = true, onChange, label, className }) {
  return (
    <div
      className={`
        input-wrapper
        w-10/12 md:w-6/12
        px-4
        mb-4
        mx-auto md:mx-0
      `}
    >
      <label
        className={`
          ml-4
          my-1
          inline-block
        `}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`
          border-2 
          px-8
          py-1
          mt-1
          rounded-md
          text-md
          w-full
          duration-200
          border-greylighy hover:border-blue
          opacity-80 hover:opacity-100
          focus:shadow-lg
          ${className}
        `}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        required={required}
        onChange={onChange}
      />
    </div>

  )
}