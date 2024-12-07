/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import EditProfile from "./EditProfile";
export default function Registrieren4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="640px"
      height="678px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Registrieren4")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="13.72%"
        bottom="80.38%"
        left="31.41%"
        right="50%"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign me up"
        {...getOverrideProps(overrides, "Button4854624")}
      ></Button>
      <EditProfile
        display="flex"
        gap="16px"
        direction="column"
        width="640px"
        height="551px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="18.73%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "EditProfile")}
      ></EditProfile>
      <Flex
        gap="10px"
        direction="column"
        width="594px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="52.8%"
        bottom="41%"
        left="3.59%"
        right="3.59%"
        border="1px SOLID rgba(137,148,159,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Password")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(128,128,128,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="heidi.müller@awsamplify.com"
          {...getOverrideProps(overrides, "placeholder")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="67.4%"
        bottom="26.7%"
        left="37.5%"
        right="42.5%"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Registrieren"
        {...getOverrideProps(overrides, "Button4856711")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="48.38%"
        bottom="48.53%"
        left="3.75%"
        right="86.56%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Passwort"
        {...getOverrideProps(overrides, "Passwort")}
      ></Text>
    </View>
  );
}
