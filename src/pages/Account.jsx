
import React from 'react'
import Container from '../layer/Container'
import { Link } from 'react-router-dom'
import Image from '../layer/Image'
import logo from "../../public/image/Logo.png"
import Text from '../layer/Text'




const Account = () => {

  return (
    <>
    <div className="p-40">
      <Container>
      <div className="w-80">

      <div className="flex justify-center">
      <Link to={"/"}>
      <Image imgsrc={logo} imgalt={"logo"} />
      </Link>
      </div>
      <div className="py-4">
        <Text texts={"Login"} as={"h3"} className={"text-4xl font-bold py-5 font-dmSans"}/>


       <div className="py-4">
       <input type="email" placeholder='Ente Your Prone Number or Email' className='w-full h-12 border-2 pl-3'/>
       </div>
        <div className="py-4">
        <input type="password" placeholder='Ente Your Password' className='w-full h-12 border-2 pl-3'/>
        </div>

      </div>
      </div>
      </Container>
    </div>
    </>
  )
}

export default Account