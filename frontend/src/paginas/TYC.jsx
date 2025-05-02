import {motion } from "framer-motion";


const TYC = () => {

  const textVariantsTyC = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };



  return (
    <>
    
       
       <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
          variants={textVariantsTyC}
       className="bg-gray-100 text-gray-900 mt-14  mx-3 xl:mx-5 rounded-3xl">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-gray-700 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto rounded-xl" 
        style= {{
          backgroundImage: "url('https://images.unsplash.com/photo-1628114855639-f8294222fdc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: 'center center',
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover'
        }}
        
        >
          <div className="flex flex-col items-center p-8 py-12 text-center text-gray-100">
            <span>2025</span>
            <h1 className="py-4 text-5xl font-bold">Terminos y Condiciones de RSP</h1>
            <p className="pb-6 ">Protegemos la información compartida, definiendo responsabilidades claras: el cliente aporta datos precisos y RSP asegura un proceso de selección transparente y de alta calidad.</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 hidden lg:block">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down lg:hidden"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">Confidencialidad</h1>
            <p>Garantizamos la absoluta confidencialidad de toda la información
               compartida con terceros durante el proceso de selección,
               incluyendo datos de la empresa, candidatos y resultados de
               evaluaciones.</p>
            
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">Responsabilidades del Cliente</h1>
            <p>- Proporcionar información detallada y precisa sobre el perfil del
               cargo,  facilitando los datos necesarios para garantizar un proceso
               de selección eficiente y alineado con las necesidades. <br />
               - Proporcionar retroalimentación oportuna sobre los candidatos
               presentados </p>
            
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">Responsabilidades RSP</h1>
            <p> - Cumplir con los servicios ofrecidos en el plazo acordado,
                manteniendo altos estándares de calidad y profesionalismo. <br />
                - Realizar un proceso de selección transparente y objetivo, basado en
                criterios claros y definidos. <br />
                - Presentar candidatos que cumplan con los requisitos del perfil</p>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">Forma de Pago</h1>
            <p>Se requiere un pago del 50% al inicio del proceso y el saldo al cierre
                del servicio.Los pagos se realizarán mediante transferencia bancaria.</p>
            
          </div>
        </div>
      </div>
    </motion.div>

    
    </>
  )
}

export default TYC