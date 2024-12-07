/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Kalender } from "../API.ts";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group15OverridesProps = {
    Group15?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1178"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Section?: PrimitiveOverrideProps<FlexProps>;
    label4879862?: PrimitiveOverrideProps<TextProps>;
    link4879863?: PrimitiveOverrideProps<FlexProps>;
    label4879866?: PrimitiveOverrideProps<TextProps>;
    link4879867?: PrimitiveOverrideProps<FlexProps>;
    label4879870?: PrimitiveOverrideProps<TextProps>;
    link4879871?: PrimitiveOverrideProps<FlexProps>;
    label4879874?: PrimitiveOverrideProps<TextProps>;
    Button4879856?: PrimitiveOverrideProps<ButtonProps>;
    Button4880928?: PrimitiveOverrideProps<ButtonProps>;
    Button4880933?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Group15Props = React.PropsWithChildren<Partial<ViewProps> & {
    kalender?: Kalender;
} & {
    overrides?: Group15OverridesProps | undefined | null;
}>;
export default function Group15(props: Group15Props): React.ReactElement;
