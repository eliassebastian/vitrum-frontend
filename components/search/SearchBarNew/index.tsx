import styles from "./SearchBarNew.module.scss";
import {useEffect, useRef, useState} from "react";

const SearchBarNew = () => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onFocus = (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
    if (!ref.current || focused) return
    event.preventDefault();
    event.stopPropagation();

    setFocused(true);
    ref.current.focus({preventScroll: true});
    window.scrollTo(0,0);
  }

  // useEffect(() => {
  //   if (ref.current && focused) {
  //     window.scrollTo(0,0);
  //   }
  // }, [focused])

  return (
    <form className={`${ focused ? styles.form__focused : styles.form }`} action={"/search"} role={"search"} method={"GET"}>
      <div className={`${ focused ? styles.wrapper : styles.wrapper }`}>
        <button
          className={styles.left__button}
          aria-label={"Search"}
          type={"button"}
          onClick={onFocus}
          tabIndex={-1}
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"/>
            </svg>
          </span>
        </button>

        <input
          ref={ref}
          className={styles.input}
          onInvalid={(event) => {event.preventDefault()}}
          required={true}
          name={"q"}
          type={"text"}
          autoComplete={"off"}
          autoCorrect={"off"}
          placeholder={"Reddit URL"}
          spellCheck={"false"}
          //onClick={onFocus}
          // onChange={handleChange}
          //onFocus={onFocus}
        />

        <button
          className={styles.clear__button}
          aria-label={"Clear Search"}
          type={"button"}
          //onClick={clearValue}
          tabIndex={-1}
        >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
              </svg>
            </span>
        </button>

      </div>
      {/*buttons - hide on focus*/}
      <div>

      </div>
    </form>
  )
}

export default SearchBarNew