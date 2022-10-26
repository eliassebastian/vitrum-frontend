import { useQuery } from "@tanstack/react-query";
import { searchPostAPI } from "../../../api/SearchPostAPI";
import SearchPreview from "../SearchPreview";
import SearchLoadingPreview from "../SearchPreviewLoading";
import styles from "./SearchNew.module.scss";

interface SearchNewProps {
    id: string
}

const SearchNew = ({id}: SearchNewProps) => {

    const { isLoading, isError, data, error } = useQuery([id], () => searchPostAPI(id));
    const primaryData = data?.data.children[0].data;

    //TODO: sequence query based on primary data
    //const {  } = useQuery([id], () => searchPostAPI(id));

    console.log(primaryData)

    return (
        <>
            { isLoading && <SearchLoadingPreview/> }
            { (!isLoading && !!primaryData) && 
            <SearchPreview 
                title={primaryData.title} 
                thumbnail={primaryData.thumbnail} 
                permalink={primaryData.url} 
                author={primaryData.author} 
                time={primaryData.created_utc}
                upvotes={primaryData.ups}
                comments={primaryData.num_comments}
                ratio={primaryData.upvote_ratio}
            /> }
        </>
        // {/* isLoading Status */}
        // {/* isError Status */}
    )
}

export default SearchNew;