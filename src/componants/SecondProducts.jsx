import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Product from '../layer/Product'
import PIF from "../../public/image/Image(04).png"
import PIFive from "../../public/image/Image (05).png"
import PIS from "../../public/image/Image (06).png"
import PISeven from "../../public/image/Image (07).png"


const SecondProducts = () => {
  return (
    <Container>
    <Flex  className={'py-[70px] justify-between'}>
    <Product src={PIF} alt={PIF} PH="Basic Crew Neck Tee" dollar={"$50"}/>
    <Product src={PIFive}  alt={PIFive} PH="Basic Crew Neck Tee" dollar={"$20"}/>
    <Product src={PIS}  alt={PIS} PH="Basic Crew Neck Tee" dollar={"$30.78"}/>
    <Product src={PISeven}  alt={PISeven} PH="Basic Crew Neck Tee" dollar={"$134.89"}/>
    </Flex>
    </Container>
  )
}

export default SecondProducts