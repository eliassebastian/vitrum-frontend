import { Suspense } from "react";
import styles from "./TrendingPage.module.scss";
import TrendingTable from "./TrendingTable";

export default async function Page() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trending Stocks on r/wallstreetbets</h2>
            <Suspense fallback={<span>Loading</span>}>
                {/* @ts-expect-error Server Component */}
                <TrendingTable/>
            </Suspense>
        </div>
    ) 
}



