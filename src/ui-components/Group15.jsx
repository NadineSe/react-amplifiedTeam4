/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Group15(props) {
  const { kalender, overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({ type: "url", url: "/" });
  const labelFourEightSevenNineEightSixSixOnClick = useNavigateAction({
    type: "url",
    url: `${"/calendar:"}${kalender?.id}`,
  });
  const labelFourEightSevenNineEightSevenZeroOnClick = useNavigateAction({
    type: "url",
    url: "/calendar:private",
  });
  const labelFourEightSevenNineEightSevenFourOnClick = useNavigateAction({
    type: "url",
    url: "/feiertage",
  });
  const buttonFourEightSevenNineEightFiveSixOnClick = useNavigateAction({
    type: "url",
    url: "/newCalendar",
  });
  const buttonFourEightEightZeroNineTwoEightOnClick = useNavigateAction({
    type: "url",
    url: "/newTermin",
  });
  const buttonFourEightEightZeroNineThreeThreeOnClick = useNavigateAction({
    type: "url",
    url: "/newToDo",
  });
  return (
    <View
      width="309px"
      height="606px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group15")}
      {...rest}
    >
      <View
        width="309px"
        height="606px"
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
        {...getOverrideProps(overrides, "Rectangle 1178")}
      ></View>
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
        top="5.45%"
        bottom="92.24%"
        left="88.67%"
        right="6.8%"
        onClick={() => {
          vectorOnClick();
        }}
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="21.62%"
        bottom="54.62%"
        left="22.01%"
        right="45.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Section")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(92,102,112,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Kalender"
          {...getOverrideProps(overrides, "label4879862")}
        ></Text>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "link4879863")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={kalender?.Name}
            onClick={() => {
              labelFourEightSevenNineEightSixSixOnClick();
            }}
            {...getOverrideProps(overrides, "label4879866")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "link4879867")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="100px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Privat"
            onClick={() => {
              labelFourEightSevenNineEightSevenZeroOnClick();
            }}
            {...getOverrideProps(overrides, "label4879870")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "link4879871")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Feiertage"
            onClick={() => {
              labelFourEightSevenNineEightSevenFourOnClick();
            }}
            {...getOverrideProps(overrides, "label4879874")}
          ></Text>
        </Flex>
      </Flex>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="50%"
        bottom="43.4%"
        left="22.01%"
        right="21.68%"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Add new calender"
        onClick={() => {
          buttonFourEightSevenNineEightFiveSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button4879856")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="calc(50% - 20px - -88px)"
        left="calc(50% - 79.5px - -0.5px)"
        backgroundColor="rgba(188,236,245,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Add new Termin"
        onClick={() => {
          buttonFourEightEightZeroNineTwoEightOnClick();
        }}
        {...getOverrideProps(overrides, "Button4880928")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="calc(50% - 20px - -156px)"
        left="calc(50% - 74.5px - -0.5px)"
        backgroundColor="rgba(245,188,188,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Add new To Do"
        onClick={() => {
          buttonFourEightEightZeroNineThreeThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button4880933")}
      ></Button>
    </View>
  );
}
