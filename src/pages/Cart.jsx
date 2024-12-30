import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'
import Image from '../layer/Image'
import { FaSortDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { qtnDecrease, qtnIncrease, removecart } from '../redux/slices/cartSlices';


const Cart = () => {
    const cart = useSelector((state)=>state.cartSlice.cartProducts)
    const dispatch  = useDispatch()
    const handeleRemove = (item)=>{
        dispatch(removecart(item))
    }
    const productAdd = (item)=>{
        dispatch(qtnIncrease(item))
    }
    const productRemove = (item)=>{
        dispatch(qtnDecrease(item))
    }
    const Total = cart.reduce((total, item) => total + item.price * item.qtn, 0);


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
<button onClick={()=>handeleRemove(item)}><RxCross2 /></button>
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
<div className="flex w-36 h-8 border-2 items-center">
<button className='w-12 text-xl font-bold text-DDC font-dmSans' onClick={()=>productRemove(item)}>-</button>
<Text 
    texts={item.qtn} 
    as={"p"} 
    className={"w-12 text-xl font-bold text-DDC font-dmSans flex items-center justify-center"}/>
<button className={"w-12 text-xl font-bold text-DDC font-dmSans"} onClick={()=>productAdd(item)}>+</button>
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
    <div className="w-full py-5 px-4 border-[0.5px] flex justify-between items-center">
    <div className="flex justify-between items-center gap-3">
    <div className="flex w-48 h-10 border-2 items-center justify-between px-2 ">
    <Text 
    texts={"SIZE"} 
    as={"h5"} 
    className={"text-base text-mColor font-dmSans"}/>
    <FaSortDown />
    </div>
    <Text 
        texts={"Apply coupon"} 
        as={"h5"} 
        className={"text-base font-bold text-DDC font-dmSans"}/>
    </div>
    <Text  
        texts={"Update cart"} 
        as={"h5"} 
        className={"text-base font-bold text-DDC font-dmSans"}/>
    </div>
{/* size part end */}
{/* cart totals part start */}


<div className="w-full  relative flex justify-end">
<div className="flex-none">
<Text 
    texts={"Cart totals"} 
    as={"h3"} 
    className={"text-xl font-bold text-DDC font-dmSans py-6 flex justify-end"}/>

<div className="w-96 border-2">

<div className="flex border-b-2">
    <Text 
        texts={"Subtotal"} 
        as={"p"} 
        className={"w-36 border-r-2 py-2 text-base font-bold text-DDC font-dmSans px-3"}/>
    <Text 
        texts={Total} 
        as={"p"} 
        className={"w-60 py-2 text-base font-bold text-mColor font-dmSans px-3"}/>
</div>

<div className="flex">
    <Text 
        texts={"Total"} 
        as={"p"} 
        className={"w-36 border-r-2 py-2 text-base font-bold text-DDC font-dmSans px-3"}/>
    <Text 
        texts={Total} 
        as={"p"} 
        className={"w-60 py-2 text-base font-bold text-DDC font-dmSans px-3"}/>
</div>
</div>
<div className="flex justify-end">
<button className='py-4 px-9 bg-black text-white mt-10 mb-20 font-bold font-dmSans'>Proceed to Checkout</button>
</div>
</div>
</div>


{/* cart totals part end */}
    </Container>
    </div>
    </>
  )
}

export default Cart