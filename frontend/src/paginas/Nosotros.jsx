import nosotrosHero from '../assets/nosotrosHero.png'

const Nosotros = () => {
  return (
    <>
        <div>
      {/* Ajusta la altura mínima y el padding para que la sección se vea más amplia */}
      <div

        style={{ backgroundImage: `url(${nosotrosHero})` }}
        className="h-[265px] sm:h-[350px] md:h-[470px]  lg:h-[560px] xl:h-[800px] w-screen
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
    </>
  )
}

export default Nosotros