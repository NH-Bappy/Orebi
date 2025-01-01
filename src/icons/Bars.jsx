import React, { useRef } from 'react'
import Menu from '../layer/Menu'
import Flex from '../layer/Flex'
import Text from '../layer/Text'
import { Link } from 'react-router-dom'


const Bars = () => {


    let dropRef = useRef(null)

    let handleDrop = () =>{
        if(dropRef.current.style.display == 'block'){
            dropRef.current.style.display = 'none'
        }
        else{
            dropRef.current.style.display = 'block'
        }
    }


return (

    <>

<Link>
<div onClick={handleDrop} className='relative z-0 group:'>
<Flex className={'items-center gap-x-2'}>
<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626"/>
<path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626"/>
</svg>
<Text texts={'Shop by Category'} as={'h3'} className={"font-dmSans text-mHC"}/>
</Flex>


        <div className="mt-3 w-56 bg-DDC py-3 pl-5 hidden absolute z-10 rounded" ref={dropRef}>
        <ul>
            <Menu menuName={'Accesories'} className={'py-1 hover:text-white my-3 hover:ml-2 duration-300'}/>
            <Menu menuName={'Furniture'} className={'py-1 hover:text-white my-3 hover:ml-2 duration-300'}/>
            <Menu menuName={'Electronics'} className={'py-1 hover:text-white my-3 hover:ml-2 duration-300'}/>
            <Menu menuName={'Clothes'} className={'py-1 hover:text-white my-3 hover:ml-2 duration-300'}/>
            <Menu menuName={'Bags'} className={'py-1 hover:text-white my-3 hover:ml-2 duration-300'}/>
            <Menu menuName={'Home appliances'} className={'py-1 hover:text-white my-3 hover:ml-2 duration-300'}/>
            
        </ul>
        </div>
    </div>
</Link>


</>
)
}

export default Bars