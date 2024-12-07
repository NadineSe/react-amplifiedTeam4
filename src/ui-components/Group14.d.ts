/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SideBarProps } from "./SideBar";
import { ButtonProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Group14OverridesProps = {
    Group14?: PrimitiveOverrideProps<ViewProps>;
    SideBar?: SideBarProps;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Group14Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group14OverridesProps | undefined | null;
}>;
export default function Group14(props: Group14Props): React.ReactElement;
