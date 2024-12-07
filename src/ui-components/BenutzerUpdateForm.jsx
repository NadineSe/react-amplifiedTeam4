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
import { getBenutzer } from "../graphql/queries";
import { updateBenutzer } from "../graphql/mutations";
const client = generateClient();
export default function BenutzerUpdateForm(props) {
  const {
    id: idProp,
    benutzer: benutzerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Vorname: "",
    email: "",
    userID: "",
    Nachname: "",
  };
  const [Vorname, setVorname] = React.useState(initialValues.Vorname);
  const [email, setEmail] = React.useState(initialValues.email);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [Nachname, setNachname] = React.useState(initialValues.Nachname);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = benutzerRecord
      ? { ...initialValues, ...benutzerRecord }
      : initialValues;
    setVorname(cleanValues.Vorname);
    setEmail(cleanValues.email);
    setUserID(cleanValues.userID);
    setNachname(cleanValues.Nachname);
    setErrors({});
  };
  const [benutzerRecord, setBenutzerRecord] = React.useState(benutzerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBenutzer.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBenutzer
        : benutzerModelProp;
      setBenutzerRecord(record);
    };
    queryData();
  }, [idProp, benutzerModelProp]);
  React.useEffect(resetStateValues, [benutzerRecord]);
  const validations = {
    Vorname: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    userID: [{ type: "Required" }],
    Nachname: [],
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
          Vorname,
          email,
          userID,
          Nachname: Nachname ?? null,
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
            query: updateBenutzer.replaceAll("__typename", ""),
            variables: {
              input: {
                id: benutzerRecord.id,
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
      {...getOverrideProps(overrides, "BenutzerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Vorname"
        isRequired={true}
        isReadOnly={false}
        value={Vorname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname: value,
              email,
              userID,
              Nachname,
            };
            const result = onChange(modelFields);
            value = result?.Vorname ?? value;
          }
          if (errors.Vorname?.hasError) {
            runValidationTasks("Vorname", value);
          }
          setVorname(value);
        }}
        onBlur={() => runValidationTasks("Vorname", Vorname)}
        errorMessage={errors.Vorname?.errorMessage}
        hasError={errors.Vorname?.hasError}
        {...getOverrideProps(overrides, "Vorname")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname,
              email: value,
              userID,
              Nachname,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname,
              email,
              userID: value,
              Nachname,
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
        label="Nachname"
        isRequired={false}
        isReadOnly={false}
        value={Nachname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname,
              email,
              userID,
              Nachname: value,
            };
            const result = onChange(modelFields);
            value = result?.Nachname ?? value;
          }
          if (errors.Nachname?.hasError) {
            runValidationTasks("Nachname", value);
          }
          setNachname(value);
        }}
        onBlur={() => runValidationTasks("Nachname", Nachname)}
        errorMessage={errors.Nachname?.errorMessage}
        hasError={errors.Nachname?.hasError}
        {...getOverrideProps(overrides, "Nachname")}
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
          isDisabled={!(idProp || benutzerModelProp)}
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
              !(idProp || benutzerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
