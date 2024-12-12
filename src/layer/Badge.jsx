import React from 'react'

const Badge = ({className,text}) => {
return (
    <div className={`bg-black text-white ] px-[2vw]  py-[1vh] font-dmSans font-bold rounded-sm ${className}`}>{text}</div>
)
}
//  text-center content-center text-[2vh] w-[2vw] h-[1vh

export default Badge