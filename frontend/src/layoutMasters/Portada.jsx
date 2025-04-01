import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterCT from '../components/FooterRsp'


const Portada = () => {
  return (
    <>
     <Navbar />
      
     <Outlet />
     
     <FooterCT />
    </>
  )
}

export default Portada