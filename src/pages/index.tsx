// import type { NextPage } from "next";
import Head from "next/head";

import Services from "../components/Services";
import Hero from "../components/Hero";
import Header from "../components/Header";
import OurWork from "../components/OurWork";
import Contacts from "../components/Contacts";
import { Job, GetJobsDocument } from "../graphql/generated";
import { client } from "../lib/apollo";
import { useRef } from "react";

interface HomePageProps {
  jobs: Job[];
}

const Home = ({ jobs }: HomePageProps) => {
  const servicesRef = useRef<null | HTMLDivElement>(null);
  const ourWorkRef = useRef<null | HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const executeServicesScroll = () =>
    servicesRef?.current && servicesRef.current.scrollIntoView();

  const executeOurWorkScroll = () =>
    ourWorkRef?.current && ourWorkRef.current.scrollIntoView();

  const executeContactsScroll = () =>
    contactsRef?.current && contactsRef.current.scrollIntoView();

  return (
    <>
      <Head>
        <title>Art & Talento</title>
      </Head>
      <Header
        executeServicesScroll={executeServicesScroll}
        executeOurWorkScroll={executeOurWorkScroll}
        executeContactsScroll={executeContactsScroll}
      />
      <main className="main">
        <Hero />
        <Services ref={servicesRef} />
        <OurWork ref={ourWorkRef} jobs={jobs} />
        <Contacts ref={contactsRef} />
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
