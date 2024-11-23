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
export declare type ProfileImageCreateFormInputValues = {
    userID?: string;
    image?: string;
};
export declare type ProfileImageCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileImageCreateFormOverridesProps = {
    ProfileImageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileImageCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileImageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfileImageCreateFormInputValues) => ProfileImageCreateFormInputValues;
    onSuccess?: (fields: ProfileImageCreateFormInputValues) => void;
    onError?: (fields: ProfileImageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileImageCreateFormInputValues) => ProfileImageCreateFormInputValues;
    onValidate?: ProfileImageCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileImageCreateForm(props: ProfileImageCreateFormProps): React.ReactElement;
