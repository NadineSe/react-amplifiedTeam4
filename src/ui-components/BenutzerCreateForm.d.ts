/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BenutzerCreateFormInputValues = {
    Vorname?: string;
    email?: string;
    userID?: string;
    Nachname?: string;
};
export declare type BenutzerCreateFormValidationValues = {
    Vorname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    Nachname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BenutzerCreateFormOverridesProps = {
    BenutzerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Vorname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    Nachname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BenutzerCreateFormProps = React.PropsWithChildren<{
    overrides?: BenutzerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BenutzerCreateFormInputValues) => BenutzerCreateFormInputValues;
    onSuccess?: (fields: BenutzerCreateFormInputValues) => void;
    onError?: (fields: BenutzerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BenutzerCreateFormInputValues) => BenutzerCreateFormInputValues;
    onValidate?: BenutzerCreateFormValidationValues;
} & React.CSSProperties>;
export default function BenutzerCreateForm(props: BenutzerCreateFormProps): React.ReactElement;
