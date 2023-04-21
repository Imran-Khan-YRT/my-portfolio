import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className=" relative flex justify-center items-center"
    >
      <div className=" absolute h-[200px] w-[200px] border border-[#333333] rounded-full animate-ping mt-52" />
      <div className=" absolute h-[300px] w-[300px] border border-[#333333] rounded-full animate-ping mt-52" />
      <div className=" absolute h-[500px] w-[500px] border border-[#333333] rounded-full animate-ping mt-52" />
      <div className=" absolute h-[650px] w-[650px] border border-[#F7AB0A] rounded-full animate-pulse mt-52 opacity-20" />
      <div className=" absolute h-[800px] w-[800px] border border-[#333333] rounded-full animate-ping mt-52" />
      <div />
    </motion.div>
  );
};

export default BackgroundCircles;
