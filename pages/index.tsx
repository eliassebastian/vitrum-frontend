import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from "../components/search/SearchBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitrum</title>
        <meta name="description" content="TODO: Meta Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchBar/>
      </main>
    </div>
  )
}

export default Home
