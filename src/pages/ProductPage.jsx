
import React from 'react'
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import Image from '../layer/Image'
import SOF from '../../public/image/Image (4).png'
import Text from '../layer/Text'
import { FaStar } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <>
    <div className="py-28">
      <Container>
        <Flex className={'justify-between gap-4'}>
        <div className="w-5/12">
        <Image imgsrc={SOF} imgalt={'SOF'} className={'w-full'}/>
        </div>
        <div className="w-7/12">
        <Text texts={"DJ1 Dual Battery Folding Camera Toy Drone"} as={'p'} className={'text-2xl font-dmSans text-DDC py-6 font-bold'}/>
        <div className="flex text-yellow-500 gap-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <Text 
          texts={"1 Review"} 
          as={'p'} 
          className={'text-sm font-dmSans text-mColor px-4 pb-4'}
          />
        </div>
          <div className="flex gap-1 items-center pb-6 ">
          <Text texts={"COLOR :"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-3'}/>
          <div className="w-4 h-4 bg-pink-400 rounded-full hover:w-5 hover:h-5"></div>
          <div className="w-4 h-4 bg-cyan-500 rounded-full hover:w-5 hover:h-5"></div>
          <div className="w-4 h-4 bg-emerald-600 rounded-full hover:w-5 hover:h-5"></div>
          <div className="w-4 h-4 bg-pink-700 rounded-full hover:w-5 hover:h-5"></div>
          <div className="w-4 h-4 bg-purple-600 rounded-full hover:w-5 hover:h-5"></div>
          </div>
          <div className="flex gap-4 pb-6">
          <Text texts={"SIZE :"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold'}/>
          <div className="flex w-28 h-6 border-2 items-center justify-between px-2 ">
            <Text 
            texts={"S"} 
            as={"h5"} 
            className={"text-sm text-mColor font-dmSans"}/>
            <FaSortDown className='text-sm text-mColor' />
        </div>
          </div>
          <div className="flex gap 4 pb-6">
          <Text texts={"QUANTITY:"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-4'}/>
          <div className="flex w-36 h-7 border-2 items-center">
            <button className='w-12 text-base font-bold text-DDC font-dmSans'>-</button>
          <Text 
            texts={"1"} 
            as={"p"} 
            className={"w-12 text-base font-bold text-DDC font-dmSans flex items-center justify-center"}/>
            <button className={"w-12 text-base font-bold text-DDC font-dmSans"}>+</button>
            </div>
          </div>
          <div className="flex pb-6">
          <Text texts={"STATUS:"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-3'}/>
          <Text 
          texts={"In stock"} 
          as={'p'} 
          className={'text-base font-dmSans text-mColor'}
          />
          </div>

          <div className="flex pb-6">
          <Text texts={"brand:"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-3'}/>
          <Text 
          texts={"Essence"} 
          as={'p'} 
          className={'text-base font-dmSans text-mColor'}
          />
          </div>

          <div className="flex pb-6">
          <Text texts={"warrantyInformation:"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-3'}/>
          <Text 
          texts={"1 month warranty"} 
          as={'p'} 
          className={'text-base font-dmSans text-mColor'}
          />
          </div>

          <div className="flex pb-6">
          <Text texts={"shippingInformation:"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-3'}/>
          <Text 
          texts={"Ships in 1 month"} 
          as={'p'} 
          className={'text-base font-dmSans text-mColor'}
          />
          </div>

          <div className="flex pb-5">
          <Text texts={"availabilityStatus:"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pr-3'}/>
          <Text 
          texts={"Low Stock"} 
          as={'p'} 
          className={'text-base font-dmSans text-mColor'}
          />
          </div>
          <div className="flex gap-5">
          <button className='py-2 px-10 border-2 text-DDC hover:bg-mHC hover:text-white font-dmSans font-semibold'>Add to Wish List</button>
          <Link to={'/cart'}>
          <button className='py-2 px-14 border-2 text-DDC hover:bg-mHC hover:text-white font-dmSans font-semibold'>Add to Cart</button>
          </Link>
          </div>
        </div>
        </Flex>
        <div className="pt-6">
        <Text texts={"description:"} as={'p'} className={'text-xl font-dmSans text-DDC font-semibold pr-3'}/>
                  <Text 
          texts={"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."} 
          as={'p'} 
          className={'text-base font-dmSans text-mColor'}
          />
        </div>

        <div className="pt-5">
        <Text texts={"Reviews (1)"} as={'p'} className={'text-xl font-dmSans text-DDC font-semibold pb-5'}/>
        <Text texts={"John Ford"} as={'p'} className={'text-base font-dmSans text-DDC font-semibold pb-2'}/>
                  <Text 
          texts={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} 
          as={'p'} 
          className={'text-sm font-dmSans text-mColor'}
          />
        </div>
        <div className="pt-6">
      <Text texts={"Add a Review"} as={"h4"} className={"text-xl font-semibold text-DDC font-dmSans pb-10"}/>
    <div className="w-96 border-b-2">
    <Text texts={"Name"} as={"h5"} className={"text-xl font-semibold py-1 font-dmSans text-DDC"}/>
    <input type="text" placeholder='Your name here'  className='w-full py-2'/>
    </div>
    <div className="w-96 border-b-2 pt-8">
    <Text texts={"Email"} as={"h5"} className={"text-xl font-semibold py-1 font-dmSans text-DDC"}/>
    <input type="email" placeholder='Your email here'  className='w-full py-2'/>
    </div>
    <div className="w-96 border-b-2 pt-6">
    <Text texts={"Review"} as={"h5"} className={"text-xl font-semibold py-1 font-dmSans text-DDC"}/>
    <input type="text" placeholder='Your review here'  className='w-full pb-20'/>
    </div>
    <button className='py-2 px-14 bg-black text-white mt-6'>Post</button>
        </div>
      </Container>
    </div>
    </>
  )
}

export default ProductPage