/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TodoCreateFormInputValues = {
    Titel?: string;
    Datum?: string;
    Erledigt?: boolean;
};
export declare type TodoCreateFormValidationValues = {
    Titel?: ValidationFunction<string>;
    Datum?: ValidationFunction<string>;
    Erledigt?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoCreateFormOverridesProps = {
    TodoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titel?: PrimitiveOverrideProps<TextFieldProps>;
    Datum?: PrimitiveOverrideProps<TextFieldProps>;
    Erledigt?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TodoCreateFormProps = React.PropsWithChildren<{
    overrides?: TodoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodoCreateFormInputValues) => TodoCreateFormInputValues;
    onSuccess?: (fields: TodoCreateFormInputValues) => void;
    onError?: (fields: TodoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoCreateFormInputValues) => TodoCreateFormInputValues;
    onValidate?: TodoCreateFormValidationValues;
} & React.CSSProperties>;
export default function TodoCreateForm(props: TodoCreateFormProps): React.ReactElement;
