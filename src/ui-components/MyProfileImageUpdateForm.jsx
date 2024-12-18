/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, Heading, TextField } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProfileImage } from "../graphql/queries";
import { updateProfileImage } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
const client = generateClient();
export default function MyProfileImageUpdateForm(props) {
  const {
    id: idProp,
    profileImage: profileImageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    image: "",
    imageKey: undefined,
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [image, setImage] = React.useState(initialValues.image);
  const [imageKey, setImageKey] = React.useState(initialValues.imageKey);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = profileImageRecord
      ? { ...initialValues, ...profileImageRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setImage(cleanValues.image);
    setImageKey(cleanValues.imageKey);
    setErrors({});
  };
  const [profileImageRecord, setProfileImageRecord] = React.useState(
    profileImageModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProfileImage.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProfileImage
        : profileImageModelProp;
      setProfileImageRecord(record);
    };
    queryData();
  }, [idProp, profileImageModelProp]);
  React.useEffect(resetStateValues, [profileImageRecord]);
  const validations = {
    userID: [],
    image: [],
    imageKey: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userID: userID ?? null,
          image: image ?? null,
          imageKey: imageKey ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            userID: modelFields.userID ?? null,
            image: modelFields.image ?? null,
          };
          await client.graphql({
            query: updateProfileImage.replaceAll("__typename", ""),
            variables: {
              input: {
                id: profileImageRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MyProfileImageUpdateForm")}
      {...rest}
    >
      <Heading
        children="Update Img"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              image,
              imageKey,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              image: value,
              imageKey,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Field
        errorMessage={errors.imageKey?.errorMessage}
        hasError={errors.imageKey?.hasError}
        label={"Label"}
      >
        {profileImageRecord && (
          <StorageManager
            defaultFiles={[{ key: profileImageRecord.imageKey }]}
            onUploadSuccess={({ key }) => {
              setImageKey((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    userID,
                    image,
                    imageKey: value,
                  };
                  const result = onChange(modelFields);
                  value = result?.imageKey ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setImageKey((prev) => {
                let value = initialValues?.imageKey;
                if (onChange) {
                  const modelFields = {
                    userID,
                    image,
                    imageKey: value,
                  };
                  const result = onChange(modelFields);
                  value = result?.imageKey ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"public"}
            acceptedFileTypes={["image/*"]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "imageKey")}
          ></StorageManager>
        )}
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || profileImageModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Upload"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || profileImageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
