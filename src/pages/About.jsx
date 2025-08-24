import React from "react";
import { SearchBar } from "../components/SearchBar";
import Home from "./Home";

function About() {
  return (

    <>
    <div className="flex flex-col items-center justify-center pt-5 pb-30">
      <h1 className="font-bold text-3xl text-center mt-10 font-playfair">
        Unlock the World Through Books
      </h1>
      <p className="text-center mt-2 font-inter text-xl pb-14">
        Dive into stories and ideas that spark curiosity and growth.
      </p>
      </div>
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-gray-50">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
              {/* Image */}
              <div className="flex justify-center">
                  <img
                      src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                      alt="Bookshelf"
                      className="rounded-lg shadow-md max-w-sm object-cover h-200" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center font-playfair">
                  <h1 className="text-xl font-bold mb-4 font-poppins">ABOUT READSTACK</h1>
                  <p className="text-gray-700 leading-relaxed">
                      <strong>READSTACK</strong> is a simple and intuitive book discovery
                      platform that lets users search for books by title or author. Built
                      with React and powered by the Open Library API, it allows users to
                      explore book covers, titles, authors, and detailed information all
                      in one place.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                      Whether you're searching for your next great read or just exploring,{" "}
                      <strong>READSTACK</strong> is designed to make your book discovery
                      experience easy and enjoyable.
                  </p>
              </div>
          </div>
      </div></>
  );
}

export default About;
