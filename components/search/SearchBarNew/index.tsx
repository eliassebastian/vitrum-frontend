'use client';

import { FormEvent, useCallback, useRef, useState } from "react";
import styles from "./SearchBarNew.module.scss";

const SearchBarNew = () => {
    const [ focused, setFocused ] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState("");

    const selectRef = useRef<HTMLSelectElement>(null);
    const [ selected, setSelected ] = useState("query");

    const onSelectChange = useCallback(() => {
        const data = selectRef.current?.value;
        if (!data) return
        setSelected(data);
    }, [])

    const onInputChange = (event: FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setInputValue(value);
    }

    const onFocus = (event: FormEvent) => {
        if (!inputRef.current || focused || window.matchMedia("(pointer: fine), (hover: hover)").matches) return
        event.preventDefault();
        event.stopPropagation();
    
        setFocused(true);
        inputRef.current.focus({preventScroll: true});
        window.scrollTo(0,0);
    }
    
    const onBlur = () => {
        if (!inputRef.current || !focused) return
        setFocused(false);
        inputRef.current.blur();
    }
    
    const clearValue = () => {
        if (!inputRef.current) return;
        setInputValue("");
        inputRef.current.focus({preventScroll: true});
    }

    return (
        <div className={`${ focused ? styles.wrapper__focused : styles.wrapper }`}>
            {
                focused && 
                <div className={styles.query_touch}>
                    <div className={styles.query__overflow}>
                        <div className={styles.query__title}>
                            <div className={styles.query__container}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                                </svg>
                                <span>Query Type</span>
                            </div>
                        </div>
                        {/* <div className={styles.query__divider}></div> */}
                        <div>
                            <div className={`${styles.query__chip__selected} ${styles.query__container}`}>
                                <span>Query</span>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.query__chip} ${styles.query__container}`}>
                                <span>Reddit</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <form className={`${ focused ? styles.form__focused : styles.form }`}>
                {/* Select */}
                <div className={styles.left}>
                    <button className={styles.left__wrapper}>
                        <h4>{selected}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <select ref={selectRef} onChange={onSelectChange} value={selected} className={styles.select}>
                        <option value={"query"}>Query</option>
                        <option value={"reddit"}>Reddit</option>
                    </select>
                </div>

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

                {/* Input */}
                <div className={`${ focused ? styles.middle__focused : styles.middle }`}>
                    <input
                    ref={inputRef} 
                    placeholder="Begin Search"
                    onInvalid={(event) => {event.preventDefault()}}
                    required={true}
                    name={"q"}
                    type={"text"}
                    autoComplete={"off"}
                    autoCorrect={"off"}
                    spellCheck={"false"}
                    value={inputValue}
                    onChange={onInputChange}
                    onPointerDown={onFocus}
                    >
                    </input>
                    {
                        inputValue.length > 0 && 
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
                {/* Search Button */}
                <div className={styles.right}>
                    <button
                        className={styles.right__button}
                        aria-label={"Search"}
                        type={"submit"}
                        //onClick={onFocus}
                    >
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"/>
                        </svg>
                        </span>
                    </button>
                </div>
            </form>
            {/* Drop Down */}
        </div>
    )
}

export default SearchBarNew

