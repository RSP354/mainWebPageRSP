 import serviceHeroPic from '../assets/servicesHero.png'
 import { FaHandshake } from "react-icons/fa";
 import { IoList } from "react-icons/io5";
import personalizacion from "../assets/personalizacionValor.png"
import experiencia from "../assets/experienciaValor.png"
import calidad from "../assets/calidadValor.jpg"
import seguimiento from "../assets/seguimientoValor.png"

import { useNavigate } from 'react-router-dom';

{/* precios imports */ }
 import { CheckCircle2 } from "lucide-react";
 import { pricingOptions } from "../constants/info";


   {/* dudas service faq material */}
 import { FaQuestionCircle } from 'react-icons/fa';
 import serviceFAQ from '../assets/faqservice.png';


const Servicios = () => {

  const navigateCT = useNavigate();

  const propuestaClick = () => {
    navigateCT('/propuesta');
  };


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
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700"
              onClick={() => window.open("https://wa.me/573002359289?text=Hola,%20quiero%20saber%20más%20de%20los%20servicios%20de%20RSP", "_blank")}
             >
            Contáctanos
            <FaHandshake  className='w-6 h-6 '/>
          </button>
         
          
          <button onClick={propuestaClick} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
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
              <div className={`p-10 border border-neutral-700 shadow-xl shadow-indigo-200 rounded-xl  ${option.title === 'Plus' ? 'bg-yellow-200' : 'bg-white'}`}>
                 <p className="text-4xl mb-8 ">
                  {option.title}
                   {option.title === "Plus"  && (<span className="bg-gradient-to-r
                    from-indigo-500 to-indigo-400 text-transparent font-semibold bg-clip-text text-lg sm:text-sm  md:text-lg
                   mb-4 ml-2">
                    (Mas Vendido)
                    </span>
                    )}
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
   
     {/* --------------  Servicios Adicionales ------------ */}
     
     <div className="flex flex-col items-start min-h-screen px-8 bg-[#0a0f2d] py-24 mt-60">
  <div className="max-w-lg text-left text-white">
    <h2 className="text-3xl font-bold mt-2">
      SERVICIOS ADICIONALES PARA TU EMPRESA
    </h2>
    <p className="text-gray-300 mt-3">
      Para promover el bienestar y el crecimiento de tu equipo, ponemos a tu disposición servicios enfocados en el fortalecimiento del desarrollo organizacional y el equilibrio emocional en el ámbito laboral.
    </p>
  </div>

  {/* Contenedor separado con margen superior */}
  <div className="relative max-w-7xl mx-auto mt-10 lg:mt-20">
    <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
      <div className="flex-1 px-6 py-8 lg:p-12 bg-gray-600">
        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
          Plan Ultimate
        </h3>
        <p className="mt-6 text-base text-gray-50 sm:text-lg">
        Un servicio integral que fusiona Capacitaciones y Desarrollo con Acompañamiento en Salud Mental en una organización. Este plan potencia la dirección estratégica y el desempeño del equipo con programas formativos personalizados y apoyo psicológico, generando un entorno laboral equilibrado y resiliente.
        </p>
        <div className="mt-8">
          <div className="flex items-center">
             
            <div className="flex-1 border-b-2 border-gray-200">
              <p className='text-white font-bold'>Incluye talleres de:</p>
              </div>
          </div>
          <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Liderazgo Humanizado y estratégico</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Comunicación afectiva  y efectiva</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Trabajo en equipo y resolución de conflictos</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Planes de Carrera y Sucesión</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Espacios de escucha psicológica para empleados</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Talleres de gestión del estrés y regulación emocional</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Desarrollo de Habilidades Blandas</p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="ml-3 text-white">Plan de bienestar laboral que reduce rotación y
              mejorar clima organizacional</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-gray-700">
        <p className="text-md leading-6 font-medium text-white ">
         Un Solo Pago, Beneficios Ilimitados
        </p>
      
        <div className="mt-6">
          <div className="rounded-md shadow">
            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
              Contratar
            </a>
          </div>
          <p className="text-gray-300 text-sm mt-3">
            100% garantizado
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

     {/* -----------Seccion FAQ en Servicios RSP ----------------- */}

     <div className="max-w-6xl mx-auto px-5 py-10 mt-36 ">
      {/* Título  */}
      <h1 className="text-center text-2xl md:text-3xl font-bold drop-shadow-lg mb-10 text-white ">
        ¿SU EMPRESA ENFRENTA ESTOS DESAFÍOS?
      </h1>

      {/* Contenedor principal */}

      <div className="min-h-[600px] flex flex-col md:flex-row items-stretch gap-14 mt-32">
        
        {/* Columna izquierda: Imagen   */}
        <div className="w-full md:w-1/2 flex">
          <img
            src={serviceFAQ}
            alt="Imagen descriptiva"
            className="w-full h-full object-cover object-center rounded-2xl shadow-2xl shadow-gray-800"
          />
        </div>

        {/* Columna derecha: Preguntas */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
        
          {/* Pregunta 1 */}
          <div className="flex items-start mb-6">
            <FaQuestionCircle className="text-4xl mr-3 flex-shrink-0" fill='white' />
            <div>
              <strong className="block text-lg text-yellow-50 font-bold drop-shadow-lg">
                ¿Su empresa tiene alta rotación de personal y altos costos por reemplazos?
              </strong>
              <p className="mt-1 text-sm text-gray-600/75 font-medium drop-shadow-sm">
                Implementar estrategias de retención y programas de incentivos.
              </p>
            </div>
          </div>

          {/* Pregunta 2 */}
          <div className="flex items-start mb-6">
            <FaQuestionCircle className="text-4xl mr-3 flex-shrink-0"   fill='white'/>
            <div>
              <strong className="block text-lg text-yellow-50 font-bold drop-shadow-lg">
                ¿Invierten en capacitación, pero no ven resultados?
              </strong>
              <p className="mt-1 text-sm text-gray-600/75 font-medium drop-shadow-sm">
                Optimizar métodos de formación y seguimiento del rendimiento.
              </p>
            </div>
          </div>

          {/* Pregunta 3 */}
          <div className="flex items-start mb-6">
            <FaQuestionCircle className="text-4xl mr-3 flex-shrink-0"  fill='white'/>
            <div>
              <strong className="block text-lg text-yellow-50 font-bold drop-shadow-lg">
                ¿Se les dificulta encontrar talento que encaje con la cultura organizacional?
              </strong>
              <p className="mt-1 text-sm text-gray-600/75 font-medium drop-shadow-sm">
                Revisar procesos de selección y ajustar estrategias de reclutamiento.
              </p>
            </div>
          </div>

          {/* Pregunta 4 */}
          <div className="flex items-start mb-6">
            <FaQuestionCircle className="text-4xl mr-3 flex-shrink-0" fill='white' />
            <div>
              <strong className="block text-lg text-yellow-50 font-bold drop-shadow-lg">
                ¿Su equipo de trabajo está desmotivado y afecta la productividad de la empresa?
              </strong>
              <p className="mt-1 text-sm text-gray-600/75 font-medium drop-shadow-sm">
                Implementar programas de motivación y mejorar la comunicación interna.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Letreo a la derecha */}
      <div className="text-right mt-5">
        <strong className="text-xl text-white font-bold drop-shadow-lg">¡Nosotros podemos apoyarlos!</strong>
      </div>
    </div>

   </>
  )
}

export default Servicios