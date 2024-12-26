import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Image from '../layer/Image'
import Logo from '/image/Logo.png'
import Menu from '../layer/Menu'
import { Link } from 'react-router-dom'
const Nav = () => {
return (
    <div>
        <>
        <div className="p-4">
        <Container>
          <Flex className={'items-center'}>
            <div className="">
              <Link to={"/"}>
              <Image imgsrc={Logo} imgalt={Logo}/>
              </Link>
            </div>
            <div className="w-full">
            <ul>
              <Flex className={'gap-6 justify-center'}>
              
              <Link to={"/"}>
              <Menu menuName={'Home'}/>
              </Link>

              <Link to={"/Shop"}>
              <Menu menuName={'Shop'}/>
              </Link>

              <Link to={"/About"}>
              <Menu menuName={'About'}/>
              </Link>
              
              <Link to={"/Contacts"}>
              <Menu menuName={'Contacts'}/>
              </Link>
              
              <Link to={"/Account"}>
              <Menu menuName={'Account'}/>
              </Link>
              </Flex>
              </ul>
            </div>
          </Flex>
        </Container>
        </div>
        </>
    </div>
)
}

export default Nav