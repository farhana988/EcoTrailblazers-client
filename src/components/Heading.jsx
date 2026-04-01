/* eslint-disable react/prop-types */
// import React from 'react';
import "animate.css";
import Marquee from "react-fast-marquee";

const Heading = ({ title, subtitle }) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center my-12
        "
    >
      <h1
        className="text-3xl  font-bold mb-4 text-primary active
        animate__animated animate__heartBeat animate__infinite
          animate__slower "
      >
        {title}
      </h1>

      <p className="text-xs md:px-20 lg:px-80 text-primary  text-center font-thin">
        <Marquee pauseOnHover={true}> {subtitle}</Marquee>
      </p>
    </div>
  );
};

export default Heading;
