import styles from "./SearchBar.module.scss"
import {useRef, useState} from "react";
import SearchBarInput from "../SearchBarInput";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form action={"/search"} role={"search"} method={"GET"}>
        <div>
          <div className={styles.inner__container}>
            <div className={styles.input__wrapper}>
              <SearchBarInput/>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar