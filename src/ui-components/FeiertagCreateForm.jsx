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
import { createFeiertag } from "../graphql/mutations";
const client = generateClient();
export default function FeiertagCreateForm(props) {
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
    Titel: "",
    Datum: "",
  };
  const [Titel, setTitel] = React.useState(initialValues.Titel);
  const [Datum, setDatum] = React.useState(initialValues.Datum);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitel(initialValues.Titel);
    setDatum(initialValues.Datum);
    setErrors({});
  };
  const validations = {
    Titel: [],
    Datum: [],
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
          Titel,
          Datum,
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
            query: createFeiertag.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "FeiertagCreateForm")}
      {...rest}
    >
      <TextField
        label="Titel"
        isRequired={false}
        isReadOnly={false}
        value={Titel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Titel: value,
              Datum,
            };
            const result = onChange(modelFields);
            value = result?.Titel ?? value;
          }
          if (errors.Titel?.hasError) {
            runValidationTasks("Titel", value);
          }
          setTitel(value);
        }}
        onBlur={() => runValidationTasks("Titel", Titel)}
        errorMessage={errors.Titel?.errorMessage}
        hasError={errors.Titel?.hasError}
        {...getOverrideProps(overrides, "Titel")}
      ></TextField>
      <TextField
        label="Datum"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Datum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Titel,
              Datum: value,
            };
            const result = onChange(modelFields);
            value = result?.Datum ?? value;
          }
          if (errors.Datum?.hasError) {
            runValidationTasks("Datum", value);
          }
          setDatum(value);
        }}
        onBlur={() => runValidationTasks("Datum", Datum)}
        errorMessage={errors.Datum?.errorMessage}
        hasError={errors.Datum?.hasError}
        {...getOverrideProps(overrides, "Datum")}
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
