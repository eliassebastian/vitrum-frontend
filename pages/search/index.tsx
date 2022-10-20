import Head from "next/head";
import type { ReactElement } from "react";
import SearchLayout from "../../components/layout/SearchLayout";
import type { NextPageWithLayout } from '../_app';
import styles from "./Search.module.scss";

const Search: NextPageWithLayout = () => {
  return (
    <>
    <Head>
        <title>Vitrum - Search</title>
        <meta name="description" content="TODO: Meta Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.page}>

    </main>
    </>
  )
}

Search.getLayout = function getLayout(page: ReactElement) {
    return (
      <SearchLayout>
        {page}
      </SearchLayout>
    )
  }

export default Search