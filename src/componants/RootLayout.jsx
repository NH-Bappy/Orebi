import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Category from './Category'

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