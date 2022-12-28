import type { TrendingItem } from "../../../../types/Trending";
import TrendingTableRowItem from "../TrendingTableRowItem";
import styles from "./TrendingTable.module.scss";

async function getTrendingData() {
    const response = await fetch(`https://apewisdom.io/api/v1.0/filter/wallstreetbets`, { next: { revalidate: 7200 } });

    if (!response.ok) {
        throw new Error('Failed to fetch from Reddit Servers');
    }

    const json = await response.json();

    if (!(!!json.results)) {
        throw new Error('Error fetching Trending List');
    }

    return json.results;
}

async function TrendingTable() {
    const results: TrendingItem[] = await getTrendingData();

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.table__header}>
                    <tr>
                        <th className={styles.mobile}></th>
                        <th>Rank</th>
                        <th>Name</th>
                        <th className={styles.mobile}>Ticker</th>
                        <th>Mentions</th>
                        <th className={styles.mobile}>Upvotes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((value) => <TrendingTableRowItem key={value.ticker} {...value}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TrendingTable;