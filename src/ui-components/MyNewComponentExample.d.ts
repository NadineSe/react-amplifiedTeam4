/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, SelectFieldProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MyNewComponentExampleOverridesProps = {
    MyNewComponentExample?: PrimitiveOverrideProps<ViewProps>;
    "Frame 138921938"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 138921937"?: PrimitiveOverrideProps<FlexProps>;
    Einstellungen?: PrimitiveOverrideProps<TextProps>;
    "Frame 138921935"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 138921930"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<ViewProps>;
    "Information about this product.38921656"?: PrimitiveOverrideProps<TextProps>;
    SwitchField38921657?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Frame 138921931"?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.38921676"?: PrimitiveOverrideProps<TextProps>;
    SwitchField38921669?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Frame 138921932"?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.38921675"?: PrimitiveOverrideProps<TextProps>;
    SwitchField38921663?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Frame 138921934"?: PrimitiveOverrideProps<FlexProps>;
    SelectField38921678?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38921687?: PrimitiveOverrideProps<SelectFieldProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MyNewComponentExampleProps = React.PropsWithChildren<Partial<ViewProps> & {
    displaymode?: "dark" | "light";
} & {
    overrides?: MyNewComponentExampleOverridesProps | undefined | null;
}>;
export default function MyNewComponentExample(props: MyNewComponentExampleProps): React.ReactElement;
