import SearchSentimentLoading from "../SearchSentimentLoading";
import styles from "./SearchRedditSentimentLoading.module.scss";

const SearchRedditSentimentLoading = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Discussion Sentiment Data</h1>
            <SearchSentimentLoading/>
        </div>
    )
}

export default SearchRedditSentimentLoading;