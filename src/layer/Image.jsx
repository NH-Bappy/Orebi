import React from 'react'

const Image = ({imgsrc,imgalt,className}) => {
return (
    <img className={`${className}`} src={imgsrc} alt={imgalt}/>
)
}

export default Image