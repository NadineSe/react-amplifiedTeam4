/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, SelectField } from "@aws-amplify/ui-react";
import Buttonsmallfalsedefault from "./Buttonsmallfalsedefault";
export default function Filters(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="16px 16px 16px 16px"
      {...getOverrideProps(overrides, "Filters")}
      {...rest}
    >
      <SelectField
        width="240px"
        height="unset"
        label="Status"
        placeholder="All"
        shrink="0"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38963527")}
      ></SelectField>
      <SelectField
        width="240px"
        height="unset"
        label="Channel"
        placeholder="All"
        shrink="0"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38963544")}
      ></SelectField>
      <Buttonsmallfalsedefault
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(137,148,159,1)"
        borderRadius="5px"
        padding="6px 12px 6px 12px"
        {...getOverrideProps(overrides, "Button/small/false/default")}
      ></Buttonsmallfalsedefault>
    </Flex>
  );
}
