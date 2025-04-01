import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Portada from './layoutMasters/Portada'

import Home from './paginas/Home';
import Servicios from './paginas/Servicios';
import Nosotros from './paginas/Nosotros';
import Contactanos from './paginas/Contactanos';


import Propuesta from  './paginas/Propuesta';
import TYC from './paginas/TYC';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Portada />}>
              <Route index element={<Home />} />
              <Route path='/serviciosRsp' element={<Servicios />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contactanos' element={<Contactanos />} />

              <Route path='/propuesta' element={<Propuesta />} />
              <Route path='/terminosRsp' element={<TYC />} />

         </Route>

           


      </Routes>
    </BrowserRouter> 
  )
}

export default App