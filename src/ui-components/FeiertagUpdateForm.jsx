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
import { getFeiertag } from "../graphql/queries";
import { updateFeiertag } from "../graphql/mutations";
const client = generateClient();
export default function FeiertagUpdateForm(props) {
  const {
    id: idProp,
    feiertag: feiertagModelProp,
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
    const cleanValues = feiertagRecord
      ? { ...initialValues, ...feiertagRecord }
      : initialValues;
    setTitel(cleanValues.Titel);
    setDatum(cleanValues.Datum);
    setErrors({});
  };
  const [feiertagRecord, setFeiertagRecord] = React.useState(feiertagModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFeiertag.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFeiertag
        : feiertagModelProp;
      setFeiertagRecord(record);
    };
    queryData();
  }, [idProp, feiertagModelProp]);
  React.useEffect(resetStateValues, [feiertagRecord]);
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
          Titel: Titel ?? null,
          Datum: Datum ?? null,
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
            query: updateFeiertag.replaceAll("__typename", ""),
            variables: {
              input: {
                id: feiertagRecord.id,
                ...modelFields,
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
      {...getOverrideProps(overrides, "FeiertagUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || feiertagModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || feiertagModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
