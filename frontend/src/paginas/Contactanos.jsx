import contacto from '../assets/contactus.jpg'
import {motion} from "framer-motion";


const Contactanos = () => {
  return (
    <>
     <motion.div
       initial={{ opacity: 0, x: -100 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1, delay: 0.2 }}
       viewport={{ once: true, amount: 0.1 }}   
     
     className="container mx-auto px-4 mt-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
    
    
    <div className="relative min-h-[400px] lg:h-full xl:h-screen">
      <img
        src={contacto}
        alt="Imagen de contacto"
        className="w-full h-full object-cover"
      />
     
      <div className="absolute inset-0 flex items-end p-4">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-md shadow-md w-full max-w-md">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-sm font-semibold text-gray-700">Correo</h3>
              <p className="text-xs text-gray-600">
                gestionhumana@reclutamiento<br />yseleccionrsp.com
              </p>
            </div>
            <div className="mb-2 sm:mb-0">
              <h3 className="text-sm font-semibold text-gray-700">Teléfono</h3>
              <p className="text-xs text-gray-600">+57 321 614 3596</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Dirección</h3>
              <p className="text-xs text-gray-600">Cl 56 Sur #36-11 Sabaneta</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="flex flex-col justify-center p-8 bg-gray-100">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Comunícate con nosotros</h2>
      <h3 className="text-xl text-gray-700 mb-6">
        Tanto si estás contratando como si estás buscando empleo, estamos aquí para escucharte.
      </h3>
      <div >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScGu-1xgWc9ExntAr8DWrkU_lkD2xBwlSRAMDLZC87MbCk8uA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mt-8 w-full items-center justify-center border border-transparent text-base py-3 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
        >
          Escríbenos
        </a>
      </div>
      
    </div>

  </div>
</motion.div>

          

    

    </>
  )
}

export default Contactanos