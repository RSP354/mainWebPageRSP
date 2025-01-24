import { features } from "../constants";
import {motion } from "framer-motion";



function FeatureSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] ">
        <div className="text-center">
            <motion.span
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }} 
               transition={{ duration: 1, ease: "easeOut" }} 
               viewport={{ once: false, amount: 0.5 }} 
            
            className="bg-neutral-900 text-orange-500 rounded-full h-6
            text-sm font-medium px-2 py-1 uppercase">
                feature
            </motion.span>
            <motion.h2
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0 , x: -100}}
             transition={{ duration: 1}}
            className="text-3xl sm:tex-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide "> 
                Easily build 
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> {" "}your code </span>
            </motion.h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                          <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5> 
                          <p className="text-md p-2 mb-20 text-neutral-500">
                            {feature.description}
                            </p>  
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
};

export default FeatureSection