'use client';

import Link from "next/link";
import { useState } from "react";
import styles from "./MobileHeader.module.scss";

const MobileHeader = () => {

    const [isNavOpen, setNavOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <Link href={"/"}>
                    VITRUM
                </Link>
                <div>
                    <button onClick={() => setNavOpen( value => !value )}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                </div>
            </header>
            {
                isNavOpen && <nav></nav>
            }
        </>
    )
}

export default MobileHeader