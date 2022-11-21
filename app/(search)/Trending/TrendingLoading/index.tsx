import styles from "./TrendingLoading.module.scss";

const TrendingLoading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.long}></div>
            <div className={styles.short}></div>
        </div>
    )
}

export default TrendingLoading;