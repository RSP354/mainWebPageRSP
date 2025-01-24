import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants";
import { motion } from "framer-motion";


const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: (checklistItems.length - 1 - i) * 0.2, // Último elemento aparece primero
    },
  }),
};




const containerVariants = {
  hidden: { opacity: 1},
  visible: {
      opacity: 1,
      transition: {
          staggerChildren: 0.3,
      }
  }
}

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%"},
  visible: {
    clipPath: "inset(0 0% 0 0%",
      transition: { duration: 1.2, ease: "easeInOut"},
  }
}


const Workflow = () => {
  return (
    <div className="mt-20">
        <motion.h2 
             whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0 , y: -100}}
              transition={{ duration: 1}}
               className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Accelerate your {" "}
           <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            coding workflow.
            </span>
        </motion.h2>
        <div className="flex flex-wrap justify-center">
         <motion.div className="p-2 w-full lg:w-1/2"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, amount: 0 }}
             variants={imageVariants}
         >
            <img src={codeImg} alt="Code" />
         </motion.div>
          <div className="pt-12 w-full lg:w-1/2">
               {checklistItems.map((item,index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                 <motion.div
                   custom={index} 
                   variants={textVariants}
                   initial="hidden"
                   whileInView="visible" 
                   viewport={{ once: false, amount: 0.05 }}
                        >
             <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500">{item.description}</p>
              </motion.div>
                    </div>
               ))}
          </div>
        </div>
    </div>
  );
};

export default Workflow