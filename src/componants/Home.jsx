import React from 'react'
import Flex from '../layer/Flex'
import Banner from './Banner'
import Products from './Products'
import AdsBanner from './AdsBanner'
import SpecialOffer from './SpecialOffer'
import SecondProducts from './SecondProducts'
import Promo from './Promo'




const Home = () => {
  return (
    <>
    <Flex/>
    <Banner/>
    <Promo/>
    <Products/>
    <SecondProducts/>
    <AdsBanner/>
    <SpecialOffer/>
    </>
  )
}

export default Home