import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constants/info";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
   };

  return (
    <nav className="sticky top-0 z-50 py-6   backdrop-blur-lg border-b  border-neutral-700/80   bg-gradient-to-t from-transparent to-black/25">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-14 w-14 mr-2 rounded-sm" src={logo} alt="logo" />
                <span className="max-[370px]:text-[11px] text-xs sm:text-sm md:text-base  lg:text-base   xl:text-lg tracking-tighter font-medium text-white  drop-shadow-lg">RSP (Reclutamiento y Selección de Personal)</span>
            </div>
            <ul className="hidden lg:flex ml-3 xl:space-x-9 lg:space-x-5">
                {navItems.map((item , index ) => (
                  <li key={index}>
                    <Link className="lg:text-sm  xl:text-base font-semibold text-white drop-shadow-lg  hover:text-yellow-200 transition-colors duration-300 " to={item.href} onClick={() => window.scrollTo(0, 0)}>{item.label}</Link>
                  </li>
                ))}
            </ul>
            
             <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                   {mobileDrawerOpen ? <X className="text-gray-100" /> : <Menu className="text-gray-100" />}
                </button>
             </div>
            </div>
            {mobileDrawerOpen && (
              <div className="fixed right-0 top-24 z-20 bg-gray-200 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                 <ul>
                   {navItems.map((item, index) => (
                     <li key={index} className="py-4 text-base hover:text-yellow-100   transition-colors duration-100">
                       <Link to={item.href} onClick={() => window.scrollTo(0, 0)}>{item.label}</Link>
                     </li>
                   ))}
                 </ul>
              </div>
            )}
     </div>
    </nav>
  );
};

export default Navbar