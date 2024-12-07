/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Feiertag } from "../API.ts";
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
export declare type FeiertagUpdateFormInputValues = {
    Titel?: string;
    Datum?: string;
};
export declare type FeiertagUpdateFormValidationValues = {
    Titel?: ValidationFunction<string>;
    Datum?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeiertagUpdateFormOverridesProps = {
    FeiertagUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titel?: PrimitiveOverrideProps<TextFieldProps>;
    Datum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeiertagUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeiertagUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feiertag?: Feiertag;
    onSubmit?: (fields: FeiertagUpdateFormInputValues) => FeiertagUpdateFormInputValues;
    onSuccess?: (fields: FeiertagUpdateFormInputValues) => void;
    onError?: (fields: FeiertagUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeiertagUpdateFormInputValues) => FeiertagUpdateFormInputValues;
    onValidate?: FeiertagUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeiertagUpdateForm(props: FeiertagUpdateFormProps): React.ReactElement;
