import Head from "next/head";

import { HomeTemplate } from "@/templates";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ponto Ilumeo</title>
      </Head>
      <HomeTemplate />
    </>
  );
}
