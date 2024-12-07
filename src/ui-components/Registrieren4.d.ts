/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { EditProfileProps } from "./EditProfile";
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
export declare type Registrieren4OverridesProps = {
    Registrieren4?: PrimitiveOverrideProps<ViewProps>;
    Button4854624?: PrimitiveOverrideProps<ButtonProps>;
    EditProfile?: EditProfileProps;
    Password?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    Button4856711?: PrimitiveOverrideProps<ButtonProps>;
    Passwort?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Registrieren4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Registrieren4OverridesProps | undefined | null;
}>;
export default function Registrieren4(props: Registrieren4Props): React.ReactElement;
