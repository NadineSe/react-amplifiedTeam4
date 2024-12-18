/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MyCreateNewPostOverridesProps = {
    MyCreateNewPost?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyCreateNewPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MyCreateNewPostOverridesProps | undefined | null;
}>;
export default function MyCreateNewPost(props: MyCreateNewPostProps): React.ReactElement;
