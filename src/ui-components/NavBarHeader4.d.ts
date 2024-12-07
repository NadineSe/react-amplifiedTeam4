/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Kalender } from "../API.ts";
import { LogoWithTextProps } from "./LogoWithText";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NavBarHeader4OverridesProps = {
    NavBarHeader4?: PrimitiveOverrideProps<ViewProps>;
    "Frame 441"?: PrimitiveOverrideProps<ViewProps>;
    LogoWithText?: LogoWithTextProps;
    Vector4859860?: PrimitiveOverrideProps<IconProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    "Termin Planer"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Alle-Kalender"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1166"?: PrimitiveOverrideProps<ViewProps>;
    "November 2024"?: PrimitiveOverrideProps<TextProps>;
    "Alle Termine"?: PrimitiveOverrideProps<TextProps>;
    Vector4857945?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarHeader4Props = React.PropsWithChildren<Partial<ViewProps> & {
    kalender?: Kalender;
} & {
    overrides?: NavBarHeader4OverridesProps | undefined | null;
}>;
export default function NavBarHeader4(props: NavBarHeader4Props): React.ReactElement;
