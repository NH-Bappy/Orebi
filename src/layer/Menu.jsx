import React from 'react'

const Menu = ({menuName,className}) => {
  return (
        <li className={`font-dmSans text-sm text-mColor hover:text-mHC hover:font-bold transition ease-in-out duration-500 ${className}`}>{menuName}
        </li>
  )
}

export default Menu