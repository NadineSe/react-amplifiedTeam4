/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createTermin } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Image,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function NeuerTermin4(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldFourEightSixSixTwoOneTwoSevenValue,
    setTextFieldFourEightSixSixTwoOneTwoSevenValue,
  ] = useState("");
  const [
    textFieldFourEightSixSixTwoOneThreeZeroValue,
    setTextFieldFourEightSixSixTwoOneThreeZeroValue,
  ] = useState("");
  const [
    textFieldFourEightSixSixTwoOneThreeTwoValue,
    setTextFieldFourEightSixSixTwoOneThreeTwoValue,
  ] = useState("");
  const [
    textFieldFourEightSixSixTwoOneThreeThreeValue,
    setTextFieldFourEightSixSixTwoOneThreeThreeValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createTermin.replaceAll("__typename", ""),
      variables: {
        input: {
          Titel: textFieldFourEightSixSixTwoOneTwoSevenValue,
          Datum: textFieldFourEightSixSixTwoOneThreeZeroValue,
          Von: textFieldFourEightSixSixTwoOneThreeTwoValue,
          Bis: textFieldFourEightSixSixTwoOneThreeThreeValue,
          Kalenders: "",
        },
      },
    });
  };
  return (
    <View
      width="1290px"
      height="603px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NeuerTermin4")}
      {...rest}
    >
      <View
        width="1290px"
        height="603px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1177")}
      ></View>
      <Flex
        gap="24px"
        direction="column"
        width="556px"
        height="116px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="17.41%"
        bottom="63.35%"
        left="3.18%"
        right="53.72%"
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
          children="Neuer Termin"
          {...getOverrideProps(overrides, "Neuer Termin")}
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
            label="Titel"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourEightSixSixTwoOneTwoSevenValue}
            onChange={(event) => {
              setTextFieldFourEightSixSixTwoOneTwoSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField48662127")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Kalender"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField48662128")}
          ></TextField>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="556px"
        height="168px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="41.96%"
        bottom="30.18%"
        left="3.18%"
        right="53.72%"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 409")}
      >
        <TextField
          width="unset"
          height="unset"
          label="Datum"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourEightSixSixTwoOneThreeZeroValue}
          onChange={(event) => {
            setTextFieldFourEightSixSixTwoOneThreeZeroValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField48662130")}
        ></TextField>
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
          {...getOverrideProps(overrides, "Frame 425")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Von"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourEightSixSixTwoOneThreeTwoValue}
            onChange={(event) => {
              setTextFieldFourEightSixSixTwoOneThreeTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField48662132")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Bis"
            grow="1"
            shrink="1"
            basis="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourEightSixSixTwoOneThreeThreeValue}
            onChange={(event) => {
              setTextFieldFourEightSixSixTwoOneThreeThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField48662133")}
          ></TextField>
          <SelectField
            width="100px"
            height="unset"
            label="State"
            shrink="0"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="556px"
        height="46px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="75.12%"
        bottom="17.25%"
        left="3.18%"
        right="53.72%"
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
      <Image
        width="43.1%"
        height="65.34%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17.41%"
        bottom="17.25%"
        left="50%"
        right="6.9%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://static.vecteezy.com/ti/gratis-vektor/p1/43063798-kalender-symbol-symbol-bild-zum-zeitplan-oder-geplanter-termin-vektor.jpg"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
