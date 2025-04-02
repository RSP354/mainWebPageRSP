import propuestaPic from  "../assets/propuestacomercial.jpg"

const Propuesta = () => {
  return (
   <>
    
    <div className="bg-gray-900 text-white">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
          Trazando tu <span className="text-lime-400"> rumbo</span>  hacia el éxito
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 tracking-tighter">
      Despues de <span className="font-bold text-indigo-100">aceptar</span> nuestra propuesta, es hora de transformar ideas en resultados. Te acompañamos en cada etapa con un plan estructurado, recursos clave y seguimiento personalizado.
			</p>
			
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={propuestaPic} alt="" className="object-cover object-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl shadow-xl shadow-indigo-300" />
		</div>
	</div>
</div>


    {/* seccion de paso a paso*/}
    <div className="bg-gray-100 text-gray-800  mt-52  mx-10 rounded-3xl">
	<div className="container mx-auto  flex flex-col p-6 ">
		<h2 className="py-4 text-3xl font-bold text-center mt-14">Próximos pasos</h2>
		<div className="divide-y divide-gray-300 mt-20">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-signature-icon lucide-signature"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"/><path d="M3 21h18"/></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase text-lime-600">Paso 1</span>
					<span className="text-xl font-bold md:text-2xl">Confirmación y Acuerdo Inicial</span>
					<span className="mt-4 text-gray-700">La aceptación formal de la propuesta comercial se concreta mediante la firma del contrato de servicios, seguido del pago inicial del 50% del valor acordado, según lo estipulado en el contrato.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase text-lime-600">Paso 2</span>
					<span className="text-xl font-bold md:text-2xl">Inicio del Proceso de Reclutamiento</span>
					<span className="mt-4 text-gray-700">Se inicia con el diligenciamiento del formato de requisición de personal, seguido de una reunión de kick-off para profundizar en el perfil del cargo, la cultura organizacional y las expectativas de la empresa, y se concluye con la elaboración y presentación del cronograma detallado del proceso de selección, que incluye hitos y fechas clave.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase text-lime-600">Paso 3</span>
					<span className="text-xl font-bold md:text-2xl">Desarrollo del Proceso de Selección</span>
					<span className="mt-4 bg-gray-100 text-gray-700">Ejecución de las etapas del proceso de selección.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase text-lime-600">Paso 4</span>
					<span className="text-xl font-bold md:text-2xl">Presentación de la Terna Finalista</span>
					<span className="mt-4 text-gray-700">La presentación de la terna finalista se realizará en un plazo de cinco (5) días hábiles a partir de la reunión de kick-off, complementada con la entrega de informes detallados de cada candidato, que incluyen resultados de pruebas, entrevistas y referencias, y la coordinación de entrevistas finales entre la empresa y los candidatos seleccionados.</span>
				</div>
			</div>
      <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check-icon lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase text-lime-600">Paso 5</span>
					<span className="text-xl font-bold md:text-2xl"> Cierre del Proceso y Seguimiento</span>
					<span className="mt-4 text-gray-700">Se entregará el informe final del proceso de selección, que incluirá recomendaciones para la integración del candidato seleccionado, y se efectuará el pago del 50% restante del valor acordado al finalizar dicho proceso y presentar al candidato seleccionado.</span>
				</div>
			</div>
		</div>
	</div>
</div>


   

</>
  )
}

export default Propuesta