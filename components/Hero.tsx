import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Imran",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <div className=" relative w-32 h-32">
        <Image
          src="/heroImage.jpg"
          alt="image"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="z-20">
        <h2 className="uppercase text-sm tracking-[15px] text-gray-500 pb-2">
          Software Engineer
        </h2>
        <h1 className="font-semibold text-5xl xl:text-6xl px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
