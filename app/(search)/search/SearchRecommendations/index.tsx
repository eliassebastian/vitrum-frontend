import SearchRecommendationsLoading from "../SearchRecommendationsLoading";
import styles from "./SearchRecommendations.module.scss";

const SearchRecommendations = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Similar Discussions</h2>
            <div className={styles.list}>
                <SearchRecommendationsLoading/>
                <SearchRecommendationsLoading/>
                <SearchRecommendationsLoading/>
            </div>
        </div>
    )
}

export default SearchRecommendations