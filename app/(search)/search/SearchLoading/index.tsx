import styles from "./SearchLoading.module.scss";

const SearchLoading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.animate}>
                <div className={styles.first__row}>
                    <div className={styles.image}></div>
                    <div className={styles.data}>
                        <div className={styles.long}></div>
                        <div className={styles.short}></div>
                    </div>
                </div>
                <div className={styles.image__placeholder}></div>
                <div className={styles.grid}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default SearchLoading;

