import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { RedditPost } from "../../../../types/RedditPost";
import { timeAgo } from "../../../../utils/time/formatTime";
import SearchSentimentLoading from "../SearchSentimentLoading";
import styles from "./SearchResultItem.module.scss";


const SearchResultItem = ( props: RedditPost ) => {

    let defaultImage = "/wsb_icon.png";

    if (props.thumbnail.search("i.redd.it") > -1) {
        defaultImage = props.thumbnail;
    }

    const formatTime = timeAgo(props.time * 1000);

    return (
        <div className={styles.container}>
            {/* First Row */}
            <div className={styles.first__row}>
                <div className={styles.user__image}>
                    <Image src={"/wsb_icon_new.png"} fill alt={"wsb icon"}/>
                </div>
                <div className={styles.post__data}>
                    <h2 className={styles.post__title}>{props.title}</h2>
                    <div className={styles.post__subtitle}>
                        <Link href={`https://www.reddit.com/user/${props.author}/`} target="_blank" rel="noreferrer">{`u/${props.author}`}</Link>
                        <span>·</span>
                        <span>{formatTime}</span>
                    </div>
                </div>
                <div className={styles.post__visit}>
                    <Link href={`https://reddit.com${props.permalink}`} target={"_blank"} rel={"norefferer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Image */}
            <div className={styles.post__thumbnail__wrapper}>
                <Link href={props.thumbnail} target={"_blank"} rel={"norefferer"}>
                    <img loading={"lazy"} src={defaultImage} alt="post thumbnail"/>
                </Link>
            </div>
            {/* Icons and Data */}
            <div className={styles.post__stats}>
                <div className={styles.info__item} title="Upvotes">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                        </svg>
                    </div>
                    <span>{props.upvotes}</span>
                </div>
                <div className={styles.info__item} title="Upvote Ratio">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span>{props.ratio}</span>
                </div>
                <div className={styles.info__item} title="Comments">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                        </svg>
                    </div>
                    <span>{props.comments}</span>
                </div>
            </div>
            <div className={styles.divider}></div>
            <SearchSentimentLoading/>
            {/* Sentiment Fetch Suspense */}
            <Suspense>

            </Suspense>
        </div>
    )
}

export default SearchResultItem