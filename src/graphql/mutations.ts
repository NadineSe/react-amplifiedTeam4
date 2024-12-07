/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createKalender = /* GraphQL */ `mutation CreateKalender(
  $input: CreateKalenderInput!
  $condition: ModelKalenderConditionInput
) {
  createKalender(input: $input, condition: $condition) {
    id
    Name
    Benutzers {
      nextToken
      __typename
    }
    feiertagID
    terminID
    Farbe
    termins {
      nextToken
      __typename
    }
    feiertags {
      nextToken
      __typename
    }
    todos {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateKalenderMutationVariables,
  APITypes.CreateKalenderMutation
>;
export const updateKalender = /* GraphQL */ `mutation UpdateKalender(
  $input: UpdateKalenderInput!
  $condition: ModelKalenderConditionInput
) {
  updateKalender(input: $input, condition: $condition) {
    id
    Name
    Benutzers {
      nextToken
      __typename
    }
    feiertagID
    terminID
    Farbe
    termins {
      nextToken
      __typename
    }
    feiertags {
      nextToken
      __typename
    }
    todos {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateKalenderMutationVariables,
  APITypes.UpdateKalenderMutation
>;
export const deleteKalender = /* GraphQL */ `mutation DeleteKalender(
  $input: DeleteKalenderInput!
  $condition: ModelKalenderConditionInput
) {
  deleteKalender(input: $input, condition: $condition) {
    id
    Name
    Benutzers {
      nextToken
      __typename
    }
    feiertagID
    terminID
    Farbe
    termins {
      nextToken
      __typename
    }
    feiertags {
      nextToken
      __typename
    }
    todos {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteKalenderMutationVariables,
  APITypes.DeleteKalenderMutation
>;
export const createFeiertag = /* GraphQL */ `mutation CreateFeiertag(
  $input: CreateFeiertagInput!
  $condition: ModelFeiertagConditionInput
) {
  createFeiertag(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeiertagMutationVariables,
  APITypes.CreateFeiertagMutation
>;
export const updateFeiertag = /* GraphQL */ `mutation UpdateFeiertag(
  $input: UpdateFeiertagInput!
  $condition: ModelFeiertagConditionInput
) {
  updateFeiertag(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeiertagMutationVariables,
  APITypes.UpdateFeiertagMutation
>;
export const deleteFeiertag = /* GraphQL */ `mutation DeleteFeiertag(
  $input: DeleteFeiertagInput!
  $condition: ModelFeiertagConditionInput
) {
  deleteFeiertag(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeiertagMutationVariables,
  APITypes.DeleteFeiertagMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Erledigt
    Kalender {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Erledigt
    Kalender {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Erledigt
    Kalender {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createTermin = /* GraphQL */ `mutation CreateTermin(
  $input: CreateTerminInput!
  $condition: ModelTerminConditionInput
) {
  createTermin(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Von
    Bis
    Kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerminMutationVariables,
  APITypes.CreateTerminMutation
>;
export const updateTermin = /* GraphQL */ `mutation UpdateTermin(
  $input: UpdateTerminInput!
  $condition: ModelTerminConditionInput
) {
  updateTermin(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Von
    Bis
    Kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerminMutationVariables,
  APITypes.UpdateTerminMutation
>;
export const deleteTermin = /* GraphQL */ `mutation DeleteTermin(
  $input: DeleteTerminInput!
  $condition: ModelTerminConditionInput
) {
  deleteTermin(input: $input, condition: $condition) {
    id
    Titel
    Datum
    Von
    Bis
    Kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerminMutationVariables,
  APITypes.DeleteTerminMutation
>;
export const createBenutzer = /* GraphQL */ `mutation CreateBenutzer(
  $input: CreateBenutzerInput!
  $condition: ModelBenutzerConditionInput
) {
  createBenutzer(input: $input, condition: $condition) {
    id
    Vorname
    email
    userID
    Nachname
    kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBenutzerMutationVariables,
  APITypes.CreateBenutzerMutation
>;
export const updateBenutzer = /* GraphQL */ `mutation UpdateBenutzer(
  $input: UpdateBenutzerInput!
  $condition: ModelBenutzerConditionInput
) {
  updateBenutzer(input: $input, condition: $condition) {
    id
    Vorname
    email
    userID
    Nachname
    kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBenutzerMutationVariables,
  APITypes.UpdateBenutzerMutation
>;
export const deleteBenutzer = /* GraphQL */ `mutation DeleteBenutzer(
  $input: DeleteBenutzerInput!
  $condition: ModelBenutzerConditionInput
) {
  deleteBenutzer(input: $input, condition: $condition) {
    id
    Vorname
    email
    userID
    Nachname
    kalenders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBenutzerMutationVariables,
  APITypes.DeleteBenutzerMutation
>;
export const createProfileImage = /* GraphQL */ `mutation CreateProfileImage(
  $input: CreateProfileImageInput!
  $condition: ModelProfileImageConditionInput
) {
  createProfileImage(input: $input, condition: $condition) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileImageMutationVariables,
  APITypes.CreateProfileImageMutation
>;
export const updateProfileImage = /* GraphQL */ `mutation UpdateProfileImage(
  $input: UpdateProfileImageInput!
  $condition: ModelProfileImageConditionInput
) {
  updateProfileImage(input: $input, condition: $condition) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileImageMutationVariables,
  APITypes.UpdateProfileImageMutation
>;
export const deleteProfileImage = /* GraphQL */ `mutation DeleteProfileImage(
  $input: DeleteProfileImageInput!
  $condition: ModelProfileImageConditionInput
) {
  deleteProfileImage(input: $input, condition: $condition) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileImageMutationVariables,
  APITypes.DeleteProfileImageMutation
>;
export const createKalenderBenutzer = /* GraphQL */ `mutation CreateKalenderBenutzer(
  $input: CreateKalenderBenutzerInput!
  $condition: ModelKalenderBenutzerConditionInput
) {
  createKalenderBenutzer(input: $input, condition: $condition) {
    id
    kalenderId
    benutzerId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    benutzer {
      id
      Vorname
      email
      userID
      Nachname
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateKalenderBenutzerMutationVariables,
  APITypes.CreateKalenderBenutzerMutation
>;
export const updateKalenderBenutzer = /* GraphQL */ `mutation UpdateKalenderBenutzer(
  $input: UpdateKalenderBenutzerInput!
  $condition: ModelKalenderBenutzerConditionInput
) {
  updateKalenderBenutzer(input: $input, condition: $condition) {
    id
    kalenderId
    benutzerId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    benutzer {
      id
      Vorname
      email
      userID
      Nachname
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateKalenderBenutzerMutationVariables,
  APITypes.UpdateKalenderBenutzerMutation
>;
export const deleteKalenderBenutzer = /* GraphQL */ `mutation DeleteKalenderBenutzer(
  $input: DeleteKalenderBenutzerInput!
  $condition: ModelKalenderBenutzerConditionInput
) {
  deleteKalenderBenutzer(input: $input, condition: $condition) {
    id
    kalenderId
    benutzerId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    benutzer {
      id
      Vorname
      email
      userID
      Nachname
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteKalenderBenutzerMutationVariables,
  APITypes.DeleteKalenderBenutzerMutation
>;
export const createTerminKalender = /* GraphQL */ `mutation CreateTerminKalender(
  $input: CreateTerminKalenderInput!
  $condition: ModelTerminKalenderConditionInput
) {
  createTerminKalender(input: $input, condition: $condition) {
    id
    kalenderId
    terminId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    termin {
      id
      Titel
      Datum
      Von
      Bis
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerminKalenderMutationVariables,
  APITypes.CreateTerminKalenderMutation
>;
export const updateTerminKalender = /* GraphQL */ `mutation UpdateTerminKalender(
  $input: UpdateTerminKalenderInput!
  $condition: ModelTerminKalenderConditionInput
) {
  updateTerminKalender(input: $input, condition: $condition) {
    id
    kalenderId
    terminId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    termin {
      id
      Titel
      Datum
      Von
      Bis
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerminKalenderMutationVariables,
  APITypes.UpdateTerminKalenderMutation
>;
export const deleteTerminKalender = /* GraphQL */ `mutation DeleteTerminKalender(
  $input: DeleteTerminKalenderInput!
  $condition: ModelTerminKalenderConditionInput
) {
  deleteTerminKalender(input: $input, condition: $condition) {
    id
    kalenderId
    terminId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    termin {
      id
      Titel
      Datum
      Von
      Bis
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerminKalenderMutationVariables,
  APITypes.DeleteTerminKalenderMutation
>;
export const createFeiertagKalender = /* GraphQL */ `mutation CreateFeiertagKalender(
  $input: CreateFeiertagKalenderInput!
  $condition: ModelFeiertagKalenderConditionInput
) {
  createFeiertagKalender(input: $input, condition: $condition) {
    id
    kalenderId
    feiertagId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    feiertag {
      id
      Titel
      Datum
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeiertagKalenderMutationVariables,
  APITypes.CreateFeiertagKalenderMutation
>;
export const updateFeiertagKalender = /* GraphQL */ `mutation UpdateFeiertagKalender(
  $input: UpdateFeiertagKalenderInput!
  $condition: ModelFeiertagKalenderConditionInput
) {
  updateFeiertagKalender(input: $input, condition: $condition) {
    id
    kalenderId
    feiertagId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    feiertag {
      id
      Titel
      Datum
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeiertagKalenderMutationVariables,
  APITypes.UpdateFeiertagKalenderMutation
>;
export const deleteFeiertagKalender = /* GraphQL */ `mutation DeleteFeiertagKalender(
  $input: DeleteFeiertagKalenderInput!
  $condition: ModelFeiertagKalenderConditionInput
) {
  deleteFeiertagKalender(input: $input, condition: $condition) {
    id
    kalenderId
    feiertagId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    feiertag {
      id
      Titel
      Datum
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeiertagKalenderMutationVariables,
  APITypes.DeleteFeiertagKalenderMutation
>;
export const createTodoKalender = /* GraphQL */ `mutation CreateTodoKalender(
  $input: CreateTodoKalenderInput!
  $condition: ModelTodoKalenderConditionInput
) {
  createTodoKalender(input: $input, condition: $condition) {
    id
    kalenderId
    todoId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    todo {
      id
      Titel
      Datum
      Erledigt
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoKalenderMutationVariables,
  APITypes.CreateTodoKalenderMutation
>;
export const updateTodoKalender = /* GraphQL */ `mutation UpdateTodoKalender(
  $input: UpdateTodoKalenderInput!
  $condition: ModelTodoKalenderConditionInput
) {
  updateTodoKalender(input: $input, condition: $condition) {
    id
    kalenderId
    todoId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    todo {
      id
      Titel
      Datum
      Erledigt
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoKalenderMutationVariables,
  APITypes.UpdateTodoKalenderMutation
>;
export const deleteTodoKalender = /* GraphQL */ `mutation DeleteTodoKalender(
  $input: DeleteTodoKalenderInput!
  $condition: ModelTodoKalenderConditionInput
) {
  deleteTodoKalender(input: $input, condition: $condition) {
    id
    kalenderId
    todoId
    kalender {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    todo {
      id
      Titel
      Datum
      Erledigt
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoKalenderMutationVariables,
  APITypes.DeleteTodoKalenderMutation
>;
