import React from "react";
import Banner from "../assets/backbanner.png";
function Hero() {
  return (
    <div className=" justify-center items-center">
      {/* hero image */}
      <div className=" flex items-center justify-center">
        <img className=" w-[1100px] absolute top-[50px]  flex justify-center  items-center" src={Banner}></img>
      </div>

      {/* hero text */}
      <div className=" text-left mt-[650px] ">
        <p className="  font-medium text-2xl">Two wheels, endless possibilities.</p>
        <h1  className="  text-6xl  font-extrabold  ">Welcome to your cycling haven.</h1>
      </div>
    </div>
  );
}

export default Hero;