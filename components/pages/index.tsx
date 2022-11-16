import type { NextPage } from 'next';
import Head from 'next/head';
import SearchBarNew from "../search/SearchBar";
import HeaderHome from "../header/HeaderHome";
import FooterHome from "../footer/FooterHome";
import styles from '../styles/Home.module.scss';

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
        <div className={styles.wrapper}>
          <SearchBarNew/>
        </div>
      </main>
      <FooterHome/>
    </div>
  )
}

export default Home
