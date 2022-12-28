import { TrendingItem } from "../../../../types/Trending";
import unescape from "../../../../utils/strings/unescape";
import TrendingTableRank from "../TrendingTableRank";
import styles from "./TrendingTableRowItem.module.scss";

const TrendingTableRowItem = (props: TrendingItem) => {
    const mentionsMovement = !!props.mentions_24h_ago ? Math.round(((+props.mentions - +props.mentions_24h_ago) / +props.mentions_24h_ago) * 100) : null;
    //console.log("mentionsMovement", mentionsMovement)

    const rankMovement = !!props.rank_24h_ago ? (+props.rank_24h_ago - props.rank) : null
    //console.log(props.rank, "rankMovement", rankMovement, +props.rank_24h_ago)

    const decoded = unescape(props.name);

    return (
        <tr className={styles.row}>
            <td className={styles.mobile}>
                <TrendingTableRank currentRank={props.rank} previousRank={props.rank_24h_ago}/>
            </td>
            <td className={styles.center}>{props.rank}</td>
            <td>{decoded}</td>
            <td className={styles.mobile}>{props.ticker}</td>
            <td className={styles.center}>{mentionsMovement || "-"}</td>
            <td className={`${styles.mobile} ${styles.center}`}>{props.upvotes}</td>
        </tr>
    )
}

export default TrendingTableRowItem;