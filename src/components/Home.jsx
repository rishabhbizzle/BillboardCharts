import React from "react";
import {Link} from "react-router-dom";
import GlobalImg from "../assets/global.jpg";
import AlbumImg from "../assets/album.png";
import ArtistImg from "../assets/artist.png";
import Hot from "../assets/head.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-10 px-4 md:px-8 text-white">
        <Link to="/hot100">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4 bg-black">
          <img className="mx-auto" src={Hot} alt="HTML icon" />
          <p className="pt-9 pb-1 ">Billboard Hot 100</p>
        </div>
        </Link>
        <Link to="/global200">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4 bg-black">
          <img className="mx-auto" src={GlobalImg} alt="HTML icon" />
          <p className="my-3 ">Billboard Global 200</p>
        </div>
        </Link>
        <Link to="/album200">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4 bg-black">
          <img className="mx-auto" src={AlbumImg} alt="HTML icon" />
          <p className="my-3">Billboard 200 (Albums)</p>
        </div>
        </Link>
        <Link to="/artist100">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-4 bg-black">
          <img className="mx-auto" src={ArtistImg} alt="HTML icon" />
          <p className="my-3">Billboard Artist 100</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
