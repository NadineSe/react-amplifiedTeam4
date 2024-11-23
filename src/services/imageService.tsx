import {useEffect, useState} from "react";
import { getUrl } from 'aws-amplify/storage';

export async function getImagePublic(key: string) {
    if(key && key !== undefined) {
        const result = await getUrl({
            key: key,
        });
        return result.url.href
    }
    return undefined
}
export const useStorageGetPublic = (key: string) => {
    const [data, setData] = useState<string | undefined>(undefined)

    useEffect(() => {
        getImagePublic(key)
            .then((res) => {
                setData(res)
            }
            ).catch((err) => console.error(err))
    }, [key])

    return data;
}
