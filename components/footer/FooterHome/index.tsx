
import styles from "./FooterHome.module.scss";
import Link from "next/link";

const FooterHome = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  )
}

export default FooterHome
