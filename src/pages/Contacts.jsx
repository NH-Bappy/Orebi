import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'
import { useSelector } from 'react-redux'
import { GoChevronRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const Contacts = () => {
  const data=useSelector(state=>(state.Breadcrumbe.previousValue))
  return (
    <>
    <div className="py-10">
      <Container>
      <Text texts={"Contacts"} as={"h3"} className={"text-4xl font-bold pt-5 font-dmSans text-DDC"}/>
      <Link to={data=="Home"?"/":`/${data}`}>
      <div className="flex pb-20 pt-4 items-center">
                   <p className='font-dmSans text-mColor font-medium'>{`${data}`}</p>
                   <GoChevronRight className='font-dmSans text-mColor font-medium'/>
                   <p className='font-dmSans text-mColor font-medium'>Contacts</p>
      </div>
      </Link>
      <Text texts={"Fill up a Form"} as={"h4"} className={"text-2xl font-semibold text-DDC font-dmSans pb-10"}/>
    <div className="w-96 border-b-2">
    <Text texts={"Name"} as={"h5"} className={"text-xl font-semibold py-1 font-dmSans text-DDC"}/>
    <input type="text" placeholder='Your name here'  className='w-full py-2'/>
    </div>
    <div className="w-96 border-b-2 pt-8">
    <Text texts={"Email"} as={"h5"} className={"text-xl font-semibold py-1 font-dmSans text-DDC"}/>
    <input type="email" placeholder='Your email here'  className='w-full py-2'/>
    </div>
    <div className="w-96 border-b-2 pt-8">
    <Text texts={"Message"} as={"h5"} className={"text-xl font-semibold py-1 font-dmSans text-DDC"}/>
    <input type="text" placeholder='Your message here'  className='w-full pb-20'/>
    </div>
    <button className='py-2 px-14 bg-black text-white mt-8 mb-20'>Post</button>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d58419.51556887139!2d90.3512419236438!3d23.77518883389185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.804092999999998!2d90.4152376!4m5!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka!3m2!1d23.746149499999998!2d90.3742307!5e0!3m2!1sen!2sbd!4v1735411425253!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </Container>
    </div>
    </>
  )
} 

export default Contacts