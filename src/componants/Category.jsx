import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Bars from '../icons/Bars'
import Text from '../layer/Text'
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import Login from '../icons/Login'

const Category = () => {
return (
    <>
    <div className="bg-categoryColor">
    <Container>
    <Flex className={'justify-between items-center py-5'}>
        <div>
        <Bars/>
        </div>
        <div className="relative w-[50%]">
            <input type="text" placeholder='Search Products' className='bg-white p-4 w-full rounded'/>
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2"/>
        </div>
        <div className='w-[10%]'>
            <Flex className={'gap-3'}>
            <Login/>
            <FaShoppingCart/>
            </Flex>
        </div>
    </Flex>
    </Container>
    </div>
    </>
)
}

export default Category