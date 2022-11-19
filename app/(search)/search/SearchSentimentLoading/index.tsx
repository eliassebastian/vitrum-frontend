import styles from "./SearchSentimentLoading.module.scss";

const SearchSentimentLoading = () => {
    return (
        <div className={styles.lds__ellipsis}><div></div><div></div><div></div><div></div></div>
    )
}

export default SearchSentimentLoading;