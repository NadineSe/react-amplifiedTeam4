/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NeuerKalender4OverridesProps = {
    NeuerKalender4?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Neuer Kalender"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField48661761?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48661762?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField48661764?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NeuerKalender4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NeuerKalender4OverridesProps | undefined | null;
}>;
export default function NeuerKalender4(props: NeuerKalender4Props): React.ReactElement;
