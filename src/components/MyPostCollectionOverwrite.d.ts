/***************************************************************************
 * Overwritten version of the Amplify component
 **************************************************************************/

import * as React from "react";
import { MyCommentCardProps } from "../ui-components/MyCommentCard";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyCommentCardCollectionTestFilterOverridesProps = {
    MyCommentCardCollectionTestFilter?: PrimitiveOverrideProps<CollectionProps>;
    MyCommentCard?: MyCommentCardProps;
} & EscapeHatchProps;
export declare type MyCommentCardCollectionTestFilterProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MyCommentCardProps;
} & {
    overrides?: MyCommentCardCollectionTestFilterOverridesProps | undefined | null;
}>;
export default function MyPostCollectionOverwrite(props: MyCommentCardCollectionTestFilterProps): React.ReactElement;
