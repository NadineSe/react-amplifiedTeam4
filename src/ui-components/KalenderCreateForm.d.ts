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
export declare type KalenderCreateFormInputValues = {
    Name?: string;
    feiertagID?: string;
    terminID?: string;
    Farbe?: string;
};
export declare type KalenderCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    feiertagID?: ValidationFunction<string>;
    terminID?: ValidationFunction<string>;
    Farbe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KalenderCreateFormOverridesProps = {
    KalenderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    feiertagID?: PrimitiveOverrideProps<TextFieldProps>;
    terminID?: PrimitiveOverrideProps<TextFieldProps>;
    Farbe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KalenderCreateFormProps = React.PropsWithChildren<{
    overrides?: KalenderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KalenderCreateFormInputValues) => KalenderCreateFormInputValues;
    onSuccess?: (fields: KalenderCreateFormInputValues) => void;
    onError?: (fields: KalenderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KalenderCreateFormInputValues) => KalenderCreateFormInputValues;
    onValidate?: KalenderCreateFormValidationValues;
} & React.CSSProperties>;
export default function KalenderCreateForm(props: KalenderCreateFormProps): React.ReactElement;
