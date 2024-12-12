import React from 'react'
import Container from '../layer/Container'
import Product from '../layer/Product'
import productImg from "../../public/image/Image.png"
import productImgOne from "../../public/image/Image (1).png"
import productImgTwo from "../../public/image/Image (2).png"
import productImgThree from "../../public/image/Image (3).png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PreArow from '../icons/PreArow'
import NextArrow from '../icons/NextArrow'



const Products = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:<PreArow/>,
    nextArrow: <NextArrow/>
  };
  return (
    <>

      
    <Container>
      <h2 className='font-bold text-mHC text-5xl font-dmSans py-6'>New Arrivals</h2>

        
        <Slider {...settings}>
        <Product src={productImg} alt={productImg} PH="Basic Crew Neck Tee" dollar={"$130.098"} />
        <Product src={productImgOne}  alt={productImgOne} PH="Basic Crew Neck Tee" dollar={"$10.098"}/>
        <Product src={productImgTwo}  alt={productImgTwo} PH="Basic Crew Neck Tee" dollar={"$100.098"}/>
        <Product src={productImgThree}  alt={productImgThree} PH="Basic Crew Neck Tee" dollar={"$110.098"}/>
        </Slider>
        
    </Container>
    
    {/* ================ */}

    </>
  )
}

export default Products