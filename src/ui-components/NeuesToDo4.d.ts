/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, SwitchFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NeuesToDo4OverridesProps = {
    NeuesToDo4?: PrimitiveOverrideProps<ViewProps>;
    TerminPlaner?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ImageProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 41148561767"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Neues To-Do"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField48561773?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField48561775?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 440"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Frame 41148561783"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NeuesToDo4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NeuesToDo4OverridesProps | undefined | null;
}>;
export default function NeuesToDo4(props: NeuesToDo4Props): React.ReactElement;
