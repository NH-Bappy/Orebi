import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Bars from '../icons/Bars'
import { FaShoppingCart } from "react-icons/fa";
import Login from '../icons/Login'
import { Link } from 'react-router-dom';
import Search from '../icons/Search';

const Category = () => {
return (
    <>
    <div className="bg-categoryColor">
    <Container>
    <Flex className={'justify-between items-center py-5'}>
        <Bars/>
        <Search/>
        <div className='w-[10%]'>
            <Flex className={'gap-3'}>
            <Login/>
            <Link to={"/cart"}>
            <div className="cart"><FaShoppingCart/></div>
            </Link>
            </Flex>
        </div>
    </Flex>
    </Container>
    </div>
    </>
)
}

export default Category