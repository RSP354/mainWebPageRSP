import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterCT from '../components/FooterRsp'


const Portada = () => {
  return (
    <>
     <div className='overflow-clip' >
    <Navbar />
   
    
      <Outlet />
      
      <FooterCT />   
      </div>
    </>
  )
}

export default Portada