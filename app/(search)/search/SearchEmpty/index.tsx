import styles from "./SearchEmpty.module.scss";

const SearchEmpty = () => {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.container}>
                <span>Sorry, you just performed an empty search so we have nothing to show you.</span>
                <span>Try a new search!</span>
            </h4>
        </div>
    )
}

export default SearchEmpty;