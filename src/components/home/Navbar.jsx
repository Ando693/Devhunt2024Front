import React, { useState } from "react"
import { BsFacebook } from "react-icons/bs"
import logo from "../../assets/react.svg"
 
const Navbar = ({submit}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const action = (value) => { 
    submit(value) 
  }

  return (
    <div className="w-full z-20">
      <div className="flex flex-wrap items-center justify-between px-8 py-4 relative bg-green-200">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
          <span className="ml-2 font-bold text tracking-widest">tailwindcss</span>
        </a>

        <nav className={`$ ${isMenuOpen ? "block absolute top-20 right-0 pt-5 pb-10 pl-5 pr-10" : "hidden"} md:block z-50 md:bg-transparent bg-primary rounded`}>
          <ul className={`${isMenuOpen ? "flex-col" : "flex-row"} flex gap-10 font-semibold`}>
            <li onClick={() => {action(0)}}>Test1</li>
            <li onClick={() => {action(1)}}>Test2</li>
            <li onClick={() => {action(2)}}>Test3</li>
            <li onClick={() => {action(3)}}>Test4</li>
          </ul>
        </nav>

        <button
          id="menu-button"
          className="md:hidden block p-2 focus:outline-none"
          onClick={handleMenuClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;