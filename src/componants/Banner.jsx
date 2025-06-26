import Image from '../layer/Image'
import bannerImg from '/image/Group 10.png'
import banner2 from '/public/image/banner2.jpg'
import banner3 from '/public/image/banner3.jpg'
import banner4 from '/public/image/banner4.png'




import Flex from '../layer/Flex';

// const Banner = () => {
// return (
//     <Image imgsrc={bannerImg} imgalt={bannerImg} className={'bg-no-repeat bg-cover bg-center w-full'}/>
// )
// }

// export default Banner


// import React from "react";

// import BannerImage from "../assets/bannerBg.png";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";



const Banner = () => {
  var settings  = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows:false,
    autoplay: true,
    speed: 1000,
  };
  return (
    <>
    <Slider {...settings} >
      <Flex className={"bg-no-repeat bg-cover bg-center w-full -z-20"}>
      <Image imgsrc={bannerImg}/>
      </Flex>
      <Flex className="bg-no-repeat w-full h-[420px] bg-cover bg-center -z-20">
      <img src={banner2} className="w-full h-full object-cover" alt="Banner -z-20" />
      </Flex>
      <Flex className={"bg-no-repeat w-full h-[420px] bg-cover bg-center -z-20"}>
      <Image imgsrc={banner3} className="w-full h-full object-cover" alt="Banner -z-20"/>
      </Flex>
      <Flex className={"bg-no-repeat w-full h-[420px] bg-cover bg-center -z-20"}>
      <Image imgsrc={banner4} className="w-full h-full object-cover" alt="Banner -z-20"/>
      </Flex>
    </Slider>
    </>
  );
};

export default Banner;