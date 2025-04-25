import nosotrosHero from '../assets/nosotrosHero.png'
import aboutVideo from "../assets/aboutusVideo.mp4";
import { useRef } from "react";
import {delay, motion} from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";

import angelPic from '../assets/fotosNosotros/angl.png'
import yulyPic from '../assets/fotosNosotros/yl.png'
import andresPic from '../assets/fotosNosotros/and.png'
import bryanPic from '../assets/fotosNosotros/br.png'
import taniaPic from '../assets/fotosNosotros/tn.png'
import natalyPic from '../assets/fotosNosotros/nt.png'


 {/* Manejo del motion al lado del video */}
   const containerVariants = {
     hidden: { opacity: 0, x: 100},
     visible: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.6,
            staggerChildren: 0.5,
         }
     }
   }
   
   const childVariants = {
      hidden: { opacity: 0, x: 100},
      visible: { opacity: 1, x: 0, transition: { duration: 0.6}}
   }


   {/*Manejo del motion de objectives */}
       const containerVariantsObjectives = {
          hidden: { opacity: 0, y: 20},
          visible: {
            opacity: 1,
            y: 0,
            transition: {
               duration: 1,
               staggerChildren: 0.5,
            },
          },
       }  
       
       const itemVariantsObjectives = {
          hidden: {
             opacity: 0, y: 20
           },
            visible: {
              opacity: 1, y: 0, transition: { duration: 0.5 },
            }
          }
       




