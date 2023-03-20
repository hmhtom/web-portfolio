import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "@/utils/store";

import ContentContainer from "@/components/ContentContainer";

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Alex He | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer />
    </Provider>
  );
}
