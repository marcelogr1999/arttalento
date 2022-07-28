// import type { NextPage } from "next";
import Head from "next/head";

import Services from "../components/Services";
import Hero from "../components/Hero";
import Header from "../components/Header";
import OurWork from "../components/OurWork";
import Contacts from "../components/Contacts";
import { Job, GetJobsDocument } from "../graphql/generated";
import { client } from "../lib/apollo";

interface HomePageProps {
  jobs: Job[];
}

const Home = ({ jobs }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Art & Talento</title>
      </Head>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <OurWork jobs={jobs} />
        <Contacts />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GetJobsDocument,
  });
  return {
    props: {
      jobs: data?.jobs,
    },
  };
}

export default Home;
