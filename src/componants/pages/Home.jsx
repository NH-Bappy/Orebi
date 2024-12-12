import React from 'react'
import Nav from './Nav'
import Flex from '../../layer/Flex'
import Category from './Category'
import Banner from './Banner'
import Promo from '../promo'
import Products from '../Products'
import AdsBanner from '../AdsBanner'
import SpecialOffer from '../SpecialOffer'
import SecondProducts from '../SecondProducts'


const Home = () => {
  return (
    <>
    <Nav/>
    <Category/>
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