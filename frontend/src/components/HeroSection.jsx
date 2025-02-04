import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import {motion } from "framer-motion";

const textVariants = {
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

const HeroSection = () => {
  return ( 
     <div className="flex flex-col items-center mt-6 lg:mt-20">
         <motion.h1
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0 , y: -100}}
           transition={{ duration: 1}}
         className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
                {" "}
                for developers 
                </span>
             </motion.h1>
             <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0 , x: 100}}
              transition={{ duration: 1}}
             className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> 
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools.
                Get started today and turn your imagination into immersive reality!
             </motion.p>
             <motion.div className="flex justify-center my-10"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0 }}
                variants={textVariants}
             >
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3
                rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
             </motion.div>
             <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
                   <source src={video1} type="video/mp4" />
                   Your browser does not support the video tag. 
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
                   <source src={video2} type="video/mp4" />
                   Your browser does not support the video tag. 
                </video>
             </div>
     </div>
   );
};

export default HeroSection;