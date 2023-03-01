import dynamic from "next/dynamic";
import { Suspense } from "react";
import SearchBar from "../../components/search/SearchBar";
import SearchBarNew from "../../components/search/SearchBarNew";
import styles from "./Home.module.scss";

// const DynamicSearchBar = dynamic(() => import("../../components/search/SearchBar"), {
//     suspense: true,
// })

export default function Page() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>VITRUM</h2>
                {/* <SearchBar/> */}
                <SearchBarNew/>
            </div>
        </section>
    )
}