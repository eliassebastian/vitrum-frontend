import styles from "./SearchPreviewLoading.module.scss";

const SearchLoadingPreview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner__container}>
                <div className={styles.image}></div>
                <div className={styles.info__wrapper}>
                    <div className={styles.title}></div>
                    <div className={styles.grid__wrapper}>
                        <div className={styles.grid__one}>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.grid__two}>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.title}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchLoadingPreview