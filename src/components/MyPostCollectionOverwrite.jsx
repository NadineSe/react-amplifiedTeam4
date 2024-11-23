/***************************************************************************
 Overwritten version of the Amplify component
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listPosts } from "../graphql/queries";
import MyCommentCard from "../ui-components/MyCommentCard";
import {getOverrideProps, useNavigateAction} from "../ui-components/utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
// Additional imports
import {useUserImage, useUserName} from "../services/userService";

const nextToken = {};
const apiCache = {};
const client = generateClient();
export default function MyPostCollectionOverwrite(props) {
    // Additional prop userID
    const { items: itemsProp, userID, overrideItems, overrides, ...rest } = props;
    const [pageIndex, setPageIndex] = React.useState(1);
    const [hasMorePages, setHasMorePages] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [isApiPagination, setIsApiPagination] = React.useState(false);
    const [instanceKey, setInstanceKey] = React.useState("newGuid");
    const [loading, setLoading] = React.useState(true);
    const [maxViewed, setMaxViewed] = React.useState(1);
    const pageSize = 6;
    const isPaginated = false;
    React.useEffect(() => {
        nextToken[instanceKey] = "";
        apiCache[instanceKey] = [];
    }, [instanceKey]);
    React.useEffect(() => {
        setIsApiPagination(!!!itemsProp);
    }, [itemsProp]);
    const handlePreviousPage = () => {
        setPageIndex(pageIndex - 1);
    };
    const handleNextPage = () => {
        setPageIndex(pageIndex + 1);
    };
    const jumpToPage = (pageNum) => {
        setPageIndex(pageNum);
    };
    const loadPage = async (page) => {
        const cacheUntil = page * pageSize + 1;
        const newCache = apiCache[instanceKey].slice();
        let newNext = nextToken[instanceKey];
        while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
            setLoading(true);
            const variables = {
                limit: pageSize,

                // updated filter criteria
                filter: { userID: { eq: userID } },
            };
            if (newNext) {
                variables["nextToken"] = newNext;
            }
            const result = (
                await client.graphql({
                    query: listPosts.replaceAll("__typename", ""),
                    variables,
                })
            ).data.listPosts;
            newCache.push(...result.items);
            newNext = result.nextToken;
        }
        const cacheSlice = isPaginated
            ? newCache.slice((page - 1) * pageSize, page * pageSize)
            : newCache;
        setItems(cacheSlice);
        setHasMorePages(!!newNext);
        setLoading(false);
        apiCache[instanceKey] = newCache;
        nextToken[instanceKey] = newNext;
    };
    React.useEffect(() => {
        loadPage(pageIndex);
    }, [pageIndex]);
    React.useEffect(() => {
        setMaxViewed(Math.max(maxViewed, pageIndex));
    }, [pageIndex, maxViewed, setMaxViewed]);

    // Additional functions
    const navigateToPost = (post) => useNavigateAction({
        type: "url",
        url: `${"/post/"}${post?.id}`,
    });

    return (
        <div>
            <Collection
                type="grid"
                templateColumns="1fr 1fr"
                autoFlow="row"
                alignItems="stretch"
                justifyContent="stretch"
                itemsPerPage={pageSize}
                isPaginated={!isApiPagination && isPaginated}
                items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
                {...getOverrideProps(overrides, "MyPostCollectionOverwrite")}
                {...rest}
            >
                {(item, index) => {
                    if (loading) {
                        return <Placeholder key={index} size="large" />;
                    }
                    return (
                        <MyCommentCard
                            post={item}
                            key={item.id}
                            // Additional Attributes
                            name={useUserName(item.userID)}
                            image={useUserImage(item.userID)}
                            onClick={navigateToPost(item)}

                            {...(overrideItems && overrideItems({ item, index }))}
                        ></MyCommentCard>
                    );
                }}
            </Collection>
            {isApiPagination && isPaginated && (
                <Pagination
                    currentPage={pageIndex}
                    totalPages={maxViewed}
                    hasMorePages={hasMorePages}
                    onNext={handleNextPage}
                    onPrevious={handlePreviousPage}
                    onChange={jumpToPage}
                />
            )}
        </div>
    );
}