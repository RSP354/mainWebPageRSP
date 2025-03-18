import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterCT from '../components/FooterRsp'


const Portada = () => {
  return (
    <>
     <Navbar />
     <div className='pt-20 px-6 '>
     <Outlet />
        </div>
     <FooterCT />
    </>
  )
}

export default Portada