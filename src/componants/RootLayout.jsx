import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>  {/* Nav,Category and Footer er mazkhane content lekhar jonno outlet use kori  */}
    <Footer/>
    </>
  )
}

export default RootLayout