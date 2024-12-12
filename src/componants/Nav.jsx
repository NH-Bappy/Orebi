import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Image from '../layer/Image'
import Logo from '/image/Logo.png'
import Menu from '../layer/Menu'
const Nav = () => {
return (
    <div>
        <>
        <div className="p-4">
        <Container>
          <Flex className={'items-center'}>
            <div className="">
              <Image imgsrc={Logo} imgalt={Logo}/>
            </div>
            <div className="w-full">
              <Flex className={'gap-6 justify-center'}>
              <Menu menuName={'Home'}/>
              <Menu menuName={'Shop'}/>
              <Menu menuName={'About'}/>
              <Menu menuName={'Contacts'}/>
              <Menu menuName={'Journal'}/>
              </Flex>
            </div>
          </Flex>
        </Container>
        </div>
        </>
    </div>
)
}

export default Nav