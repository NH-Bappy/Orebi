import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Bars from '../icons/Bars'
import Text from '../layer/Text'
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";

const Category = () => {
return (
    <>
    <div className="bg-categoryColor">
    <Container>
    <Flex className={'justify-between items-center py-5'}>
        <div>
        <Flex className={'items-center gap-x-2'}>
        <Bars/>
        <Text texts={'Shop by Category'} as={'h3'} className={"font-dmSans text-mHC"}/>
        </Flex>
        </div>
        <div className="relative w-[50%]">
            <input type="text" placeholder='Search Products' className='bg-white p-4 w-full rounded'/>
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2"/>
        </div>
        <div className='w-[10%]'>
            <Flex className={'gap-1'}>
            <FaUser/>
            <FaCaretDown />
            <FaShoppingCart className='ml-6' />
            </Flex>
        </div>
    </Flex>
    </Container>
    </div>
    </>
)
}

export default Category