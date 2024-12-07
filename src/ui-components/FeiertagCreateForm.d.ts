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
export declare type FeiertagCreateFormInputValues = {
    Titel?: string;
    Datum?: string;
};
export declare type FeiertagCreateFormValidationValues = {
    Titel?: ValidationFunction<string>;
    Datum?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeiertagCreateFormOverridesProps = {
    FeiertagCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titel?: PrimitiveOverrideProps<TextFieldProps>;
    Datum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeiertagCreateFormProps = React.PropsWithChildren<{
    overrides?: FeiertagCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeiertagCreateFormInputValues) => FeiertagCreateFormInputValues;
    onSuccess?: (fields: FeiertagCreateFormInputValues) => void;
    onError?: (fields: FeiertagCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeiertagCreateFormInputValues) => FeiertagCreateFormInputValues;
    onValidate?: FeiertagCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeiertagCreateForm(props: FeiertagCreateFormProps): React.ReactElement;
