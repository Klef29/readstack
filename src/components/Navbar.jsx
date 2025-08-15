function Navbar() {
  return (
    <nav  className="bg-[#16247D] text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold mx-10"> READSTACK</h1>
      <div className="space-x-7 me-10">
        <a href="/" className="font-semibold hover:underline">HOME</a>
        <a href="/about" className="font-semibold hover:underline">ABOUT</a>
      </div>
    </nav>
  );
}

export default Navbar;
