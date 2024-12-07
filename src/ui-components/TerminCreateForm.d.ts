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
export declare type TerminCreateFormInputValues = {
    Titel?: string;
    Datum?: string;
    Von?: string;
    Bis?: string;
};
export declare type TerminCreateFormValidationValues = {
    Titel?: ValidationFunction<string>;
    Datum?: ValidationFunction<string>;
    Von?: ValidationFunction<string>;
    Bis?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerminCreateFormOverridesProps = {
    TerminCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titel?: PrimitiveOverrideProps<TextFieldProps>;
    Datum?: PrimitiveOverrideProps<TextFieldProps>;
    Von?: PrimitiveOverrideProps<TextFieldProps>;
    Bis?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerminCreateFormProps = React.PropsWithChildren<{
    overrides?: TerminCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TerminCreateFormInputValues) => TerminCreateFormInputValues;
    onSuccess?: (fields: TerminCreateFormInputValues) => void;
    onError?: (fields: TerminCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerminCreateFormInputValues) => TerminCreateFormInputValues;
    onValidate?: TerminCreateFormValidationValues;
} & React.CSSProperties>;
export default function TerminCreateForm(props: TerminCreateFormProps): React.ReactElement;
