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
import { getKalender } from "../graphql/queries";
import { updateKalender } from "../graphql/mutations";
const client = generateClient();
export default function KalenderUpdateForm(props) {
  const {
    id: idProp,
    kalender: kalenderModelProp,
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
    const cleanValues = kalenderRecord
      ? { ...initialValues, ...kalenderRecord }
      : initialValues;
    setName(cleanValues.Name);
    setFeiertagID(cleanValues.feiertagID);
    setTerminID(cleanValues.terminID);
    setFarbe(cleanValues.Farbe);
    setErrors({});
  };
  const [kalenderRecord, setKalenderRecord] = React.useState(kalenderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getKalender.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getKalender
        : kalenderModelProp;
      setKalenderRecord(record);
    };
    queryData();
  }, [idProp, kalenderModelProp]);
  React.useEffect(resetStateValues, [kalenderRecord]);
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
          Name: Name ?? null,
          feiertagID: feiertagID ?? null,
          terminID: terminID ?? null,
          Farbe: Farbe ?? null,
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
            query: updateKalender.replaceAll("__typename", ""),
            variables: {
              input: {
                id: kalenderRecord.id,
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
      {...getOverrideProps(overrides, "KalenderUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || kalenderModelProp)}
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
              !(idProp || kalenderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
