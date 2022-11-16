import SearchBarNew from "../../components/search/SearchBar";
import styles from "./Home.module.scss";

export default function Page() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <SearchBarNew/>
            </div>
        </section>
    )
}