const Nosotros = () => {

   {/* Funcion del video */}
  const aboutVideoRef = useRef(null);

  
      
  return (
    <>
   
        <div>
      <div
        style={{ backgroundImage: `url(${nosotrosHero})` }}
        className="h-[265px] sm:h-[350px] md:h-[470px]  lg:h-[560px] xl:h-[800px] 2xl:h-screen w-screen
                   bg-cover bg-center  bg-no-repeat 
                   flex items-center text-white
                  px-6 sm:px-5 md:px-14 py-12 md:py-16"
      >
        {/* Limita el ancho del contenido y centra verticalmente */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8}}
          whileInView = {{ opacity: 1, scale: 1}}
          transition={{ duration: 0.8}}
          viewport={{ once: true, amount: 0.3 }}
        
        className="max-w-[600px]">
          <h1 className="text-sm sm:text-base md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-md mb-4 leading-tight text-white">
          Conectamos Talento  <br className="block sm:hidden md:block" />
          y Oportunidades
          </h1>
          <p className="mb-8   font-semibold drop-shadow-lg tracking-tighter text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg ">
          Impulsamos el crecimiento de empresas y profesionales <br className="hidden sm:block" />
           a través de procesos de selección innovadores y personalizados
          </p>
        </motion.div>
      </div>
    </div>


             {/* ------------ Seccion de nosotros con video -------------- */ }
     <motion.div
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0 , y: -100}}
         transition={{ duration: 1}}
         viewport={{ once: true }}
     >
        <h2 className='text-center  text-3xl  sm:text-5xl text-white font-semibold drop-shadow-lg
        mt-36 xl:mt-40 '> Nuestra Historia</h2>
   </motion.div>

        <div className="px-4  lg:px-12 max-w-screen-2xl mx-auto pt-40 ">
              
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-24 ">
                  
                  <div>
                    
                  <motion.video
                      ref={(el) => {
                          if (el) {
                              el.volume = 0.13; //  se configura el  volumen
                              aboutVideoRef.current = el;
                              aboutVideoRef.current.dataset.pausedByUser = "false"; 
                          }
                      }}
                      controls
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                      className="rounded-2xl border border-gray-900 shadow-2xl shadow-indigo-50"
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      onViewportEnter={() => {
                          if (aboutVideoRef.current?.dataset.pausedByUser === "true") return;  
                          aboutVideoRef.current?.play(); 
                      }}
                      onViewportLeave={() => {
                          if (aboutVideoRef.current && !aboutVideoRef.current.paused) {
                            aboutVideoRef.current.dataset.autoPaused = "true"; 
                            aboutVideoRef.current.pause();
                          }
                      }}
                      onPause={() => {
                          if (aboutVideoRef.current && aboutVideoRef.current.dataset.autoPaused !== "true") {
                            aboutVideoRef.current.dataset.pausedByUser = "true"; 
                          }
                          aboutVideoRef.current.dataset.autoPaused = "false"; 
                      }}
                      onPlay={() => {
                          if (aboutVideoRef.current) {
                            aboutVideoRef.current.dataset.pausedByUser = "false"; 
                          }
                      }}
                  >
                      <source src={aboutVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                  </motion.video>
                  
                   
                    
                  </div>   


                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}   
                  className="md:w-4/5 xl:w-3/5 mx-auto ">
                  <motion.h2  variants={childVariants}
                   className="text-4xl md:tlusMD  lg:text-xl  xl:text-4xl    text-left  tracking-wide md:tracking-tighter lg:tracking-normal xl:tracking-wider text-indigo-50 drop-shadow-md font-bold mb-4 md:mb-2 lg:mb-4 md:w-full ">Impulsamos el Futuro Empresarial a través del Potencial Humano</motion.h2>
                       <motion.p variants={childVariants}
                        className="text-base md:text-xs lg:text-sm xl:text-base  text-gray-800 mb-8 md:mb-3 lg:mb-6 xl:mb-8 font-medium text-justify md:tracking-tighter lg:tracking-normal">En RSP Reclutamiento y Selección de Personal, nos especializamos en conectar empresas con el mejor talento. Con años de experiencia y un enfoque innovador, hemos ayudado a transformar equipos y potenciar carreras profesionales</motion.p>
                       


                       <motion.h3 variants={childVariants}  className="text-2xl md:text-sm  lg:text-lg  xl:text-2xl  text-center text-indigo-50  font-semibold mb-5  ">
                          Nuestros Pilares Fundamentales
                       </motion.h3>
  


                          {/* Sección de Valores en la misma fila */}
  <motion.div  variants={childVariants}
    className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-5   xl:gap-4  ">
    {/* Integridad */}
    <div className="flex flex-col items-center">
      <div className="bg-indigo-500 text-white p-4 md:p-2 xl:p-4 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
      </div>
      <h3 className="mt-2 text-xl md:text-sm  xl:text-xl font-semibold">Integridad</h3>
      <p className="text-gray-700 text-sm md:text-xs xl:text-sm text-center">
        Compromiso con la ética y la transparencia.
      </p>
    </div>

    {/* Innovación */}
    <div className="flex flex-col items-center">
      <div className="bg-indigo-500 text-white p-4 md:p-2 xl:p-4 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
      </div>
      <h3 className="mt-2 text-xl md:text-sm  xl:text-xl font-semibold">Innovación</h3>
      <p className="text-gray-700 text-sm md:text-xs xl:text-sm  text-center">
        Herramientas modernas y procesos adaptados.
      </p>
    </div>

    {/* Calidad */}
    <div className="flex flex-col items-center">
      <div className="bg-indigo-500 text-white p-4 md:p-2 xl:p-4 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
      </div>
      <h3 className="mt-2 text-xl  md:text-sm xl:text-xl font-semibold">Calidad</h3>
      <p className="text-gray-700 text-sm md:text-xs xl:text-sm text-center">
        Enfoque personalizado para cada candidato.
      </p>
    </div>

    {/* Colaboración */}
    <div className="flex flex-col items-center md:hidden  lg:flex ">
      <div className="bg-indigo-500 text-white p-4  md:p-2 xl:p-4 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
      </div>
      <h3 className="mt-2 text-xl md:text-sm  xl:text-xl font-semibold">Colaboración</h3>
      <p className="text-gray-700 text-sm  md:text-xs xl:text-sm text-center">
        Trabajo cercano y colaborativo con clientes.
      </p>
    </div>
  </motion.div>
    </motion.div>
    </div>
    </div>

      {/* ------------ SECCION DE OBJETIVOS --------------- */}

      <div className="bg-gray-700 p-4 mt-40 xl:mt-56">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}

       className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
       <TbTargetArrow className='w-9 h-9' />
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Nuestros Objetivos</h2>
      <p className="text-gray-300">Impulsamos logros al unir talentos excepcionales con desafíos de alto impacto</p>
    </motion.div>
    
     {/* Container de datos de objectivos */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariantsObjectives}
      viewport={{ once: true, amount: 0.2}}
    className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <motion.div 
         variants={itemVariantsObjectives}
        className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/200008/human-resources-search.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Selección Precisa</h5>
            <p className="text-gray-300">Identificamos a los candidatos ideales que maximizan el rendimiento de tu empresa.</p>
          </div>
        </motion.div>
      </div>

      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <motion.div 
         variants={itemVariantsObjectives}
        className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/213566/finances-pie-chart.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Ahorro de costos</h5>
            <p className="text-gray-300">Reducimos hasta un 50% los gastos de contratación al evitar procesos fallidos.</p>
          </div>
        </motion.div>
      </div>

      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <motion.div
       variants={itemVariantsObjectives}
        className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/118511/clock.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Procesos Eficientes </h5>
            <p className="text-gray-300 tracking-tight text-sm  xl:text-base">Optimizamos cada etapa del proceso de reclutamiento mediante metodologías ágiles y tecnologías avanzadas, garantizando tiempos de respuesta rápidos.</p>
          </div>
        </motion.div>
      </div>

      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <motion.div
         variants={itemVariantsObjectives}
         className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/65353/strongbox.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Confidencialidad</h5>
            <p className="text-gray-300">Procesos discretos para búsquedas estratégicas o reemplazos sensibles, con acuerdos de privacidad.</p>
          </div>
        </motion.div>
      </div>

    </motion.div>
  </div>
