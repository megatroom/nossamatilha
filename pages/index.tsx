import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/templates/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossa Matilha</title>
        <meta name="description" content="Passeios educativos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
