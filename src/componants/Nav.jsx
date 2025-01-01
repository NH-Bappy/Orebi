import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Image from '../layer/Image'
import Logo from '/image/Logo.png'
import Menu from '../layer/Menu'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bread } from '../redux/slices/Breadcrumbe'
const Nav = () => {
  const dispatch=useDispatch()
  const handleClick = (item) => {
    dispatch(bread(item))
  }


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
              
              <Link to={"/"}
              onClick={()=>handleClick("Home")}
              >
              <Menu menuName={'Home'}/>
              </Link>

              <Link to={"/Shop"}
              onClick={()=>handleClick("Shop")}
              >
              <Menu menuName={'Shop'}/>
              </Link>

              <Link to={"/About"}
              onClick={()=>handleClick("About")}
              >
              <Menu menuName={'About'}/>
              </Link>
              
              <Link to={"/Contacts"}
              onClick={()=>handleClick("Contacts")}
              >
              <Menu menuName={'Contacts'}/>
              </Link>
              
              <Link to={"/Account"}
              onClick={()=>handleClick("Account")}
              >
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