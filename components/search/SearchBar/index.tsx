import styles from "./SearchBar.module.scss"
import {useRef, useState} from "react";
import SearchBarInput from "../SearchBarInput";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <form action={"/search"} role={"search"} method={"GET"}>
        <div>
          <div className={styles.inner__container}>
            <div className={styles.input__wrapper}>
              <SearchBarInput ref={inputRef}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar