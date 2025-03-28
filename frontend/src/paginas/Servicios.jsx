 import serviceHeroPic from '../assets/servicesHero.png'
 import { FaHandshake } from "react-icons/fa";
 import { IoList } from "react-icons/io5";
import personalizacion from "../assets/personalizacionValor.png"
import experiencia from "../assets/experienciaValor.png"
import calidad from "../assets/calidadValor.jpg"
import seguimiento from "../assets/seguimientoValor.png"

{/* precios imports */ }
 import { CheckCircle2 } from "lucide-react";
 import { pricingOptions } from "../constants/info";






const Servicios = () => {
  return (
   <>
   
    {/*  Seccion de presentacion */}
    
   <div  >
  <div className="flex  md:h-[560px] xl:h-screen  items-center justify-center bg-green-800 p-5">
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

      {/* Seccion Propuesta de valor de porque escoger RSP */} 

     
          
      <div className="text-center p-8  bg-white">

     <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-20 lg:mt-36">
        ¿Por qué elegirnos?
    </h2>
     
    

     <div className='mt-28 lg:mt-36'>

    <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={personalizacion} alt="gem" className="inline-block rounded-3xl shadow-2xl border border-gray-300 shadow-indigo-200  w-[400px] h-[240px]" />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                 Personalización
            </h3>
            <p className="sm:text-lg md:text-base  lg:text-lg mt-6">
            Diseñamos y adaptamos cada proceso a las necesidades únicas de tu empresa y al perfil ideal que buscas,
             garantizando soluciones a medida, ágiles y con resultados excepcionales.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20  text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={experiencia} alt="project members" className="inline-block rounded-3xl  border border-gray-300 shadow-indigo-300  shadow-2xl w-[400px] h-[240px]" />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Experiencia
            </h3>
            <p className="sm:text-lg md:text-sm  lg:text-lg  mt-6 ">
            Contamos con amplia experiencia en el sector de gestión humana, lo que nos permite entender a fondo tus requerimientos y anticiparnos a las necesidades específicas de tu organización.
             Hemos desarrollado un enfoque integral y personalizado, optimizando procesos de selección,
            capacitación y retención del talento mediante estrategias innovadoras y adaptadas a cada contexto.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20   text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={calidad} alt="editor" className="inline-block rounded-3xl shadow-lg shadow-indigo-200 border border-gray-300  w-[400px] h-[240px]" />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Calidad
            </h3>
            <p className="sm:text-lg  md:text-sm lg:text-lg mt-6">
            Priorizamos la excelencia en cada proceso de selección, evaluando minuciosamente a candidatos que destacan por su competencia y compatibilidad cultural.
            Nuestro riguroso método garantiza que cada incorporación aporte valor y eleve el estándar de calidad en tu organización.
            Con nuestro enfoque, aseguramos un impacto positivo y un crecimiento sostenible para tu empresa.
            </p>
        </div>
    </div>
   
    <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={seguimiento} alt="bulk editing" className="inline-block rounded-3xl shadow-2xl shadow-indigo-200 border border-gray-300 w-[400px] h-[240px]" />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Seguimiento
            </h3>
            <p className="sm:text-lg md:text-sm lg:text-lg mt-6">
            Te apoyamos en cada fase de la integración de tus nuevos talentos, asegurando una transición sin contratiempos.
            A través de un seguimiento continuo, facilitamos su adaptación a la cultura y dinámica de tu empresa.
            Ofrecemos herramientas de retroalimentación y coaching para acelerar su desempeño y compromiso.
            Nuestro acompañamiento fortalece la retención y consolida un equipo alineado con tus objetivos.
            </p>
        </div>
    </div>

     </div>

</div>
   
 {/* -------------- Seccion precios y servicios RSP -------------- */}
    
     <div className="mt-24 md:mt-32  lg:mt-40 px-6  mx-auto max-w-7xl  ">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8
        tracking-wider text-white drop-shadow-md">
          Nuestros Planes
          </h2>
            <p className='text-center my-10 tracking-wider xl:text-lg text-gray-950 font-bold drop-shadow-xl text-shadowCT '> Ofrecemos tres niveles de servicio adaptados a tus
            necesidades y presupuesto</p>

          <div className="flex flex-wrap mt-16  ">
          {pricingOptions.map((option, index) => (
           <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className={`p-10 border border-neutral-700 rounded-xl  ${option.title === 'Plus' ? 'bg-yellow-200' : 'bg-white'}`}>
                 <p className="text-4xl mb-8 ">
                  {option.title}
                   {option.title === "Plus"  && (<span className="bg-gradient-to-r
                    from-indigo-500 to-indigo-400 text-transparent font-semibold bg-clip-text text-lg sm:text-sm  md:text-lg
                   mb-4 ml-2">
                    (Mas Vendido)
                    </span>
                    )}
                </p>
                <p className="mb-8">
                   <span className="text-5xl mt-6 mr-1">{option.price}</span>
                    <span className="hidden md:inline text-neutral-600 tracking-tight text-sm xl:text-base">COP</span>
                </p>
                   <p className='font-medium border-b-2 border-b-gray-400 '> Incluye {option.title === "Plus" ? "Standard, más" : option.title === "Premium" ? "Plus, más" : ""}:</p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className={` ${option.title === 'Premium' ? 'mt-5' :  option.title === 'Plus' ? 'mt-10 lg:mt-12 xl:mt-10' : 'mt-9'}  flex items-center`}>
                       <CheckCircle2  fill='green'  stroke='white'/>
                       <span className={`ml-2 ${option.title === 'Premium' ? 'text-sm' : 'text-base'} `} >{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className={`inline-flex justify-center items-center text-center w-full h-12 p-5 ${option.title === 'Premium' ? 'mt-10' : 'mt-20'} traciking-tight text-xl 
                border border-orange-900 rounded-lg  ${option.title === 'Plus' ? 'bg-white  hover:bg-green-300 ' : ' bg-green-300 hover:bg-white '}  transition duration-200`}>
                  Contratar
                  </a>
            </div>
            </div>
          ))}
          </div>
        </div>
   

     
 



   </>
  )
}

export default Servicios