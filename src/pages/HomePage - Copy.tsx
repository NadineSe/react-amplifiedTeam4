import TestHead from "../ui-components/NavBarHeader4";
import {useStorageGetPublic} from "../services/imageService.tsx";
export default function Home() {
    const image = useStorageGetPublic('animal-friends-which-make-selfies-wiht-a-cellphone.png');

    const heroOverrides ={
        "image": {src: image},
    }

    return (
        <TestHead></TestHead>
    );
}
