import styles from "./SearchBar.module.scss"
import {useRef, useState} from "react";
import SearchBarInput from "../SearchBarInput";

const SearchBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    if (!ref.current || !window.matchMedia("(hover:none), (pointer:coarse)").matches) return
    setFocused(true);
    ref.current.scrollTop = 0;
  }

  const onBlur = () => {
    if (!focused) return
    setFocused(false);
  }

  return (
    <div className={styles.container}>
      <form action={"/search"} role={"search"} method={"GET"} className={styles.form}>
        <div>
          <div ref={ref} className={`${focused ? styles.inner__container__focus : styles.inner__container}`}>
            <div className={`${styles.input__wrapper} ${focused ? styles.input__wrapper__focus : ''}`}>
              <SearchBarInput onBlur={onBlur} onFocus={onFocus} focused={focused}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar