// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import MyProfileImageUpdateForm from "../ui-components/MyProfileImageUpdateForm";
import MyProfileImageCreateForm from "../ui-components/MyProfileImageCreateForm";

import {formOverlayContainerStyle, formStyle} from "../styles/styles.tsx";
import {useState} from "react";
import {MyProfileImageCreateFormInputValues} from "../ui-components/MyProfileImageCreateForm";
import {MyProfileImageUpdateFormInputValues} from "../ui-components/MyProfileImageUpdateForm";
import {ProfileImage} from "../API.ts";

export function UploadProfileImage(props: {isVisible: boolean, imageRecord: ProfileImage | undefined, userID: string}) {
    const {isVisible, imageRecord, userID} = props
    const imageFormOverrides = {
        image: {
            display: "none",
            isReadOnly: "true",
            isDisabled: "true",
        },
        userID: {
            isReadOnly: "true",
            isDisabled: "true",
            display: "none"
        },
    }

    const [newImageID, setNewImageID] = useState(undefined)

    if (isVisible) {
        if (imageRecord !== undefined) {
            return (
                <div
                    style={formOverlayContainerStyle}
                >
                    <MyProfileImageUpdateForm
                        overrides={imageFormOverrides}
                        profileImage={imageRecord}
                        style={formStyle}
                        onChange={fields => {
                            // TODO: Hack, because imageKey is undefined in onSubmit
                            setNewImageID(fields["imageKey"])
                            return fields
                        }
                        }
                        onSubmit={(fields: MyProfileImageUpdateFormInputValues) => {
                            console.log(fields, newImageID)
                            if (newImageID !== undefined) {
                                fields["image"] = newImageID
                            }
                            return fields
                        }}
                        onSuccess={() => window.location.reload()}
                        onCancel={() => window.location.reload()}
                    />
                </div>
            )
        } else {
            return (
                <div style={formOverlayContainerStyle}>
                    <MyProfileImageCreateForm
                        overrides={imageFormOverrides}
                        style={formStyle}
                        onSubmit={(fields: MyProfileImageCreateFormInputValues) => {
                            fields["image"] = fields["imageKey"]
                            fields["userID"] = userID
                            return fields
                        }}
                        onSuccess={() => window.location.reload()}
                        onCancel={() => window.location.reload()}
                    />
                </div>
            )
        }
    }
}