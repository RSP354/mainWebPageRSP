{/*  Barra de navegacion */ }
export const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Nosotros", href: "#" },
    { label: "Contactanos", href: "#" },
  ];



{/*  Imagenes de home (body)  carrousel y el texto*/}

import carrousel1 from "../assets/profile-pictures/slide1.jpg";
import carrousel2 from "../assets/profile-pictures/slide2.jpg";
import carrousel3 from "../assets/profile-pictures/slide3.jpg";
import carrousel4 from "../assets/profile-pictures/slide4.jpg";

export const slides = [
  {
    text: "Encuentra el trabajo ideal con nosotros",
    image: carrousel1,
    highlight: "Tu talento merece la mejor oportunidad.",
  },
  {
    text: "Descubre empleos en diversas industrias y postulate fácilmente",
    image: carrousel2,
    highlight: "Accede a ofertas de trabajo en tecnología, salud, administración y más.",
  },
  {
    text: "RSP encuentra al candidato adecuado para cada desafío",
    image: carrousel3,
    highlight: "Seleccionamos a los mejores profesionales para llevar a tu empresa al siguiente nivel.",
  },

  {
    text: "¿Listo para encontrar el puesto deseado?",
    image: carrousel4,
    highlight: "Contáctanos hoy mismo y empieza a dar los primeros pasos hacia tu exito profesional",
  },
];


{/* Cards Category methods */}

import graphCtg1  from "../assets/profile-pictures/graphCtg1.jpg";
import  graphCtg2  from "../assets/profile-pictures/graphCtg2.jpg";
import  graphCtg3  from "../assets/profile-pictures/graphCtg3.png";
import graphCtg4 from "../assets/profile-pictures/graphCtg4.png";




export const categoryMethods  = [ 
  {id: 1, title: "ATS", desc: "Automatización y Selección con IA",  pic: graphCtg1 },
  {id: 2, title: "Reclutamiento Directo", desc: "Búsqueda proactiva en redes y plataformas",  pic: graphCtg2 },
  {id: 3, title: "Recomendaciones Internas", desc: "Candidatos referidos por nuestros partners",  pic: graphCtg3 },
  {id: 4, title: "Headhunting Ejecutivo", desc: "Captación de talento en el mercado global",  pic: graphCtg4 },
];