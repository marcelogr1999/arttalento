// import type { NextPage } from "next";
import Head from "next/head";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Header from "../components/Header";
import OurWork from "../components/OurWork";
import Contacts from "../components/Contacts";
import { GetHomeDocument, GetHomeQuery, HomePage } from "../graphql/generated";
import { client } from "../lib/apollo";
import { useRef } from "react";
import Commission from "../components/Commission";

const Home = ({ hero, ourWork, service, contact }: HomePage) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const ourWorkRef = useRef<HTMLDivElement>(null);
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
        <Hero {...hero} />
        <Services ref={servicesRef} {...service} />
        <OurWork ref={ourWorkRef} {...ourWork} />
        <Contacts ref={contactsRef} {...contact} />
      </main>
      <Commission />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<GetHomeQuery>({
    query: GetHomeDocument,
  });

  return {
    props: {
      ...data.homePage,
    },
  };
}

export default Home;
