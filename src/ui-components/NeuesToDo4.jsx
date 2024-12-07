/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Flex,
  Image,
  SwitchField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NeuesToDo4(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="969px"
      height="575px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NeuesToDo4")}
      {...rest}
    >
      <View
        width="969px"
        height="575px"
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
        {...getOverrideProps(overrides, "TerminPlaner")}
      >
        <Image
          width="269px"
          height="414px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="80px"
          left="80px"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88gfOTby4Z-YxZgw-UJOcY3dH684bCkGZaw&s"
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="554px"
          height="344px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="80px"
          left="349px"
          {...getOverrideProps(overrides, "Group 2")}
        >
          <Flex
            gap="48px"
            direction="row"
            width="554px"
            height="344px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="12px"
            padding="32px 0px 32px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 41148561767")}
          >
            <Flex
              gap="32px"
              direction="column"
              width="556px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 313")}
            >
              <Flex
                gap="24px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 32px 0px 32px"
                {...getOverrideProps(overrides, "Frame 406")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="20px"
                  fontWeight="600"
                  color="rgba(13,26,38,1)"
                  lineHeight="20px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="184.21px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Neues To-Do"
                  {...getOverrideProps(overrides, "Neues To-Do")}
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
                    label="Datum"
                    grow="1"
                    shrink="1"
                    basis="0"
                    placeholder=""
                    size="default"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    datatype=""
                    {...getOverrideProps(overrides, "TextField48561773")}
                  ></TextField>
                </Flex>
              </Flex>
              <Flex
                gap="24px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 32px 0px 32px"
                {...getOverrideProps(overrides, "Frame 409")}
              >
                <TextField
                  width="unset"
                  height="unset"
                  label="Aufgabe"
                  shrink="0"
                  alignSelf="stretch"
                  placeholder=""
                  size="default"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "TextField48561775")}
                ></TextField>
              </Flex>
              <View
                width="505.5px"
                height="52px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 440")}
              >
                <View
                  width="489px"
                  height="52px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0px"
                  left="16.5px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "Rectangle 1165")}
                ></View>
                <SwitchField
                  width="92px"
                  height="40px"
                  label="Off"
                  justifyContent="space-between"
                  position="absolute"
                  top="12px"
                  left="0px"
                  transformOrigin="top left"
                  transform="rotate(0deg)"
                  size="large"
                  defaultChecked={false}
                  isDisabled={false}
                  labelPosition="end"
                  {...getOverrideProps(overrides, "SwitchField")}
                ></SwitchField>
              </View>
              <Flex
                gap="24px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 32px 0px 32px"
                {...getOverrideProps(overrides, "Frame 41148561783")}
              >
                <Button
                  width="unset"
                  height="unset"
                  shrink="0"
                  alignSelf="stretch"
                  size="large"
                  isDisabled={false}
                  variation="primary"
                  children="hinzufügen"
                  onClick={() => {
                    buttonOnClick();
                  }}
                  {...getOverrideProps(overrides, "Button")}
                ></Button>
              </Flex>
            </Flex>
          </Flex>
        </View>
      </View>
    </View>
  );
}
