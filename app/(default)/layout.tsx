import Link from "next/link";
import type { ReactNode } from "react";
import DefaultHeader from "./Header";
import styles from "./style.module.scss";

export default function DefaultLayout({children}: {children: ReactNode}) {
    return (
        <div className={styles.page__container}>
            <DefaultHeader/>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <div className={styles.footer__firstrow}>
                    <div className={styles.container}>
                        <Link href={"/about"}>
                            How Vitrum Works
                        </Link>
                    </div>
                    <div style={{display: "flex", gap: "1rem"}}>
                        <Link href={"/privacy"}>
                            Privacy
                        </Link>
                        <Link href={"/Terms"}>
                            Terms
                        </Link>
                    </div>
                </div>
                <div className={styles.footer__secondrow}>
                    <h4>Made with &#10084;&#65039; in Edinburgh</h4>
                </div>
            </footer>
        </div>
    )
}