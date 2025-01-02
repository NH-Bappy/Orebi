import React from 'react'
import Container from '../layer/Container'
import Text from '../layer/Text'
import { useSelector } from 'react-redux'
import { GoChevronRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const MyAccount = () => {
  const data=useSelector(state=>(state.Breadcrumbe.previousValue))
  return (
    <>
    <div className="py-20">
        <Container>
        <Text texts={"My Account"} as={"h2"} className={"text-4xl font-bold pt-5 font-dmSans text-DDC"}/>
          <Link to={data=="Home"?"/":`/${data}`}>
      <div className="flex  pb-20 pt-4 items-center">
        <p className='font-dmSans text-mColor font-medium'>{`${data}`}</p>
        <GoChevronRight className='font-dmSans text-mColor font-medium'/>
        <p className='font-dmSans text-mColor font-medium'>MyAccount</p>
      </div>
      </Link>
      <div className="flex w-full">
        <div className="w-2/12">
        <Text texts={"Dashboard"} as={"h4"} className={"border-b-2 pb-5 text-base font-semibold pt-5 font-dmSans text-DDC"}/>
        <Text texts={"Others"} as={"h4"} className={"border-b-2 pb-5 text-base font-semibold pt-5 font-dmSans text-mColor hover:text-DDC"}/>
        <Text texts={"Donwloads"} as={"h4"} className={"border-b-2 pb-5 text-base font-semibold pt-5 font-dmSans text-mColor hover:text-DDC"}/>
        <Text texts={"Addresses"} as={"h4"} className={"border-b-2 pb-5 text-base font-semibold pt-5 font-dmSans text-mColor hover:text-DDC"}/>
        <Text texts={"Account details"} as={"h4"} className={"border-b-2 pb-5 text-base font-semibold pt-5 font-dmSans text-mColor hover:text-DDC"}/>
        <Text texts={"Logout"} as={"h4"} className={"border-b-2 pb-5 text-base font-semibold pt-5 font-dmSans text-mColor hover:text-DDC"}/>
        </div>
        <div className="w-8/12 text-sm pl-16 font-semibold pt-5 font-dmSans text-mColor">
        <Text texts={"Hello admin (not admin? Log out)"} as={"h6"} className={"pb-8"}/>
        <Text texts={"From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."} as={"h6"} className={""}/>
        </div>
        


      </div>
      
        </Container>
    </div>
    </>
  )
}

export default MyAccount