import {useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Loading from "../components/Loading.tsx";
import MyEditProfile from "../ui-components/MyEditProfile";
import MyLogout from "../ui-components/MyLogout";
import {formStyle} from "../styles/styles.tsx"
import {tryGetCurrentProfileImage} from "../services/profileImageService.tsx";
import {updateUserName, useAuthUser} from "../services/userService.tsx";
import {useEffect, useState} from "react";
import {UploadProfileImage} from "../components/UploadProfileImage";
import {getImagePublic} from "../services/imageService.tsx";
import {ProfileImage} from "../API.ts";

export default function Profile() {
    const [name, setName] = useState("");
    const [imageRecord, setImageRecord] = useState<ProfileImage | undefined>(undefined)
    const [imageData, setImageData] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const user = useAuthUser();
    const {route} = useAuthenticator((context) => [context.route]);
    useEffect(() => {
        if (user && user.sub) {
            tryGetCurrentProfileImage(user.sub)
                .then((imageList: Array<ProfileImage>) => {
                    if (imageList && imageList.length !== 0) {
                        setImageRecord(imageList[0])
                    }
                })
            }
    }, [user])

    useEffect(() => {
        if (user && imageRecord !== undefined) {
            getImagePublic(imageRecord.image)
                .then((data) =>{
                    if (data !== undefined) {
                        setImageData(data)
                    }
                })
        }
    },[imageRecord, user])

    function showForm() {
        setIsVisible(true)
    }

    const profileOverrides = {
        "TextField38475054": {
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
            },
        },
        "Button3848594": {
            onClick: async () => {
                updateUserName(name).then(() => window.location.reload())
            },
        },
    }

    if (route !== 'authenticated' || user === undefined || user.sub === undefined || imageData === "") {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>My Profile</h1>
                <div>
                    <UploadProfileImage
                        isVisible={isVisible}
                        imageRecord={imageRecord}
                        userID={user.sub}
                    />
                    <MyEditProfile
                        imageKey={imageData}
                        overrides={profileOverrides}
                        width={formStyle.width}
                        maxWidth={formStyle.maxWidth}
                        imageUploadAction={showForm}
                    />
                    <MyLogout
                        width={formStyle.width}
                        maxWidth={formStyle.maxWidth}
                    />
                </div>
            </div>
        );
    }
}
