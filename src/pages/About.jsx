import React from 'react'
import Text from '../layer/Text'
import Container from '../layer/Container'
import Image from '../layer/Image'
import Apo from '../../public/image/bu.png'
import but from '../../public/image/but.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GoChevronRight } from "react-icons/go";

const About = () => {
  const data=useSelector(state=>(state.Breadcrumbe.previousValue))
  return (
    <>
    <div className="py-20">
     <Container>
     <Text texts={"About"} as={"h2"} className={'text-4xl text-DDC font-dmSans font-bold'}/>
           <div className="flex pb-10 pt-4 items-center">
             <p className='font-dmSans text-mColor font-medium'>{`${data}`}</p>
             <GoChevronRight className='font-dmSans text-mColor font-medium'/>
             <p className='font-dmSans text-mColor font-medium'>About</p>
           </div>
     <div className="flex">
     <div className="w-6/12 pr-2"><Link to={"/shop"}><Image imgsrc={Apo} imgalt={'Apo'}/></Link></div>
     
      
      <div className="w-6/12 pl-2"><Link to={"/shop"}><Image imgsrc={but} imgalt={'but'}/></Link></div>
     </div>
     <Text texts={"Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."} as={"p"} className={'font-dmSans text-3xl py-20 text-DDC'}/>
     <div className="flex gap-3">
      <div className="w-4/12">
      <Text texts={"Our Vision"} as={"h4"} className={'text-xl font-dmSans font-bold pb-1 text-DDC'}/>
      <Text texts={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} as={"h4"} className={'font-dmSans pb-1 text-mColor'}/>
      </div>
      <div className="w-4/12">
      <Text texts={"Our Story"} as={"h4"} className={'text-xl font-dmSans font-bold pb-3 text-DDC'}/>
      <Text texts={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} as={"h4"} className={'font-dmSans pb-1 text-mColor'}/>
      </div>
      <div className="w-4/12">
      <Text texts={"Our Brands"} as={"h4"} className={'text-xl text-DDC font-dmSans font-bold pb-1'}/>
      <Text texts={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."} as={"h4"} className={'font-dmSans pb-1 text-mColor'}/>
      </div>
     </div>
      </Container> 
    </div>
    </>
  )
}

export default About