import { NavLink } from "react-router-dom";
import Resume from "../../../components/Resume";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  const dropdownRef = useRef(null);

  const routes = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About Me</NavLink>
      <NavLink to="/skills">My Skills</NavLink>
      
      <NavLink to="/projects">My Projects</NavLink>
      <NavLink to="/contact-me">Contact Me</NavLink>

      
    </>
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBoxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="navbar justify-between shadow-sm fixed z-10 lg:px-16 px-6 bg-cover bg-center"
      
    >
      <div className="navbar-start">
        <div className="flex gap-3 items-center">

          <h2 className="md:block text-xl  md:text-3xl text-gray-900 font-extrabold">Tondra</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="*:ml-5 menu menu-horizontal px-1 text-base *:text-gray-700 *:font-extrabold">
          {routes}
        </ul>
      </div>

      <div className="navbar-end">
        <Resume />
      </div>

      <div className="dropdown ml-3" ref={dropdownRef}>
        <button
          onClick={() => setBoxOpen(!boxOpen)}
          tabIndex={0}
          role="button"
          className="btn bg-neutral rounded-full border-none text-white lg:hidden mr-3 shadow-md"
        >
          {boxOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          )}
        </button>
        {boxOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-100 bg-opacity-90 rounded-xl z-[10] mt-3 w-80 p-4 right-2 space-y-3 shadow-md *:text-black/90 *:font-bold"
          >
            <div className="lg:hidden flex flex-col gap-y-4">
              <p className="text-2xl font-serif text-purple-600 font-bold">Tondra</p>
            </div>

            <div className="flex flex-col gap-3 font-bold">{routes}</div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;