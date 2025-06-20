import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'

const Checkout = () => {
  return (
    <>
    <div className="py-20">
        <Container>
            <Text texts={"Checkout"} as={"h1"} className={"text-4xl font-bold pt-5 font-dmSans pb-20 text-DDC"}/>
            <p className='font-dmSans text-mHC text-base py-12'><span className='text-mColor'>Have a coupon?</span>Click here to enter your code</p>
            <Text texts={"Billing Details"} as={"h2"} className={"text-4xl font-bold pt-5 font-dmSans pb-20 text-DDC"}
            />
            <div className="flex gap-9">
            <div className="border-b-2">
            <p className='py-2 font-bold font-dmSans text-base'>First Name *</p>
            <input type="text" placeholder='First Name' className='border-none w-80'/>
            </div>

            <div className="border-b-2">
            <p className='py-2 font-bold font-dmSans text-base'>Last Name *</p>
            <input type="text" placeholder='Lirst Name' className='border-none w-80'/>
            </div>
            </div>

            <div className="border-b-2 pt-8 w-[680px]">
            <p className='py-2 font-bold font-dmSans text-base'>Companye Name (optional)</p>
            <input type="text" placeholder='Company Name' className='border-none w-[640px]'/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Checkout