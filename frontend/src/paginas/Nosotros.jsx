import nosotrosHero from '../assets/nosotrosHero.png'
import aboutVideo from "../assets/aboutusVideo.mp4";
import { useRef } from "react";
import {motion} from "framer-motion";



const Nosotros = () => {

  const aboutVideoRef = useRef(null);

  return (
    <>
        <div>
      <div
        style={{ backgroundImage: `url(${nosotrosHero})` }}
        className="h-[265px] sm:h-[350px] md:h-[470px]  lg:h-[560px] xl:h-[800px] 2xl:h-screen w-screen
                   bg-cover bg-center  bg-no-repeat 
                   flex items-center text-white
                   px-5 md:px-14 py-12 md:py-16"
      >
        {/* Limita el ancho del contenido y centra verticalmente */}
        <div className="max-w-[600px]">
          <h1 className="text-[9px] sm:text-base md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-md mb-4 leading-tight text-white">
          Conectamos Talento  <br className="hidden md:block" />
          y Oportunidades
          </h1>
          <p className="mb-8   font-medium drop-shadow-lg tracking-tighter text-[6px] sm:text-[10px] md:text-sm lg:text-base xl:text-lg ">
          Impulsamos el crecimiento de empresas y profesionales <br className="md:block" />
           a través de procesos de selección innovadores y personalizados
          </p>
        </div>
      </div>
    </div>


     <div>
        <h2 className='text-center  text-3xl  sm:text-5xl text-white font-semibold drop-shadow-lg
         mt-40 '> Nuestra Historia</h2>
   </div>

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


                  <div className="md:w-4/5 xl:w-3/5 mx-auto">
                       <h2 className="text-4xl md:text-lg  xl:text-4xl mt-10  md:mt-16 lg:mt-9 md:tracking-tight  text-left tracking-wide lg:tracking-wide text-indigo-50 drop-shadow-md font-bold mb-4 md:w-4/5 xl:w-full ">Impulsamos el Futuro Empresarial a través del Potencial Humano</h2>
                       <p className="text-base md:text-sm lg:text-base mt-6 md:mt-3 lg:mt-6 text-gray-800 mb-8 font-medium text-justify">En RSP Reclutamiento y Selección de Personal, nos especializamos en conectar empresas con el mejor talento. Con años de experiencia y un enfoque innovador, hemos ayudado a transformar equipos y potenciar carreras profesionales</p>
                       


                       <h3  className="text-2xl md:text-lg xl:text-2xl mt-9 md:-mt-3  lg:-mt-0 xl:mt-9 text-center text-indigo-50  font-semibold mb-4 ">
             Nuestros Pilares Fundamentales
                </h3>
  


                          {/* Sección de Valores en la misma fila */}
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4   xl:gap-4 mt-8 md:mt-6 lg:mt-8">
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
  </div>
                       


                  </div>
                  
               </div>
                 

          </div>


    


    </>
  )
}

export default Nosotros