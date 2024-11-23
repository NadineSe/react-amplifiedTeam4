
import {getImagePublic} from "./imageService.tsx";
import {useEffect, useState} from "react";
import {defaultAvatarIconKey, getProfileImageKey} from "./profileImageService.tsx";
import { fetchUserAttributes, updateUserAttributes} from 'aws-amplify/auth';
import { generateClient } from "aws-amplify/api";
import {createUser, updateUser} from '../graphql/mutations';
import { listUsers} from "../graphql/queries.ts";
import {CreateUserInput, UpdateUserInput} from "../API.ts";
import { FetchUserAttributesOutput } from 'aws-amplify/auth';

const client = generateClient()

function filterUserID (userID: string) {
    return {
        userID: {
            eq: userID
        }
    }
}
async function updateUserInfo(userID: string, name: string) {

    const dataList = await getUsers(userID)
    const original = dataList[0]
    const updatedUser: UpdateUserInput = {
        id: original.id,
        name: name,
        email: original.email,
        userID: userID,
    }
    await client.graphql({
        query: updateUser,
        variables: { input: updatedUser }
    });
}

export async function updateUserName(name: string) {
    try {
        const user: FetchUserAttributesOutput = await fetchUserAttributes();
        if (user.sub && user.sub !== undefined) {
            await updateUserAttributes({
                userAttributes: {
                    name: name,
                },
            });
            await updateUserInfo(user.sub, name)
        } else {
            throw new Error ("User id is invalid: user.sub: " + user.sub)
        }
    } catch (err) {
        console.error(err)
    }
}

export const useAuthUser = () => {
    const [user, setUser] = useState<FetchUserAttributesOutput | undefined>(undefined);

    useEffect(() => {
        fetchUserAttributes()
            .then((user) => {
                    setUser(user)
                }
            )
            .then(async () => {
                await addUser()
            })
            .catch((err) => console.error(err))
    }, []);
    return user;
}

export async function addUser() {
    try {
        const user: FetchUserAttributesOutput = await fetchUserAttributes();
        if (user.sub && user.name && user.email) {

            const userList = await getUsers(user.sub);

            if (userList.length === 0) {
                const newUser: CreateUserInput = {
                    name: user.name,
                    email: user.email,
                    userID: user.sub,
                }
                await client.graphql({
                    query: createUser,
                    variables: {input: newUser}
                });
            }
            return userList[0]
        } else{
            throw new Error("User attributes not defined: " +
                "sub: " + user.sub +
                "email: " + user.email +
                "name: " + user.name
            )
        }
    } catch (err) {
        console.error(err)
    }
}

export async function getUsers(userID: string) {
    // return DataStore.query(User, el =>
    //    el.userID.eq(userID));
    return client.graphql({
        query: listUsers,
        variables: {
            filter: filterUserID(userID)
        }
    }).then((res)=>{
        return res.data.listUsers.items
    });
}

export const useUserName = (userID: string) => {
    const [name, setName] = useState<string | undefined>(undefined);

    useEffect(() => {
        getUsers(userID)
            .then((list) => {
                if (list && list.length !== 0) {
                    return list[0].name
                }
                return ''
            })
            .then((name) => {
                setName(name)
            })

    })
    return name
}

export const useUserImage = (userID: string) => {
    const [image, setImage] = useState<string | undefined>(undefined);
    useEffect(() => {
        getProfileImageKey(userID)
            .then(async (imageKey) => {
                if (imageKey && imageKey !== undefined) {
                    return await getImagePublic(imageKey)
                }
                return await getImagePublic(defaultAvatarIconKey)
            })
            .then((image) => {
                setImage(image)
            })
    })
    return image
}

