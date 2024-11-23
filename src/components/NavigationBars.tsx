// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useState} from "react";
import MyNavBarSide from "../ui-components/MyNavBarSide";
import MyNavBarHeader from "../ui-components/MyNavBarHeader";

import {useAuthenticator, useBreakpointValue} from "@aws-amplify/ui-react";

import {navBarStyle, sideBarStyle} from "../styles/styles.tsx";
import {useAvatarImage} from "../services/profileImageService";


export default function NavigationBars() {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    function openSideBar() {
        setIsVisible(true)
    }

    function closeSideBar() {
        setIsVisible(false)
    }

    const tabsBreakPointStyle = {
        display: useBreakpointValue({base: 'none', small: 'flex'})
    }
    const {route} = useAuthenticator((context) => [context.route]);

    /*<MyNavBarSide
                isVisible={isVisible}
                style={{zIndex: "2"}}
                imageKey={useAvatarImage(route === 'authenticated')}
                overrides={{
                    "MyNavBarSide": sideBarStyle,
                    "Button": {onClick: () => closeSideBar()},
                }}
            />
            */
    return (
        <div>
            <MyNavBarHeader
                imageKey={useAvatarImage(route === 'authenticated')}

                overrides={{
                    "MyNavBarHeader": navBarStyle,
                    "Frame 32138474710": tabsBreakPointStyle,
                    "icon": {onClick: () => openSideBar()},
                }}
            />
            
        </div>
    );

}