import { useState } from "react";
 import logo from "../assets/image 1.svg";
import { MdSegment } from "react-icons/md";
const Navbar = () => {
  const [nav, setNav] =useState(false)
  const handleNav =()=>{
    setNav(!nav)
  }
  return (
    <div>
      <div className="flex flex-row justify-between md:px-10 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
       <div>
        <img src={logo} alt="" />
       </div>
       <div> 
        <ul className="hidden md:flex flex-row text-textBlue">
          <li>ABOUT US</li>
          <li>OUR WORK</li>
          <li>CONTACT</li>
          <li>SOLUTIONS</li>
          <li>BLOGS</li>
          <li>CAREERS</li>
        </ul>
       </div>
       <div className="my-3 hidden md:flex">
        <button>REQUEST DEMO</button>
       </div>
       <div className="flex md:hidden m-3  ">
        <MdSegment size={40}  onClick={handleNav}/>
       </div>
      </div>
      <div>
      <div > 
        <ul  className={ nav ? "flex flex-col md:hidden top-20 left-20 h-full w-full text-center text-white rounded-md bg-textBlue"  : "hidden"}>
          <li>ABOUT US</li>
          <li>OUR WORK</li>
          <li>CONTACT</li>
          <li>SOLUTIONS</li>
          <li>BLOGS</li>
          <li>CAREERS</li>
        </ul>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
