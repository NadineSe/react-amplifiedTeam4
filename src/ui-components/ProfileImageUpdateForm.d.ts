/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProfileImage } from "../API.ts";
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
export declare type ProfileImageUpdateFormInputValues = {
    userID?: string;
    image?: string;
};
export declare type ProfileImageUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileImageUpdateFormOverridesProps = {
    ProfileImageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileImageUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileImageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profileImage?: ProfileImage;
    onSubmit?: (fields: ProfileImageUpdateFormInputValues) => ProfileImageUpdateFormInputValues;
    onSuccess?: (fields: ProfileImageUpdateFormInputValues) => void;
    onError?: (fields: ProfileImageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileImageUpdateFormInputValues) => ProfileImageUpdateFormInputValues;
    onValidate?: ProfileImageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileImageUpdateForm(props: ProfileImageUpdateFormProps): React.ReactElement;
