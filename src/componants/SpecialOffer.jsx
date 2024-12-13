import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Product from '../layer/Product'
import SOF from '/image/Image (4).png'
import SOFive from '../../public/image/Image (5).png'
import SOS from '../../public/image/Image (6).png'
import SOSeven from '../../public/image/Image (7).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PreArow from '../icons/PreArow'
import NextArrow from '../icons/NextArrow'


const SpecialOffer = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:<PreArow/>,
    nextArrow: <NextArrow/>
  };
  return (
    <Container className={'py-16'}>
    <h2 className='font-bold text-mHC text-5xl font-dmSans py-6'>New Arrivals</h2>
    <Slider {...settings}>
    {/* <Flex className={'justify-between pb-[50px]'}> */}
    <Product src={SOF} alt={SOF} PH="Basic Crew Neck Tee" dollar={"$57.98"}/>
    <Product src={SOFive} alt={SOFive} PH="Basic Crew Neck Tee" dollar={"$200"}/>
    <Product src={SOS} alt={SOS} PH="Basic Crew Neck Tee" dollar={"$99"}/>
    <Product src={SOSeven} alt={SOSeven} PH="Basic Crew Neck Tee" dollar={"$500.09"}/>
    {/* </Flex> */}
    </Slider>
    </Container>
    
  )
}

export default SpecialOffer