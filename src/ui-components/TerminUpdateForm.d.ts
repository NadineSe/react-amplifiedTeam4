/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Termin } from "../API.ts";
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
export declare type TerminUpdateFormInputValues = {
    Titel?: string;
    Datum?: string;
    Von?: string;
    Bis?: string;
};
export declare type TerminUpdateFormValidationValues = {
    Titel?: ValidationFunction<string>;
    Datum?: ValidationFunction<string>;
    Von?: ValidationFunction<string>;
    Bis?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerminUpdateFormOverridesProps = {
    TerminUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titel?: PrimitiveOverrideProps<TextFieldProps>;
    Datum?: PrimitiveOverrideProps<TextFieldProps>;
    Von?: PrimitiveOverrideProps<TextFieldProps>;
    Bis?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerminUpdateFormProps = React.PropsWithChildren<{
    overrides?: TerminUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    termin?: Termin;
    onSubmit?: (fields: TerminUpdateFormInputValues) => TerminUpdateFormInputValues;
    onSuccess?: (fields: TerminUpdateFormInputValues) => void;
    onError?: (fields: TerminUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerminUpdateFormInputValues) => TerminUpdateFormInputValues;
    onValidate?: TerminUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TerminUpdateForm(props: TerminUpdateFormProps): React.ReactElement;
