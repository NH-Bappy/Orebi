import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Image from '../layer/Image'
import promoImgOne from '/image/Ad_1.png'
import promoImgTwo from '/image/Ad_2.png'
import promoImgThree from '/image/Ad_3.png'

const Promo = () => {
return (
    <>
    <div className="py-[100px]">
        <Container>
        <Flex className={'justify-between'}>
        <div className="w-[49%]">
        <Image imgsrc={promoImgOne} imgalt={promoImgOne} className={'w-full'}/>
        </div>
        <div className="w-[49%]">
        <Image imgsrc={promoImgTwo} imgalt={promoImgTwo} className={'w-full pb-4'}/>
        <Image imgsrc={promoImgThree} imgalt={promoImgThree} className={'w-full pt-4'}/>
        </div>
        </Flex>
        </Container>
    </div>
    </>
)
}

export default Promo