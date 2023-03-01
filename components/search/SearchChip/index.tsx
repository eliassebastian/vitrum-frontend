'use client';

import styles from "./SearchChip.module.scss";
import { Dispatch, SetStateAction } from "react";


interface SearchChipProps {
    title: string
    selected: boolean
    setSelected: Dispatch<SetStateAction<string>>
}


const SearchChip = ( { title, selected, setSelected }: SearchChipProps ) => {
    return (
        <button role={"tab"} aria-selected={selected} onClick={() => setSelected(title.toLowerCase())} >
            <span className={` ${styles.chip__container} ${ selected ? styles.chip__selected : styles.chip } `}>
                { title }
            </span>
        </button>
    )
}

export default SearchChip