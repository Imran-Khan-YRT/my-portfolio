import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex justify-evenly items-center max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-2xl -mb-20">
        About
      </h3>
      <div className="flex flex-col items-center">
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          src="/heroImage.jpg"
          alt="image"
          className="w-56 h-56 rounded-full object-cover"
        />
        <div className="flex flex-col items-center pt-20">
          <h4 className="text-4xl font-semibold text-gray-500">
            Here's a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base text-gray-400 pt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aut
            ipsam eum. Labore, dolore ipsum asperiores dolorum maxime ex
            eligendi harum veniam quod similique, nisi tempora, et voluptatum.
            Sint, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero delectus error ex iste quisquam quo magnam, tempora
            nulla iusto et repellat laboriosam mollitia perspiciatis facilis,
            nesciunt sequi exercitationem modi ullam! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Maiores facilis quis quidem fugit
            aut incidunt adipisci. Soluta fugiat expedita quasi in totam optio,
            quisquam obcaecati quia, perspiciatis amet saepe quibusdam.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
