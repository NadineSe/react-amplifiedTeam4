// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import PostCreateForm from "../ui-components/PostCreateForm";
import {formOverlayContainerStyle, formStyle} from "../styles/styles.tsx";
import {PostCreateFormInputValues} from "../ui-components/PostCreateForm";

export function CreatePostForm(props: {isVisible: boolean, userID: string}) {
    const {isVisible, userID} = props

    const postCreateOverwrite = {
        userID: {
            isReadOnly: "true",
            isDisabled: "true",
            display: "none",
            value: userID
        },
    }
    if (isVisible && userID !== undefined) {
        return (
            <div
                style={formOverlayContainerStyle}
            >
                <PostCreateForm
                    style={formStyle}
                    overrides={postCreateOverwrite}
                    onSubmit={(fields: PostCreateFormInputValues) => {
                        fields.userID = userID;
                        return fields
                    }}
                    onSuccess={() => window.location.reload()}
                    onCancel={() => window.location.reload()}

                />
            </div>
        )
    }
}