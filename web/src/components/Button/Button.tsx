import { Link } from '@redwoodjs/router'

const Button = ({ onClick = null, to = null, children, className = '' }) => {
  className = `leading-5 rounded bg-blue-500 py-2 px-4 box-border border-none m-0 font-bold text-white hover:bg-blue-700 ${className}`
  return onClick ? (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

export default Button
