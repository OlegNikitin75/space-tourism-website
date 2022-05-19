import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (<div
      className="w-[100%] h-[100vh] lg:bg-home-bg-desk md:bg-home-bg-tablet bg-home-bg-mobile bg-no-repeat bg-cover bg-center">
    <div className="max-w-[1110px] flex text-center items-center flex-col lg:flex-row justify-between lg:items-end mx-auto px-4 lg:pt-[387px] md:gap-40 md:pt-[206px] gap-20 pt-[112px]">
      <div className="max-w-[450px]">
        <h4 className="text-base mb-4 sm:text-xl lg:text-lg tracking-[5px] text-tropical-blue sm:mb-6">SO, YOU WANT TO TRAVEL TO</h4>
        <h1 className="font-Bellefair text-[80px] sm:text-[150px] mb-4 sm:mb-6 md:leading-[150px] lg:leading-[172px]">SPACE</h1>
        <p className="font-Barlow text-tropical-blue text-[15px] md:text-base lg:text-lg sm:leading-4 md:leading-7 lg:leading-8">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div>
        <Link to="/" className="inline-flex justify-center items-center w-[150px] h-[150px] md:w-[242px] md:h-[242px]  lg:w-[274px] lg:h-[274px] rounded-[50%] bg-white animate-pulse">
          <span className="text-vulcan font-Bellefair text-xl md:text-[32px] uppercase">Explore</span>
        </Link>
      </div>

    </div>
    </div>);
};

export default Home;
