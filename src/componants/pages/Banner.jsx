import React from 'react'
import Image from '../../layer/Image'
import bannerImg from '/image/Group 10.png'

const Banner = () => {
return (
    <Image imgsrc={bannerImg} imgalt={bannerImg} className={'bg-no-repeat bg-cover bg-center w-full'}/>
)
}

export default Banner