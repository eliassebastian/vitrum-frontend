import SearchBarNew from "../../search/SearchBar";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
    return (
        <header className={styles.header}>
            <div className={styles.text}>
                <h1>VITRUM</h1>
            </div>
            <div className={styles.search}>
                <SearchBarNew/>
            </div>
        </header>
    )
}

export default HeaderSearch