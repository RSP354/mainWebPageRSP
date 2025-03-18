import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Portada from './layoutMasters/Portada'

import Home from './paginas/Home';
import Servicios from './paginas/Servicios';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Portada />}>
              <Route index element={<Home />} />
              <Route path='/serviciosRsp' element={<Servicios />} />

         </Route>




      </Routes>
    </BrowserRouter> 
  )
}

export default App