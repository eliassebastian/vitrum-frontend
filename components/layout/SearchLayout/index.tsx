import type { ReactNode } from "react";
import HeaderSearch from "../../header/HeaderSearch";
import styles from "./SearchLayout.module.scss";

const SearchLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <HeaderSearch/>
            {children}
        </div>
    )
}

export default SearchLayout