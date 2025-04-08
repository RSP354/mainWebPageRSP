import nosotrosHero from '../assets/nosotrosHero.png'
import aboutVideo from "../assets/aboutusVideo.mp4";
import { useRef } from "react";
import {motion} from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";



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


             {/* ------------ Seccion de nosotros con video -------------- */ }
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

      {/* ------------ SECCION DE OBJETIVOS --------------- */}

      <div className="bg-gray-700 p-4 min-h-screen mt-40">
  <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
       <TbTargetArrow className='w-9 h-9' />
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Nuestros Objetivos</h2>
      <p className="text-gray-300">Impulsamos logros al unir talentos excepcionales con desafíos de alto impacto</p>
    </div>
    <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/200008/human-resources-search.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Selección Precisa</h5>
            <p className="text-gray-300">Identificamos a los candidatos ideales que maximizan el rendimiento de tu empresa.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/213566/finances-pie-chart.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Ahorro de costos</h5>
            <p className="text-gray-300">Reducimos hasta un 50% los gastos de contratación al evitar procesos fallidos.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/118511/clock.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Procesos Eficientes </h5>
            <p className="text-gray-300 tracking-tight text-sm  xl:text-base">Optimizamos cada etapa del proceso de reclutamiento mediante metodologías ágiles y tecnologías avanzadas, garantizando tiempos de respuesta rápidos.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/65353/strongbox.svg" loading="lazy" width="200" height="200" className="w-14 h-14 rounded-full" style={{ color: "transparent" }} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Confidencialidad</h5>
            <p className="text-gray-300">Procesos discretos para búsquedas estratégicas o reemplazos sensibles, con acuerdos de privacidad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


     {/* ------------ Seccion de equipos  -------------- */}

  <div className="py-6 bg-gray-100 text-gray-800 mt-20">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
		<p className="max-w-2xl text-center text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="text-gray-600">Visual Designer</p>
			</div>
		</div>
	</div>
  </div>


    


    </>
  )
}

export default Nosotros