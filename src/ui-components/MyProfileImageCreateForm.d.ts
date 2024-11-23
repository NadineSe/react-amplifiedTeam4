/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type MyProfileImageCreateFormInputValues = {
    imageKey?: string;
    userID?: string;
    image?: string;
};
export declare type MyProfileImageCreateFormValidationValues = {
    imageKey?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyProfileImageCreateFormOverridesProps = {
    MyProfileImageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    imageKey?: PrimitiveOverrideProps<StorageManagerProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MyProfileImageCreateFormProps = React.PropsWithChildren<{
    overrides?: MyProfileImageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MyProfileImageCreateFormInputValues) => MyProfileImageCreateFormInputValues;
    onSuccess?: (fields: MyProfileImageCreateFormInputValues) => void;
    onError?: (fields: MyProfileImageCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MyProfileImageCreateFormInputValues) => MyProfileImageCreateFormInputValues;
    onValidate?: MyProfileImageCreateFormValidationValues;
} & React.CSSProperties>;
export default function MyProfileImageCreateForm(props: MyProfileImageCreateFormProps): React.ReactElement;
