/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import SideBar from "./SideBar";
import { Button, Icon, View } from "@aws-amplify/ui-react";
export default function Group14(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="385px"
      height="748px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group14")}
      {...rest}
    >
      <SideBar
        display="flex"
        gap="10px"
        direction="row"
        width="385px"
        height="748px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SideBar")}
      ></SideBar>
      <Icon
        width="14px"
        height="14px"
        viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
        paths={[
          {
            d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
            fill: "rgba(92,102,112,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.41%"
        bottom="95.72%"
        left="91.43%"
        right="4.94%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="25.94%"
        bottom="68.72%"
        left="8.31%"
        right="46.49%"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Add new calender"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
