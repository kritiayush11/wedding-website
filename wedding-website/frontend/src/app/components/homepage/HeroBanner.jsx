import React from "react";
import Image from "next/image";
import Heropic from "../../../assets/photo1.jpg";
import Countdown from "./Countdown";

const HeroBanner = () => {
  return (
    <>
      <section className="relative w-full h-[90vh] flex items-end justify-center bg-[#fdf7f2]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={Heropic}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative z-10 text-center text-[#CDAC96] px-4 mb-10">
          <h1
            className="text-6xl font-bold mb-1 drop-shadow-lg"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Celebrating
          </h1>
          <p
            className="text-2xl font-bold mb-3 drop-shadow-lg"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            A Joyous Occasion
          </p>

          <a
            href="#rsvp"
            className="mt-6 inline-block px-6 py-3 bg-black text-[#CDAC96] text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
          >
            RSVP Now 🎉
          </a>
        </div>
      </section>

      {/* Countdown Section Below */}
      <Countdown />
    </>
  );
};

export default HeroBanner;
