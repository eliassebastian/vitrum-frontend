import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import SearchLayout from "../../components/layout/SearchLayout";
import SearchDefault from "../../components/search/SearchDefault";
import SearchNew from "../../components/search/SearchNew";
import type { NextPageWithLayout } from '../_app';
import styles from "./Search.module.scss";

const Search: NextPageWithLayout = () => {
  const router = useRouter();
  const {q}: {q?: string | undefined} = router.query;

  return (
    <>
    <Head>
        <title>Vitrum - Search</title>
        <meta name="description" content="TODO: Meta Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.page}>
      <div className={styles.container}>
        {typeof q === 'undefined' && <SearchDefault/>}
        {(typeof q !== 'undefined' && q.length !== 0) && <SearchNew id={q}/>}
      </div>
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