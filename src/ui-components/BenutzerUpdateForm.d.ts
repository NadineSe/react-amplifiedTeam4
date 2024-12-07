/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Benutzer } from "../API.ts";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BenutzerUpdateFormInputValues = {
    Vorname?: string;
    email?: string;
    userID?: string;
    Nachname?: string;
};
export declare type BenutzerUpdateFormValidationValues = {
    Vorname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    Nachname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BenutzerUpdateFormOverridesProps = {
    BenutzerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Vorname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    Nachname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BenutzerUpdateFormProps = React.PropsWithChildren<{
    overrides?: BenutzerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    benutzer?: Benutzer;
    onSubmit?: (fields: BenutzerUpdateFormInputValues) => BenutzerUpdateFormInputValues;
    onSuccess?: (fields: BenutzerUpdateFormInputValues) => void;
    onError?: (fields: BenutzerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BenutzerUpdateFormInputValues) => BenutzerUpdateFormInputValues;
    onValidate?: BenutzerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BenutzerUpdateForm(props: BenutzerUpdateFormProps): React.ReactElement;
