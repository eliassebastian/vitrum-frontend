import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "./Footer";
import DefaultHeader from "./Header";
import styles from "./style.module.scss";

export default function DefaultLayout({children}: {children: ReactNode}) {
    return (
        <div className={styles.page__container}>
            <DefaultHeader/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}