import React from 'react'

const Menu = ({menuName,className}) => {
  return (
    <ul>
        <li className={`font-dmSans text-sm text-mColor hover:text-mHC hover:font-bold transition ease-in-out duration-500 ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu