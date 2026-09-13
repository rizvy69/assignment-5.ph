import logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
    return (
     <div className="sticky top-0 z-50 border-b border-gray-100 bg-white ">
           <div className="container mx-auto flex flex-wrap items-center  justify-between my-1.5">
            <div className="flex items-center">
                 <button className="btn btn-ghost btn-square  md:hidden">
            <FiMenu />
          </button>
                <img src={logo} alt="logo" />
            </div>
        <ul className="hidden md:flex items-center gap-5 text-[14px]">
            <li className="hover:text-primary">Home</li>
            <li  className="hover:text-primary">Technologies</li>
            <li  className="hover:text-primary">Projects</li>
            <li className="hover:text-primary">About</li>
            <li className="hover:text-primary">Contact</li>
        </ul>
        <div className="flex items-center gap-4">
            <button className="btn btn-soft">Sign In</button>
            <button className="btn btn-secondary rounded-2xl">Sign Up</button>
            

        </div>

            
        </div>
     </div>
    );
};

export default Navbar;