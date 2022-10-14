import styles from "./SearchBar.module.scss"

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form action={"/search"} role={"search"} method={"GET"}>
        <div>
          <div className={styles.inner__container}>
            <div className={styles.input__wrapper}>
              <div className={styles.input__padding__wrapper}>
                <button className={styles.search__button}>
                  <div>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"/>
                      </svg>
                    </span>
                  </div>
                </button>
                <div className={styles.input__box}>
                  <div></div>
                  <input name={"q"} type={"text"} autoComplete={"off"} autoCorrect={"off"} placeholder={"Reddit URL"} autoFocus={true} spellCheck={"false"}/>
                </div>
                <button className={styles.clear__button}>
                  <div>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar