import React from 'react'
import Container from '../layer/Container'
import Product from '../layer/Product'
import PIF from "../../public/image/Image(04).png"
import PIFive from "../../public/image/Image (05).png"
import PIS from "../../public/image/Image (06).png"
import PISeven from "../../public/image/Image (07).png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PreArow from '../icons/PreArow'
import NextArrow from '../icons/NextArrow'

const SecondProducts = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:<PreArow/>,
    nextArrow: <NextArrow/>
  };
  return (
    <Container className={'py-28'}>
    <Slider {...settings}>
    <Product src={PIF} alt={PIF} PH="Basic Crew Neck Tee" dollar={"$50"}/>
    <Product src={PIFive}  alt={PIFive} PH="Basic Crew Neck Tee" dollar={"$20"}/>
    <Product src={PIS}  alt={PIS} PH="Basic Crew Neck Tee" dollar={"$30.78"}/>
    <Product src={PISeven}  alt={PISeven} PH="Basic Crew Neck Tee" dollar={"$134.89"}/>
    </Slider>
    </Container>
  )
}

export default SecondProducts