/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NeuerTermin4OverridesProps = {
    NeuerTermin4?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1177"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Neuer Termin"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField48662127?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48662128?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField48662130?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    TextField48662132?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48662133?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NeuerTermin4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NeuerTermin4OverridesProps | undefined | null;
}>;
export default function NeuerTermin4(props: NeuerTermin4Props): React.ReactElement;
