import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Text from '../layer/Text'
import Menu from '../layer/Menu'
import Image from '../layer/Image'
import Logo from '/image/Logo.png'
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { IoLogoInstagram } from "react-icons/io5"
import { Link } from 'react-router-dom' 



const Footer = () => {
  return (
    <>
    <section  className={'bg-FooterColor'}>
    <Container>
    <Flex className={'pt-10'}>
    <div className="w-[10%]">
    <Text texts={'MENU'} as={'h3'} className={'font-dmSans text-base text-black font-bold pb-2'}/>
    <ul>
    <Menu menuName={'Home'} className={'py-1 text-xs'}/>
    <Menu menuName={'Shop'} className={'py-1 text-xs'}/>
    <Menu menuName={'About'} className={'py-1 text-xs'}/>
    <Menu menuName={'Contact'} className={'py-1 text-xs'}/>
    <Menu menuName={'Journal'} className={'py-1 text-xs'}/>
    </ul> 
    </div>
    <div className="w-[15%]">
    <Text texts={'SHOP'} as={'h3'} className={'font-dmSans text-base text-black font-bold pb-2'}/>
    <ul>
    <Menu menuName={'Category 1'} className={'py-1 text-xs'}/>
    <Menu menuName={'Category 2'} className={'py-1 text-xs'}/>
    <Menu menuName={'Category 3'} className={'py-1 text-xs'}/>
    <Menu menuName={'Category 4'} className={'py-1 text-xs'}/>
    <Menu menuName={'Category 5'} className={'py-1 text-xs'}/>
    </ul> 
    </div>
    <div className="w-[15%]">
    <Text texts={'HELP'} as={'h3'} className={'font-dmSans text-base text-black font-bold pb-2'}/>
    <ul>
    <Menu menuName={'Privacy Policy'} className={'py-1 text-xs'}/>
    <Menu menuName={'Terms & Conditions'} className={'py-1 text-xs'}/>
    <Menu menuName={'Special E-shop'} className={'py-1 text-xs'}/>
    <Menu menuName={'Shipping'} className={'py-1 text-xs'}/>
    <Menu menuName={'Secure Payments'} className={'py-1 text-xs'}/>
    </ul> 
    </div>
    <div className="w-[30%]">
    <Text texts={'(052) 611-5711'} as={'h3'} className={'font-dmSans text-base text-black font-bold pb-1'}/>
    <Text texts={'company@domain.com'} as={'h3'} className={'font-dmSans text-base text-black font-bold pb-2'}/>
    <ul>
    <Menu menuName={'575 Crescent Ave. Quakertown, PA 18951'} className={'py-1 text-xs'}/>
    </ul>
    </div>
    <div className="w-[30%]">
        <Link to={"/"}>
        <Image imgsrc={Logo} imgalt={Logo}/>
        </Link>
    </div>
    </Flex>
    <Flex className={'py-10 justify-between'}>
    <div className="flex">
    <BsFacebook className='text-blue-600'/>
    <BsLinkedin className='text-blue-500 mx-4'/>
    <IoLogoInstagram className='text-pink-600'/>
    </div>
    <div className="">
    <Text texts={'2025 Orebi Minimal eCommerce Figma Template by Adveits'} as={'p'} className={'font-dmSans text-xs text-slate-500'}/>
    </div>
    </Flex>
    </Container>
    </section>
    </>
  )
}

export default Footer