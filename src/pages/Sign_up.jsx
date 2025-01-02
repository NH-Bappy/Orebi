import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'
import { GoChevronRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Sign_up = () => {
  const data=useSelector(state=>(state.Breadcrumbe.previousValue))
  return (
    <>
    <div className="py-20">
    <Container>
        <Text texts={"Sign up"} as={"h3"} className={"text-4xl font-bold pt-5 font-dmSans text-DDC"}/>
                  <Link to={data=="Home"?"/":`/${data}`}>
      <div className="flex  pb-20 pt-4 items-center">
        <p className='font-dmSans text-mColor font-medium'>{`${data}`}</p>
        <GoChevronRight className='font-dmSans text-mColor font-medium'/>
        <p className='font-dmSans text-mColor font-medium'>Sign_up</p>
      </div>
      </Link>
      <div className="w-full border-b-2 ">
      <Text texts={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} as={"h3"} className={"w-6/12 text-sm font-semibold pt-5 font-dmSans text-mColor pb-20"}/>
      </div>
      <Text texts={"Your Personal Details"} as={"h3"} className={"text-3xl font-semibold pt-14 font-dmSans text-DDC"}/>
      <div className="flex w-full pt-16 border-b-2 pb-20">
      <div className="w-6/12">
      <div className="w-6/12 border-b-2">
    <Text texts={"First Name"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="text" placeholder='First Name'  className='text-sm w-full py-1'/>
    </div>

    <div className="w-6/12 border-b-2 pt-6">
    <Text texts={"Email"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="email" placeholder='company@domain.com'  className='text-sm w-full py-1'/>
    </div>
      </div>
      <div className="w-6/12">
      <div className="w-6/12 border-b-2">
    <Text texts={"Last Name"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="text" placeholder='First Name'  className='text-sm w-full py-1'/>
    </div>

    <div className="w-6/12 border-b-2 pt-6">
    <Text texts={"Telephone"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="number" placeholder='Your phone number'  className='text-sm w-full py-1'/>
    </div>
      </div>
      </div>

      <Text texts={"New Customer"} as={"h3"} className={"text-3xl font-semibold pt-14 font-dmSans text-DDC"}/>
      <div className="flex w-full pt-16 border-b-2 pb-20">
      <div className="w-6/12">
      <div className="w-6/12 border-b-2">
    <Text texts={"Address 1"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="text" placeholder='4279 Zboncak Port Suite 6212'  className='text-sm w-full py-1'/>
    </div>

    <div className="w-6/12 border-b-2 pt-6">
    <Text texts={"City"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="tel" placeholder='Your city'  className='text-sm w-full py-1'/>
    </div>

    <div className="w-6/12 border-b-2 pt-6">
    <Text texts={"Division"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="search" placeholder='Please select'  className='text-sm w-full py-1'/>
    </div>
      </div>
      <div className="w-6/12">
      <div className="w-6/12 border-b-2">
    <Text texts={"Address 2"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="text" placeholder='-'  className='text-sm w-full py-1'/>
    </div>

    <div className="w-6/12 border-b-2 pt-6">
    <Text texts={"Post Code"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="number" placeholder='05228'  className='text-sm w-full py-1'/>
    </div>

    <div className="w-6/12 border-b-2 pt-6">
    <Text texts={"District"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="url" placeholder='Please select'  className='text-sm w-full py-1'/>
    </div>
      </div>
      </div>

      <Text texts={"Your Password"} as={"h3"} className={"text-3xl font-semibold pt-14 font-dmSans text-DDC"}/>
      <div className="flex w-full pt-16 border-b-2 pb-20">
      <div className="w-6/12">
      <div className="w-6/12 border-b-2">
    <Text texts={"Password"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="Password" placeholder='Password'  className='text-sm w-full py-1'/>
    </div>
      </div>

      <div className="w-6/12">
      <div className="w-6/12 border-b-2">
    <Text texts={"Repeat Password"} as={"h5"} className={"text-base font-semibold font-dmSans text-DDC"}/>
    <input type="password" placeholder='Repeat Password'  className='text-sm w-full py-1'/>
    </div>
      </div>
      </div>
      <div className="flex gap-3 pt-28">
      <input type="checkbox"/>
    <Text texts={"I have read and agree to the Privacy Policy"} as={"h5"} className={"text-base font-semibold font-dmSans text-mColor"}/>
    </div>

      <div className="flex gap-3 pt-12">
    <Text texts={"Subscribe Newsletter"} as={"h5"} className={"text-base font-semibold font-dmSans text-mColor"}/>
    <div className="flex gap-1">
    <input type="checkbox"/>
    <Text texts={"Yes"} as={"h5"} className={"text-base font-semibold font-dmSans text-mColor"}/>
    </div>
    <div className="flex gap-1">
    <input type="checkbox"/>
    <Text texts={"No"} as={"h5"} className={"text-base font-semibold font-dmSans text-mColor"}/>
    </div>
    </div>
    <button className='py-2 px-14 border-2 text-white bg-mHC font-dmSans font-semibold mt-10'>Add to Cart</button>
    </Container>
</div>
</>
  )
}

export default Sign_up