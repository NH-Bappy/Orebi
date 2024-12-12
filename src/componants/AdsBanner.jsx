import React from 'react'
import Image from '../layer/Image'
import adImg from '/image/Ads_2.png'
import Container from '../layer/Container'
const AdsBanner = () => {
  return (
    <Container>
        <Image imgsrc={adImg} imgalt={adImg} className={'py-[50px]'}/>
    </Container>
  )
}

export default AdsBanner