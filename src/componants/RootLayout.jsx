import React from 'react'
import Nav from './Nav'
import Category from './Category'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Nav/>
    <Category/> 
    <Outlet/>  {/* Nav,Category and Footer er mazkhane content lekhar jonno outlet use kori  */}
    <Footer/>
    </>
  )
}

export default RootLayout