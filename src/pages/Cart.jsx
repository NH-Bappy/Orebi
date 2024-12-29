import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'
import Image from '../layer/Image'
import SOF from '../../public/image/Image (4).png'
import { FaSortDown } from "react-icons/fa";
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state)=>state.cartSlice.cartProducts)
    console.log(cart)
  return (
    <>
    <div className="py-16">
    <Container>
{/* heading part start */}
<Text
     texts={"Cart"}
     as={"h3"}
     className={"text-4xl font-bold pt-5 text-DDC font-dmSans pb-20"}/>
{/* heading part end */}
{/* product heading part start */}
    <div className="flex  py-5 bg-[#F5F5F3]">
        <div className="w-3/12 px-4">
<Text
    texts={"Product"}
    as={'p'}
    className={'font-bold font-dmSans text-base text-DDC'}/>
</div>
<div className="w-3/12 px-4">
<Text
    texts={"Price"}
    as={'p'} 
    className={'font-bold font-dmSans text-base text-DDC'}/>
</div>
<div className="w-3/12 px-4">
<Text 
    texts={"Quantity"}
    as={'p'} 
    className={'font-bold font-dmSans text-base text-DDC'}/>
</div>
<div className="w-3/12 px-4">
<Text 
    texts={"Total"}
    as={'p'} 
    className={'font-bold font-dmSans text-base text-DDC'}/>
</div>
</div>
{/* product heading part end */}
{/* product part start */}
    {
        cart.map((item)=>(
<div className="flex py-5 items-center border-2">

<div className="w-3/12 flex items-center gap-4 px-4">
<p>x</p>
<Image
    imgsrc={item.image} 
    imgalt={'item.title'} 
    className={'w-32'}/>

<Text 
    texts={item.title} 
    as={"h5"} 
    className={"text-base font-bold text-DDC font-dmSans"}/>
</div>

<div className="w-3/12 px-4">
<Text 
    texts={`$${item.price}`} 
    as={"h5"} 
    className={"text-xl font-bold text-DDC font-dmSans"}/>
</div>

<div 
className="w-3/12 px-4">
<div 
className="flex w-40 h-8 border-2 items-center justify-between">
<div 
className="py-1 px-5 text-base">
<Text 
    texts={"-"} 
    as={"p"} 
    className={"text-xl font-bold text-DDC font-dmSans"}/>
</div>
<div 
className="py-1 px-7">
<Text 
    texts={item.qtn} 
    as={"p"} 
    className={"text-xl font-bold text-DDC font-dmSans"}/>
</div>
<div className="py-1 px-5">
<Text 
    texts={"+"} 
    as={"p"} 
    className={"text-xl font-bold text-DDC font-dmSans"}/>
</div>
</div>
</div>

<div 
className="w-3/12 px-4">
<Text
    texts={`$${item.price * item.qtn}`}  
    as={"h5"} 
    className={"text-xl font-bold text-DDC font-dmSans"}/>
</div>
</div>
        ))
    }
        
{/* product part end */}
{/* size part start */}
    <div 
    className="w-full py-5 px-4 border-[0.5px] flex justify-between items-center">
    <div 
    className="flex justify-between items-center gap-3">

    
    <div className="flex w-48 h-10 border-2 items-center justify-between px-2 ">
    <Text 
    texts={"SIZE"} 
    as={"h5"} 
    className={"text-base text-mColor font-dmSans"}/>
    <FaSortDown />
    </div>





    <div className="">
    <Text 
        texts={"Apply coupon"} 
        as={"h5"} 
        className={"text-base font-bold text-DDC font-dmSans"}/>
    </div>
    </div>

    <div 
    className="">
    <Text  
        texts={"Update cart"} 
        as={"h5"} 
        className={"text-base font-bold text-DDC font-dmSans"}/>
    </div>
    </div>
{/* size part end */}
{/* cart totals part start */}
<div className="w-full  relative flex justify-end">
<div className="flex-none">
<Text 
    texts={"Cart totals"} 
    as={"h3"} 
    className={"text-xl font-bold text-DDC font-dmSans py-6"}/>
<div className="w-80 border-2">
<div className="flex border-b-2">
    <div className="w-40 border-r-2 py-2">
    <Text 
        texts={"Subtotal"} 
        as={"p"} 
        className={"text-base font-bold text-DDC font-dmSans px-3"}/>
    </div>
    <div className="w-40 py-2 text-center">
    <Text 
        texts={"389.99 $"} 
        as={"p"} 
        className={"text-base font-bold text-mColor font-dmSans px-3"}/>
    </div>
</div>
<div className="flex">
    <div className="w-40 border-r-2 py-2">
    <Text 
        texts={"Total"} 
        as={"p"} 
        className={"text-base font-bold text-DDC font-dmSans px-3"}/>
    </div>
    <div className="w-40 py-2 text-center">
    <Text 
        texts={"389.99 $"} 
        as={"p"} 
        className={"text-base font-bold text-DDC font-dmSans px-3"}/>
    </div>
</div>
</div>
<button className='py-4 px-9 bg-black text-white mt-8 mb-20 font-bold font-dmSans'>Proceed to Checkout</button>
</div>
</div>
{/* cart totals part end */}
    </Container>
    </div>
    </>
  )
}

export default Cart