
import React from 'react'
import Container from '../layer/Container'
import { Link } from 'react-router-dom'
import Image from '../layer/Image'
import logo from "../../public/image/Logo.png"
import Text from '../layer/Text'



const Account = () => {

  return (
    <>
    <div className="py-10 flex justify-center">
      <Container>
      <div className="w-80">
    <div className="border-b-2">
      
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

        <div className="flex justify-center ">
          <Link><button className='font-semibold text-xl font-dmSans hover:text-blue-500 '>Log In</button></Link>
        </div>
      </div>
    </div>
    </div>

    <div className="py-4 w-96 border-b-2">
        <Text texts={"New Customer"} as={"h3"} className={"text-4xl font-bold py-5 font-dmSans"}/>

        <Text texts={"Welcome and thank you for visiting my website! I'm thrilled to have you here. Whether you're exploring for the first time or just curious, I hope you find everything you're looking for. If you need any assistance or have questions, feel free to reach out. Enjoy your visit!"} as={"p"} className={"py-5 font-dmSans text-mColor "}/>

        <div className="flex justify-center ">
          <Link><button className='font-semibold text-xl font-dmSans hover:text-blue-500 '>And Please Sign up </button></Link>
        </div>
      </div>

      </Container>
    </div>
    </>
  )
}

export default Account