import { useState , useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from '../constants/info';
import { categoryMethods } from '../constants/info';
import {motion} from "framer-motion";


{/*import imgvideo from "../assets/profile-pictures/pruebafb.jpg";*/}
import videoPortada from "../assets/rspjobadvices.mp4";







const Home = () => {

   {/* Funcionamiento del carrusel */}
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));  

  
  const videoRef = useRef(null);
   
   



  return (
    <>

    {/* Carrousel */}

      <div className="relative w-full h-screen flex items-center justify-center bg-gray-100  border border-gray-600 shadow-lg rounded-lg  overflow-hidden">
       {/* Contenedor de texto a la izquierda */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center pl-12 pr-2  max-h-64 overflow-hidden ">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center  ">{slides[current].text}</h2>
        <p className="text-lg text-green-600 font-semibold mt-4 text-center  ">{slides[current].highlight}</p>
      </div>
      {/* Imagen a la derecha */}
      <div className="w-1/2 h-full">
        <img
          src={slides[current].image}
          alt="Slide"
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
     {/* Botón Izquierdo*/}
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:bg-white/95"
      onClick={prevSlide}
    >
      <ChevronLeft className="w-8 h-8 text-gray-500" />
    </button>

      {/* Botón Derecho */}
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:bg-white/70"
        onClick={nextSlide}
      >
        <ChevronRight className="w-8 h-8 text-gray-500" />
      </button>

        {/* Puntos de navegación  */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-green-400 ${
              index === current ? "bg-green-400 w-4 h-4 scale-110" : "bg-gray-300"
            } cursor-pointer hover:scale-110`}
          />
        ))}
      </div>
      </div>
       {/*  Fin del carrousel */}

         {/* inicio de los cards de metodos */}

     <div className="pt-36 container max-w-screen-xl mx-auto">
      <div>
      <h1 className="text-3xl titles text-center">Nuestros enfoques estratégicos para soluciones de negocio</h1>
         </div>
      
       {/* div categorias */}
           <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-24">
             {
             categoryMethods.map((item, i) => (
                <div key={i} className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center
                    cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                    <div className="flex w-full mx-auto items-center justify-center">
                      <img src={item.pic} alt="" className="bg-[#C1F1C6] p-5 rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-11 space-y-9">
                      <h3 className="font-semibold cardTitle "> {item.title} </h3>
                      <p className="textCtgMtd  italic">{item.desc}</p>
                    </div>
                </div>
             ))
            }
        </div>       
        </div>
        {/* fin de los cards con metodos*/}


        {/* Texto con video con boton para buscar ofertas */}

          <div className="px-4 lg:px-12 max-w-screen-2xl mx-auto pt-60">
               <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-24">
                  
                  <div>
                    
                  <motion.video
                      ref={(it) => {
                          if (it) {
                              it.volume = 0.13; //  se configura el  volumen
                              videoRef.current = it;
                              videoRef.current.dataset.pausedByUser = "false"; 
                          }
                      }}
                      controls
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                      className="rounded-2xl border border-green-400 shadow-2xl shadow-green-500"
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      onViewportEnter={() => {
                          if (videoRef.current?.dataset.pausedByUser === "true") return;  
                          videoRef.current?.play(); 
                      }}
                      onViewportLeave={() => {
                          if (videoRef.current && !videoRef.current.paused) {
                              videoRef.current.dataset.autoPaused = "true"; 
                              videoRef.current.pause();
                          }
                      }}
                      onPause={() => {
                          if (videoRef.current && videoRef.current.dataset.autoPaused !== "true") {
                              videoRef.current.dataset.pausedByUser = "true"; 
                          }
                          videoRef.current.dataset.autoPaused = "false"; 
                      }}
                      onPlay={() => {
                          if (videoRef.current) {
                              videoRef.current.dataset.pausedByUser = "false"; 
                          }
                      }}
                  >
                      <source src={videoPortada} type="video/mp4" />
                      Your browser does not support the video tag.
                  </motion.video>
                  
                   
                    
                  </div>   


                  <div className="md:w-3/5 mx-auto">
                       <h2 className="text-4xl text-gray-500 font-semibold mb-4 md:w-4/5 xl:w-full ">Conoce nuestras ofertas laborales mas recientes!</h2>
                       <p className="md:w-3/4 text-sm text-gray-500 mb-8 ">Dirigete al siguiente boton para encontrar lo ultimo en ofertas de RSP</p>
                       <button className="bg-green-600 text-white px-5 py-2 mx-auto">Descubre mas</button>
                  </div>
               </div>
                 

          </div>

           {/* FIN del texto con video con boton para buscar ofertas */}



        {/* ----------------Seccion de estadisticas RSP ----------------*/}

        
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-10 rounded-lg shadow-lg mt-20  space-x-20">
            {/* Sección Izquierda */}
            <div className="md:w-1/2 text-left mt-8 pl-7">
                <h2 className="text-3xl font-bold text-gray-800 uppercase">Líderes de reclutamiento digital en todo el pais</h2>
                <p className="text-gray-600 mt-7">Con una  <span className="font-bold"> sólida trayectoria en la entrega de servicios de selección de personal excepcionales, </span> hemos colaboramos con muchas empresas alrededor de {" "} 
                Colombia para encontrar y contratar talento de <span className="font-semibold"> primera calidad</span>. Nuestra tasa de satisfacción del <span className="font-extrabold"> 96%</span>  refleja nuestro compromiso 
                  con la excelencia y satisfacción de nuestros clientes. Para conocer más de nosotros, <span className="font-semibold">  dirígete a :</span>
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
                    Acerca de RSP
                </button>
            </div>
            
            {/* Sección Derecha */}
            <div className="md:w-1/2 grid grid-cols-2 gap-6 mb-3 pl-6">
                {[
                    { value: "100000+", label: "Candidatos Alcanzados" },
                    { value: "40", label: "Reclutadores Calificados" },
                    { value: "1000+", label: "Ofertas Publicadas" },
                    { value: "15", label: "Metodos de Reclutamiento" }
                ].map((stat, index) => (
                    <div key={index} className="text-center">
                        <p className="text-4xl font-bold text-blue-500">{stat.value}</p>
                        <p className="text-gray-600 font-semibold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      






     </>
  );
};

export default Home