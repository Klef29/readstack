function About() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center pt-10 pb-16 px-4">
        <h1 className="font-bold text-3xl md:text-4xl text-center font-playfair">
          Unlock the World Through Books
        </h1>
        <p className="text-center mt-3 font-inter text-lg md:text-xl max-w-2xl">
          Dive into stories and ideas that spark curiosity and growth.
        </p>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center justify-center px-6 py-12 bg-[#fcfcfc]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Bookshelf"
              className="rounded-lg shadow-md w-full max-w-sm md:max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center md:text-left font-playfair px-2">
            <h2 className="text-xl md:text-2xl font-bold mb-4 font-poppins text-gray-900">
              ABOUT READSTACK
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>READSTACK</strong> is a simple and intuitive book discovery
              platform that lets users search for books by title or author. Built
              with React and powered by the Open Library API, it allows users to
              explore book covers, titles, authors, and detailed information all
              in one place.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you're searching for your next great read or just exploring,{" "}
              <strong>READSTACK</strong> is designed to make your book discovery
              experience easy and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
