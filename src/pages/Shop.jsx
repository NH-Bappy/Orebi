import React, { useState } from 'react'
import Flex from '../layer/Flex'
import Container from '../layer/Container'
import Text from '../layer/Text'
import Menu from '../layer/Menu'
import Pagination from '../componants/Pagination'
import { GoChevronRight } from "react-icons/go";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Shop = () => {
  const [valu,set]=useState(true)
  const data=useSelector(state=>(state.Breadcrumbe.previousValue))
  const data2=useSelector(state=>(state.Breadcrumbe.BeforepreviousValue))

  return (
    <>
    <Container>
    <Flex>
    <div className="w-60 py-20">
      <Text texts={'Products'} as={'h2'} className={'font-dmSans font-bold text-4xl text-mHC'}/>
      <Link to={data=="Home"?"/":`/${data}`}>
      <div className="flex pb-24 pt-4 items-center">
        <p className='font-dmSans text-mColor font-medium'>{`${data}`}</p>
        <GoChevronRight className='font-dmSans text-mColor font-medium'/>
        <p className='font-dmSans text-mColor font-medium'>shop</p>
      </div>
      </Link>
{/* shop Category strar */}
      <Text texts={'Shop by Category'} as={'h4'} className={'font-dmSans font-bold text-1xl text-mHC pb-2'}/>
      <ul className='w-36'>
        <Menu menuName={'Category 1'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'Category 2'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'Category 3'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'Category 4'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'Category 5'} className={'text-base py-2 hover:text-base'}/>
      </ul>
{/* shop Category end */}
{/* shop by color start */}
<Text texts={'Shop by Color'} as={'h4'} className={'font-dmSans font-bold text-1xl text-mHC pb-2 pt-10'}/>
      <ul className='h-36'>
      <Flex className={'gap-2 h-8 items-center'}>
      <div className="w-3 h-3 bg-black rounded-full"></div>
      <Menu menuName={'Color 1'} className={'text-base hover:text-base'}/>
      </Flex>
      <Flex className={'gap-2 h-8 items-center'}>
      <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
      <Menu menuName={'Color 2'} className={'text-base hover:text-base'}/>
      </Flex>
      <Flex className={'gap-2 h-8 items-center'}>
      <div className="w-3 h-3 bg-red-800 rounded-full"></div>
      <Menu menuName={'Color 3'} className={'text-base hover:text-base'}/>
      </Flex>
      <Flex className={'gap-2 h-8 items-center'}>
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      <Menu menuName={'Color 4'} className={'text-base hover:text-base'}/>
      </Flex>
      <Flex className={'gap-2 h-8 items-center'}>
      <div className="w-3 h-3 bg-pink-600 rounded-full "></div>
      <Menu menuName={'Color 5'} className={'text-base hover:text-base'}/>
      </Flex>
      </ul>
{/* shop by color end */}
{/* Shop by Brand */}
<Text texts={'Shop by Brand'} as={'h4'} className={'font-dmSans font-bold text-1xl text-mHC pb-2 pt-14'}/>
      <ul className='w-36'>
        <Menu menuName={'Brand 1'} className={'text-base h-8 hover:text-base'}/>
        <Menu menuName={'Brand 2'} className={'text-base h-8 hover:text-base'}/>
        <Menu menuName={'Brand 3'} className={'text-base h-8 hover:text-base'}/>
        <Menu menuName={'Brand 4'} className={'text-base h-8 hover:text-base'}/>
        <Menu menuName={'Brand 5'} className={'text-base h-8 hover:text-base'}/>
      </ul>
{/* Shop by Brand */}
<Text texts={'Shop by Price'} as={'h4'} className={'font-dmSans font-bold text-1xl text-mHC pb-2 pt-8'}/>
      <ul className='w-36'>
      <Menu menuName={'$0.00 - $9.99'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'$10.00 - $19.99'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'$20.00 - $29.99'} className={'text-base border-b-[1px] py-2 hover:text-base'}/>
        <Menu menuName={'$30.00 - $39.99'} className={'text-base border-b-[1px] py-4 hover:text-base'}/>
        <Menu menuName={'$40.00 - $69.99'} className={'text-base py-2 hover:text-base'}/>
      </ul>
    </div>
    {/* right start */}
    <div className="pt-56 pb-36 pl-10">
      <Pagination itemsPerPage={9} />
    </div>
    </Flex>
    </Container>
    

    </>
  )
}

export default Shop