</div>


     {/* ------------ Seccion de equipos  -------------- */}

  <div className="py-6 bg-green-100 text-gray-800 mt-56 mx-7 rounded-3xl">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-7 sm:p-10">
		
    <motion.div 
     initial={{ opacity: 0, scale: 0.8}}
     whileInView = {{ opacity: 1, scale: 1}}
     transition={{ duration: 0.8}}
     viewport={{ once: true, amount: 0.3 }}
    className='space-y-8 p-8 tracking-tighter'>
    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Nuestro equipo</h1>
		<p className="max-w-2xl text-center text-gray-600">En RSP reclutamiento y selección de personal, nuestro grupo es el pilar fundamental que impulsa el éxito de cada proyecto y el crecimiento de nuestros clientes. Estamos conformados por un grupo de profesionales apasionados y comprometidos, con amplia experiencia en la identificación y captación de talento.</p>                
    </motion.div>
   
		
    <div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
      <div className='self-center mb-4 bg-gray-500  rounded-full flex-shrink-0 bg-cover bg-center  w-24 h-24'>
        <img src={yulyPic} alt="" className="relative top-[0.15rem] left-[0.01rem]"  />
        </div>               
				<p className="text-xl font-semibold leading-tight">Yuleysy Betancur</p>
				<p className="text-gray-600">Psicológa</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
      <div className='self-center mb-4 bg-gray-500  rounded-full flex-shrink-0 bg-cover bg-center  w-24 h-24'>
        <img src={natalyPic} alt="" className="relative top-[0.12rem] left-[0.142rem]"  />
        </div>
				<p className="text-xl font-semibold leading-tight">Nataly Jaramillo</p>
				<p className="text-gray-600">Psicológa</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<div className='self-center mb-4 bg-gray-500  rounded-full flex-shrink-0 bg-cover bg-center  w-24 h-24'>
        <img src={andresPic} alt="" className="relative right-[0.2rem]"  />
        </div>
				<p className="text-xl font-semibold leading-tight">Andres Galvan</p>
				<p className="text-gray-600">Ing. Software</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
      <div className='self-center mb-4 bg-gray-500  rounded-full flex-shrink-0 bg-cover bg-center  w-24 h-24'>
        <img src={bryanPic} alt="" className="relative top-[0.22rem]"  />
        </div>
				<p className="text-xl font-semibold leading-tight">Bryan Henao</p>
				<p className="text-gray-600">Admin Empresas</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
      <div className='self-center mb-4 bg-gray-500  rounded-full flex-shrink-0 bg-cover bg-center  w-24 h-24'>
        <img src={taniaPic} alt="" className="relative  right-[0.07rem] top-[0.06rem]"  />
        </div>
				<p className="text-xl font-semibold leading-tight">Tania Garcia</p>
				<p className="text-gray-600">Admin Empresas</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
      <div className='self-center mb-4 bg-gray-500  rounded-full flex-shrink-0 bg-cover bg-center  w-24 h-24'>
        <img src={angelPic} alt="" className="relative top-[0.12rem] left-[0.12rem]"  />
        </div>
				<p className="text-xl font-semibold leading-tight">Angel Herrera</p>
				<p className="text-gray-600">Jefe Gestión Humana</p>
			</div>
		</div>
	</div>
  </div>


    

  
    </>
  )
}

export default Nosotros