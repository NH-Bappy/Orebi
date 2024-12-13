import React from 'react'
import Badge from './Badge'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import Flex from './Flex';
import Text from './Text';
import Compare from '../icons/Compare';



const Product = (props) => {
    return (
        <>

        <div className="relative w-[310px] justify-between group">
        <img src={props.src} alt={props.alt}/>
        <Badge text={'text'} className={'absolute top-5 left-5'}/>
        <div className='w-full p-5 bg-ProductC absolute right-0 bottom-14 invisible group-hover:visible '>
        <Flex className={'justify-end items-center gap-4 py-1'}>
            <Text texts={'Add to Wish List'} as={'p'} className={'text-sm font-dmSans text-mColor hover:text-black hover:font-bold'}/>
            <FaHeart />
        </Flex>
        <Flex className={'justify-end items-center gap-4 py-2'}>
            <Text texts={'Compare'} as={'p'} className={'text-sm font-dmSans text-mColor hover:text-black hover:font-bold'}/>
            <Compare/>
        </Flex>
        <Flex className={'justify-end items-center gap-4'}>
            <Text texts={'Add to Cart'} as={'p'} className={'text-sm font-dmSans text-mColor hover:text-black hover:font-bold'}/>
            <FaShoppingCart />
        </Flex>
        </div>
        <Flex className={"justify-between pt-2"}>
            <p className='text-mHC font-bold text-xl font-dmSans'>{props.PH}</p>
            <p className='text-mColor text-base'>{props.dollar}</p>
        </Flex>
        <span className='text-mColor text-base font-dmSans'>Black</span>
        </div>
        </>
    )
}
export default Product