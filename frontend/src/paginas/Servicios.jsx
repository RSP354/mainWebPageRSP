 import serviceHeroPic from '../assets/servicesHero.png'
 import { FaHandshake } from "react-icons/fa";
 import { IoList } from "react-icons/io5";






const Servicios = () => {
  return (
   <>
   
   <div  >
  <div className="flex  md:h-[600px] xl:h-screen  items-center justify-center bg-gray-900 p-5">
    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:px-10  w-full max-w-7xl ">
       <div className="flex justify-center">
        <img src={serviceHeroPic} alt="" className="xl:w-[28rem] xl:h-[28rem] lg:w-96 lg:h-96 w-72 h-72 rounded-full " />
      </div>
      
      <div className='mt-0 md:mt-20 lg:mt-5'>
        <h1 className="mb-2 text-3xl md:text-xl lg:text-2xl  xl:text-3xl font-bold   text-white">Impulsa tu equipo con un <span className="text-green-500">Profesional</span> {" "} en Gestión Humana de alto nivel!</h1>
        <p className="mb-6 text-white tracking-tighter mt-5  text-base  md:text-sm lg:text-base xl:text-lg"> En RSP, facilitamos la búsqueda y selección del talento ideal para tu empresa. A través de un Especialista en Gestión Humana, ofrecemos un servicio estratégico para identificar y atraer a los mejores candidatos, asegurando que cada puesto clave sea ocupado por profesionales altamente capacitados. Con un enfoque alineado a la cultura y necesidades de tu organización, garantizamos procesos de reclutamiento eficientes que impulsan el crecimiento y el éxito de tu equipo. </p>
        <div className="flex justify-center space-x-5">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
            Contáctanos
            <FaHandshake  className='w-6 h-6 '/>
          </button>
          
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
             Nuestro Proceso
             <IoList  className='w-9 h-9  xl:w-6 xl:h-6'/>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

    
   <div className="mt-20 bg-gray-100">
      
      <h1>
        hola
      </h1>

        <p>gente visitante!</p>
    
   </div>
   </>
  )
}

export default Servicios