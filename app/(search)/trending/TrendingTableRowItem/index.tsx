import { TrendingItem } from "../../../../types/Trending";
import unescape from "../../../../utils/strings/unescape";
import TrendingTableRank from "../TrendingTableRank";
import styles from "./TrendingTableRowItem.module.scss";

const TrendingTableRowItem = (props: TrendingItem) => {
    const mentionsMovement = !!props.mentions_24h_ago ? Math.round(((+props.mentions - +props.mentions_24h_ago) / +props.mentions_24h_ago) * 100) : null;
    const mentionsPosNeg = mentionsMovement ? Math.sign(mentionsMovement) : "-";
    //console.log("mentionsMovement", mentionsMovement)

    const decoded = unescape(props.name);

    return (
        <tr className={styles.row}>
            <td className={styles.mobile}>
                <TrendingTableRank currentRank={props.rank} previousRank={props.rank_24h_ago}/>
            </td>
            <td className={styles.center}>{props.rank}</td>
            <td>{decoded}</td>
            <td className={styles.mobile}>{props.ticker}</td>
            <td className={styles.center}>
                {
                    mentionsPosNeg === "-" ? <span>-</span> : <span className={`${ mentionsPosNeg > 0 ? styles.up : styles.down }`}>{mentionsMovement}%</span>
                }
            </td>
            <td className={`${styles.mobile} ${styles.center}`}>{props.upvotes}</td>
        </tr>
    )
}

export default TrendingTableRowItem;