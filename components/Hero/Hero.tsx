"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/*col-span 8*/}

        <motion.div
          className="col-span-8 place-self-center text-left justify-self-start"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-7xl font-semibold font-poppins">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycolor-200 to-mycolor-100">Hello I'am</span>
            <div className="h-2"></div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Can Bedir",
                1700, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend Developer",
                1700,
                "Hix",
                1700
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-mycolor-100 text-base mb-6 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed quia expedita. Fuga unde sapiente facilis laborum enim accusantium exercitationem adipisci maiores ipsum quis.
          </p>

          <div className="flex flex-col gap-2">
            <Link href={"/contact"}
             className="px-12 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-br from-mycolor-200 to-mycolor-100 text-white text-center"
            >
                Hire
            </Link>

            <Link href={"/"}
             className="px-12 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-br from-mycolor-100/85 to-mycolor-200/75 text-white text-center "
            >
                <span>Download CV</span>
            </Link>
          </div>

        </motion.div>

        {/*col-span 4*/}

        <motion.div
          className="col-span-4 place-self-center mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
            
            <div className="relative rounded-full bg-gradient-to-bl w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">

                <Image alt="profile-img" src={"/c-logo.png"} width={300} height={300}
                 className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                />

            </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
