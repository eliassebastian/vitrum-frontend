import styles from "./HeaderHome.module.scss";
import Link from "next/link";

const HeaderHome = () => {
  return (
    <header className={styles.header}>
      <Link href={"/about"}>
        About
      </Link>
    </header>
  )
}

export default HeaderHome