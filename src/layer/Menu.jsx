import React from 'react'

const Menu = ({menuName,className}) => {
  return (
        <li className={`font-dmSans text-sm text-mColor hover:text-mHC hover:font-bold${className}`}>{menuName}
        </li>
  )
}

export default Menu