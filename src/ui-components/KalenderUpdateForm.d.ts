/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Kalender } from "../API.ts";
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
export declare type KalenderUpdateFormInputValues = {
    Name?: string;
    feiertagID?: string;
    terminID?: string;
    Farbe?: string;
};
export declare type KalenderUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    feiertagID?: ValidationFunction<string>;
    terminID?: ValidationFunction<string>;
    Farbe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KalenderUpdateFormOverridesProps = {
    KalenderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    feiertagID?: PrimitiveOverrideProps<TextFieldProps>;
    terminID?: PrimitiveOverrideProps<TextFieldProps>;
    Farbe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KalenderUpdateFormProps = React.PropsWithChildren<{
    overrides?: KalenderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kalender?: Kalender;
    onSubmit?: (fields: KalenderUpdateFormInputValues) => KalenderUpdateFormInputValues;
    onSuccess?: (fields: KalenderUpdateFormInputValues) => void;
    onError?: (fields: KalenderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KalenderUpdateFormInputValues) => KalenderUpdateFormInputValues;
    onValidate?: KalenderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KalenderUpdateForm(props: KalenderUpdateFormProps): React.ReactElement;
