import type { NextPage } from "next";
import Head from "next/head";

import Services from "../components/Services";
import Hero from "../components/Hero";
import Header from "../components/Header";
import OurWork from "../components/OurWork";
import Contacts from "../components/Contacts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art & Talento</title>
      </Head>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <OurWork />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
