
import React, { useRef } from 'react'
import { FaUser,FaCaretDown } from "react-icons/fa";
import Flex from '../layer/Flex';
import Menu from '../layer/Menu';
import { Link } from 'react-router-dom';

const Login = () => {
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
<div onClick={handleDrop} className='relative group: z-10'>
    <Flex className={'gap-1'}>
    <FaUser/>
    <FaCaretDown />
    </Flex>

        <div className="mt-3 w-40 bg-white hidden absolute right-0 text-center rounded" ref={dropRef}>
        <ul>
        <Link to={"/MyAccount"}>
        <Menu menuName={'My Account'} className={'my-1 hover:bg-black hover:text-white hover:font-bold py-2 border-b-2'}/>
        </Link>
        <Link to={'Checkout'}>
        <Menu menuName={'Log Out'} className={'my-1 hover:bg-black hover:text-white hover:font-bold py-2'}/>
        </Link>
        
        </ul>
        </div>
    </div>
</>
    
    

  )
}

export default Login
