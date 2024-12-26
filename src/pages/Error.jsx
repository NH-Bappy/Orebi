import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'
import { FaSearch} from "react-icons/fa";

const Error = () => {
  return (
    <>
    <div className="py-16">
    <Container>
      <div className="w-[450px]">
        <Text texts={"404"} as={"h2"} className={"text-9xl font-bold font-dmSans text-DDC pb-4"}/>

        <Text texts={"The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"} as={"p"} className={"text-xs text-mColor "}/>

        <div className="relative py-6">
       <input type="text" placeholder='Type to search' className='w-full h-12 border-2 pl-3'/>
       <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2"/>
       </div>

        <button className='py-3 px-10  bg-DDC text-white font-dmSans rounded '>Back to Home</button>

      </div>
    </Container>
    </div>
    </>
  )
}

export default Error