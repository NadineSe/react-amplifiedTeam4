/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { createKalender } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function NeuerKalender4(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = async () => {
    await client.graphql({
      query: createKalender.replaceAll("__typename", ""),
      variables: { input: {} },
    });
  };
  return (
    <View
      width="1172px"
      height="414px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NeuerKalender4")}
      {...rest}
    >
      <Image
        width="556px"
        height="298px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="58px"
        left="586px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://www.greencreative.shop/media/image/product/5896/sm/basteln-und-gestalten-farben-und-lacke-gouache-farben-pastell-12er~2.jpg"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="556px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="58px"
        left="30px"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 406")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Neuer Kalender"
          {...getOverrideProps(overrides, "Neuer Kalender")}
        ></Text>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 426")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField48661761")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Mitglieder"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField48661762")}
          ></TextField>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="556px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="206px"
        left="30px"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 409")}
      >
        <TextField
          width="unset"
          height="unset"
          label="Farbe"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField48661764")}
        ></TextField>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="556px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="310px"
        left="30px"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Speichern"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </View>
  );
}
