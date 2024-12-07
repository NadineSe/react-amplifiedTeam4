/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createKalender } from "../graphql/mutations";
const client = generateClient();
export default function KalenderCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    feiertagID: "",
    terminID: "",
    Farbe: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [feiertagID, setFeiertagID] = React.useState(initialValues.feiertagID);
  const [terminID, setTerminID] = React.useState(initialValues.terminID);
  const [Farbe, setFarbe] = React.useState(initialValues.Farbe);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setFeiertagID(initialValues.feiertagID);
    setTerminID(initialValues.terminID);
    setFarbe(initialValues.Farbe);
    setErrors({});
  };
  const validations = {
    Name: [],
    feiertagID: [],
    terminID: [],
    Farbe: [],
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
          Name,
          feiertagID,
          terminID,
          Farbe,
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
          await client.graphql({
            query: createKalender.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "KalenderCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              feiertagID,
              terminID,
              Farbe,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Feiertag id"
        isRequired={false}
        isReadOnly={false}
        value={feiertagID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              feiertagID: value,
              terminID,
              Farbe,
            };
            const result = onChange(modelFields);
            value = result?.feiertagID ?? value;
          }
          if (errors.feiertagID?.hasError) {
            runValidationTasks("feiertagID", value);
          }
          setFeiertagID(value);
        }}
        onBlur={() => runValidationTasks("feiertagID", feiertagID)}
        errorMessage={errors.feiertagID?.errorMessage}
        hasError={errors.feiertagID?.hasError}
        {...getOverrideProps(overrides, "feiertagID")}
      ></TextField>
      <TextField
        label="Termin id"
        isRequired={false}
        isReadOnly={false}
        value={terminID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              feiertagID,
              terminID: value,
              Farbe,
            };
            const result = onChange(modelFields);
            value = result?.terminID ?? value;
          }
          if (errors.terminID?.hasError) {
            runValidationTasks("terminID", value);
          }
          setTerminID(value);
        }}
        onBlur={() => runValidationTasks("terminID", terminID)}
        errorMessage={errors.terminID?.errorMessage}
        hasError={errors.terminID?.hasError}
        {...getOverrideProps(overrides, "terminID")}
      ></TextField>
      <TextField
        label="Farbe"
        isRequired={false}
        isReadOnly={false}
        value={Farbe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              feiertagID,
              terminID,
              Farbe: value,
            };
            const result = onChange(modelFields);
            value = result?.Farbe ?? value;
          }
          if (errors.Farbe?.hasError) {
            runValidationTasks("Farbe", value);
          }
          setFarbe(value);
        }}
        onBlur={() => runValidationTasks("Farbe", Farbe)}
        errorMessage={errors.Farbe?.errorMessage}
        hasError={errors.Farbe?.hasError}
        {...getOverrideProps(overrides, "Farbe")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
