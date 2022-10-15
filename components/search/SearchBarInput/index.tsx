import {ForwardedRef, forwardRef, useState} from "react";
import styles from "./SearchBarInput.module.scss";

const SearchBarInput = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
  const inputValue = useState("");
  return (
    <input ref={ref} className={styles.input} name={"q"} type={"text"} autoComplete={"off"} autoCorrect={"off"} placeholder={"Reddit URL"} autoFocus={true} spellCheck={"false"}/>
  )
})

export default SearchBarInput