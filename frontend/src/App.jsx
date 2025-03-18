import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import FooterCT from './components/FooterRsp'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='pt-20 px-6 '>
     < Home  /> 
        </div>
        <FooterCT />
     </>
  
     
  )
}

export default App