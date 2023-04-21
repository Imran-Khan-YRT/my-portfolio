import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header />
      {/* Hero */}

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/*  Projects*/}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
