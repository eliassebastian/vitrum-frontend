import styles from "./SearchBarNew.module.scss";
import {FormEvent, MouseEvent, useRef, useState} from "react";

const SearchBarNew = () => {
  const [focused, setFocused] = useState(false);
  const [isEmpty, setEmptyState] = useState(true);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (value.length > 0 && isEmpty) {
      setEmptyState(false)
      return
    }

    if (value.length === 0 && !isEmpty) {
      setEmptyState(true)
      return
    }
  }

  const onFocus = (event: FormEvent) => {
    if (!ref.current || focused || window.matchMedia("(pointer: fine), (hover: hover)").matches) return
    event.preventDefault();
    event.stopPropagation();

    setFocused(true);
    ref.current.focus({preventScroll: true});
    window.scrollTo(0,0);
  }

  const onBlur = (event: FormEvent) => {
    if (!ref.current || !focused) return
    setFocused(false);
    ref.current.blur();
  }

  const clearValue = (event: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    setEmptyState(true);
    ref.current.focus({preventScroll: true});
    ref.current.value = "";
  }

  return (
    <form className={`${ focused ? styles.form__focused : styles.form }`} action={"/search"} role={"search"} method={"GET"}>
      <div className={`${ focused ? styles.wrapper__focused : styles.wrapper }`}>
        {
          !focused &&
          <button
            className={styles.left__button}
            aria-label={"Search"}
            type={"button"}
            onClick={onFocus}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"/>
              </svg>
            </span>
          </button>
        }

        {
          focused &&
          <button
            className={styles.left__button}
            aria-label={"Back"}
            type={"button"}
            onClick={onBlur}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"/>
              </svg>
            </span>
          </button>
        }

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
          onChange={handleChange}
          onPointerDown={onFocus}
        />

        {
          !isEmpty &&
          <button
            className={styles.clear__button}
            aria-label={"Clear Search"}
            type={"button"}
            onClick={clearValue}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
              </svg>
            </span>
          </button>
        }
      </div>
      {/*buttons - hide on focus*/}
      <div>

      </div>
    </form>
  )
}

export default SearchBarNew