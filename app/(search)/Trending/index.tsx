import styles from "./Trending.module.scss";
import TrendingLoading from "./TrendingLoading";

const Trending = () => {
    return (
        <aside className={styles.container}>
            <h2 className={styles.container__title}>Trending</h2>
            <div className={styles.results__wrapper}>
                <TrendingLoading/>
                <TrendingLoading/>
                <TrendingLoading/>
                <TrendingLoading/>
                <TrendingLoading/>
                <TrendingLoading/>
            </div>
        </aside>
    )
}

export default Trending;