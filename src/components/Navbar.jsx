import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#16247D] text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold mx-2 sm:mx-10 font-protest transition duration-300 ease-in-out transform hover:scale-105">
        READSTACK
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-7 me-10">
        <Link to="/" className="font-bold hover:underline font-poppins text-sm">
          HOME
        </Link>
        <Link to="/about" className="font-bold hover:underline font-poppins text-sm">
          ABOUT
        </Link>
      </div>

      {/* Hamburger Icon (this is visible only on mobile) */}
      <div className="md:hidden">
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* The Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-[#16247D] w-48 rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-bold hover:underline font-poppins text-sm"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="font-bold hover:underline font-poppins text-sm"
          >
            ABOUT
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
