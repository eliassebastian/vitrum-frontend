import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from "../components/search/SearchBar";
import SearchBarNew from "../components/search/SearchBarNew";
import HeaderHome from "../components/header/HeaderHome";
import FooterHome from "../components/footer/FooterHome";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitrum</title>
        <meta name="description" content="TODO: Meta Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderHome/>
      <main className={styles.main}>
        <SearchBarNew/>
      </main>
      <FooterHome/>
    </div>
  )
}

export default Home
