import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav  className="bg-[#16247D] text-white p-4 flex justify-between items-center">
      <h1 href="/" className="text-2xl font-extrabold mx-10 font-protest transition duration-300 ease-in-out transform hover:scale-105"> READSTACK</h1>
      <div className="space-x-7 me-10">
       <Link to="/" className="font-bold hover:underline font-poppins text-sm">HOME</Link>
       <Link to="/about" className="font-bold hover:underline font-poppins text-sm">ABOUT</Link>
      </div>
    </nav>
  );
}

export default Navbar;