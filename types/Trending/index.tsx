export type TrendingItem = {
    rank: number,
    ticker: string,
    name: string,
    mentions: string,
    upvotes: string,
    rank_24h_ago: string,
    mentions_24h_ago: string | null
}