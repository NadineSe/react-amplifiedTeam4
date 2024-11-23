// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import PostUpdateForm from '../ui-components/PostUpdateForm'
import {useNavigate, useParams} from "react-router-dom";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {formStyle} from "../styles/styles.tsx";
import Loading from "../components/Loading.tsx";

export default function PostEditPage() {
    const navigate = useNavigate();
    const {postId} = useParams();
    const {route} = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Edit Post</h1>
                <PostUpdateForm
                    id={postId}
                    onSuccess={() => navigate(-1)}
                    onCancel={() => navigate(-1)}
                    overrides={{
                        userID: {
                            isReadOnly: "true",
                            isDisabled: "true",
                            display: "none"
                        },
                    }}
                    style={formStyle}
                />
            </div>
        );
    }
}
