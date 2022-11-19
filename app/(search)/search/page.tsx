import type { RedditPost } from "../../../types/RedditPost";
import styles from "./SearchPage.module.scss";
import SearchResultItem from "./SearchResultItem";

async function getRedditData(id: string) {
    //cache for 10 minutes before revalidating
    const res = await fetch(`https://api.reddit.com/api/info/?id=t3_${id}`, { next: { revalidate: 600 } });

    if (!res.ok) {
        throw new Error('Failed to fetch from Reddit Servers');
    }

    const json = await res.json();

    //could combine both checks into one but for user feedback purposes check for length and then existing data
    if (json.data.children.length === 0) {
        throw new Error('Invalid Wallstreetbets Discussion Link')
    }

    const post = json.data.children[0].data;
    
    if (!(!!post)) {
        throw new Error('Error Reading Wallstreetbets Thread')
    }

    return {
        title: post.title,
        author: post.author,
        thumbnail: post.url,
        permalink: post.permalink,
        time: post.created_utc,
        upvotes: post.ups,
        comments: post.num_comments,
        ratio: post.upvote_ratio    
    } as RedditPost;
}

export default async function Page({ searchParams }: { searchParams: { q: string } }) {
    let results

    if (typeof searchParams.q !== 'undefined') {
        results = await getRedditData(searchParams.q) as RedditPost;
    }

    return (
        <div className={styles.container}>
            {
                typeof results !== 'undefined' && <SearchResultItem {...results}/>
            }
            {
                typeof results === 'undefined' && <h4>Paste Full Reddit URL To Begin</h4>
            }
        </div>
    )
    
}