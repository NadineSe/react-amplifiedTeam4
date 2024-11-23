// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useState} from 'react'
import {useAuthenticator} from "@aws-amplify/ui-react";
import {collectionStyle, formStyle} from "../styles/styles.tsx"
import Loading from "../components/Loading.tsx";
import MyPostCollectionOverwrite from "../components/MyPostCollectionOverwrite";
import MyCreateNewPost from "../ui-components/MyCreateNewPost";
import {useAuthUser} from "../services/userService.tsx";
import {cardOverwrite} from "./PostsPage";
import {CreatePostForm} from "../components/CreatePostForm";

export default function MyPosts() {
    const {route} = useAuthenticator((context) => [context.route]);
    const user = useAuthUser();

    const [isVisible, setIsVisible] = useState(false)

    function openForm() {
        setIsVisible(true)
    }

    if (route !== 'authenticated' || user === undefined) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>My Posts</h1>
                <CreatePostForm
                    isVisible={isVisible}
                    userID={user.sub}
                />
                <MyCreateNewPost
                    style={formStyle}

                    overrides={{
                        "Button": {onClick: () => openForm()},
                    }}
                />
                <MyPostCollectionOverwrite
                    templateColumns={collectionStyle.templateColumns}
                    userID={user.sub}
                    overrideItems={cardOverwrite}
                    isVisible={!isVisible}
                />
            </div>
        );
    }
}
