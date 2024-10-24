import { NavLink } from "react-router-dom";
import logo from "../assets/imagen/logo-portafolio.png";

const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-b from-[#F2F4F2] to-[#d1d1d1] space-x-24 text-right h-16   text-lg font-serif pr-12 p-5 font-semibold ">
      <div>
      <img src={logo} alt="logo" className="h-20 w-20 absolute top-0 " />
      </div>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link  border-b-2 border-[#028090] pb-1  hover:text-emerald-600"
            : null
        }
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive 
          ? "active-link font-bold border-b-2 border-[#028090] pb-1  hover:text-emerald-600" 
          : null)}
      >
        {" "}
        About
      </NavLink>
      <NavLink
        to={"/projects"}
        className={({ isActive }) => (isActive 
          ? "active-link font-bold border-b-2 border-[#028090] pb-1  hover:text-emerald-600" 
          : null)}
      >
        {" "}
        Projects
      </NavLink>
      
      <NavLink
        to={"/skills"}
        className={({ isActive }) => (isActive 
          ? "active-link font-bold border-b-2 border-[#028090] pb-1  hover:text-emerald-600" 
          : null)}
      >
        {" "}
        Skills
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive 
          ? "active-link font-bold border-b-2 border-[#028090] pb-1  hover:text-emerald-600" 
          : null)}
      >
        {" "}
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
