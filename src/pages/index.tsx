import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Filters from "../components/control-menu/Filters";
import NewsCard from "../components/news/NewsCard";
import NewsContainer from "../containers/NewsContainer";

const Home: NextPage = () => {
  return (
    <div className={"container"}>
      <Head>
        <title>Involta Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsContainer />
    </div>
  )
}

export default Home
