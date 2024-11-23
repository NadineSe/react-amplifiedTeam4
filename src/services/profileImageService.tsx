import {useEffect, useState} from "react";
import {getImagePublic} from "./imageService.tsx";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { generateClient } from "aws-amplify/api";
import { listProfileImages } from "../graphql/queries";
import {ProfileImage} from "../API.ts";


const client = generateClient()


export const defaultAvatarIconKey: string = 'female-user-icon.png'

export const useAvatarImage = (isLoggedIn: boolean) => {
    const [avatar, setAvatar] = useState <string | undefined> (undefined);

    useEffect(() => {
        if (isLoggedIn) {
            fetchUserAttributes()
                .then(async (user) => {
                    if (user && user !== undefined && user.sub !== undefined) {
                        const imageKey = await getProfileImageKey(user.sub)
                        return imageKey
                    }
                })
                .then(async (imageKey) => {
                    if (imageKey && imageKey !== undefined) {
                        return await getImagePublic(imageKey)
                    } else {
                        return await getImagePublic(defaultAvatarIconKey)
                    }
                })
                .then((data) => {
                    if (data && data !== undefined) {
                        setAvatar(data)
                    }
                })
                .catch((err) => console.log(err))

        } else {
            getImagePublic(defaultAvatarIconKey)
                .then((data) => {
                    if (data !== undefined) {
                        setAvatar(data)
                    }
                })
                .catch((err) => console.log(err))
        }
    })
    return avatar;
}

function filterUserID (userID: string) {
    return {
            userID: {
                eq: userID
            }
    }
    }
export async function tryGetCurrentProfileImage(userID: string): Promise<Array<ProfileImage>> {
    const res = await client.graphql({
            query: listProfileImages,
            variables: {
                filter: filterUserID(userID)
            }
        }
    );
    return res.data.listProfileImages.items
}

export async function getProfileImageKey(userID: string) {
    try {
        const profileImages = await tryGetCurrentProfileImage(userID)
        if (profileImages && profileImages.length !== 0) {
            return profileImages[0].image
        }
        return undefined

    } catch (err) {
        console.log('error creating profile image entry:', err)
    }
}

