/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateKalender = /* GraphQL */ `subscription OnCreateKalender($filter: ModelSubscriptionKalenderFilterInput) {
  onCreateKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateKalenderSubscriptionVariables,
  APITypes.OnCreateKalenderSubscription
>;
export const onUpdateKalender = /* GraphQL */ `subscription OnUpdateKalender($filter: ModelSubscriptionKalenderFilterInput) {
  onUpdateKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateKalenderSubscriptionVariables,
  APITypes.OnUpdateKalenderSubscription
>;
export const onDeleteKalender = /* GraphQL */ `subscription OnDeleteKalender($filter: ModelSubscriptionKalenderFilterInput) {
  onDeleteKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteKalenderSubscriptionVariables,
  APITypes.OnDeleteKalenderSubscription
>;
export const onCreateFeiertag = /* GraphQL */ `subscription OnCreateFeiertag($filter: ModelSubscriptionFeiertagFilterInput) {
  onCreateFeiertag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeiertagSubscriptionVariables,
  APITypes.OnCreateFeiertagSubscription
>;
export const onUpdateFeiertag = /* GraphQL */ `subscription OnUpdateFeiertag($filter: ModelSubscriptionFeiertagFilterInput) {
  onUpdateFeiertag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeiertagSubscriptionVariables,
  APITypes.OnUpdateFeiertagSubscription
>;
export const onDeleteFeiertag = /* GraphQL */ `subscription OnDeleteFeiertag($filter: ModelSubscriptionFeiertagFilterInput) {
  onDeleteFeiertag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeiertagSubscriptionVariables,
  APITypes.OnDeleteFeiertagSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateTermin = /* GraphQL */ `subscription OnCreateTermin($filter: ModelSubscriptionTerminFilterInput) {
  onCreateTermin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerminSubscriptionVariables,
  APITypes.OnCreateTerminSubscription
>;
export const onUpdateTermin = /* GraphQL */ `subscription OnUpdateTermin($filter: ModelSubscriptionTerminFilterInput) {
  onUpdateTermin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerminSubscriptionVariables,
  APITypes.OnUpdateTerminSubscription
>;
export const onDeleteTermin = /* GraphQL */ `subscription OnDeleteTermin($filter: ModelSubscriptionTerminFilterInput) {
  onDeleteTermin(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerminSubscriptionVariables,
  APITypes.OnDeleteTerminSubscription
>;
export const onCreateBenutzer = /* GraphQL */ `subscription OnCreateBenutzer($filter: ModelSubscriptionBenutzerFilterInput) {
  onCreateBenutzer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBenutzerSubscriptionVariables,
  APITypes.OnCreateBenutzerSubscription
>;
export const onUpdateBenutzer = /* GraphQL */ `subscription OnUpdateBenutzer($filter: ModelSubscriptionBenutzerFilterInput) {
  onUpdateBenutzer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBenutzerSubscriptionVariables,
  APITypes.OnUpdateBenutzerSubscription
>;
export const onDeleteBenutzer = /* GraphQL */ `subscription OnDeleteBenutzer($filter: ModelSubscriptionBenutzerFilterInput) {
  onDeleteBenutzer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBenutzerSubscriptionVariables,
  APITypes.OnDeleteBenutzerSubscription
>;
export const onCreateProfileImage = /* GraphQL */ `subscription OnCreateProfileImage(
  $filter: ModelSubscriptionProfileImageFilterInput
) {
  onCreateProfileImage(filter: $filter) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileImageSubscriptionVariables,
  APITypes.OnCreateProfileImageSubscription
>;
export const onUpdateProfileImage = /* GraphQL */ `subscription OnUpdateProfileImage(
  $filter: ModelSubscriptionProfileImageFilterInput
) {
  onUpdateProfileImage(filter: $filter) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileImageSubscriptionVariables,
  APITypes.OnUpdateProfileImageSubscription
>;
export const onDeleteProfileImage = /* GraphQL */ `subscription OnDeleteProfileImage(
  $filter: ModelSubscriptionProfileImageFilterInput
) {
  onDeleteProfileImage(filter: $filter) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileImageSubscriptionVariables,
  APITypes.OnDeleteProfileImageSubscription
>;
export const onCreateKalenderBenutzer = /* GraphQL */ `subscription OnCreateKalenderBenutzer(
  $filter: ModelSubscriptionKalenderBenutzerFilterInput
) {
  onCreateKalenderBenutzer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateKalenderBenutzerSubscriptionVariables,
  APITypes.OnCreateKalenderBenutzerSubscription
>;
export const onUpdateKalenderBenutzer = /* GraphQL */ `subscription OnUpdateKalenderBenutzer(
  $filter: ModelSubscriptionKalenderBenutzerFilterInput
) {
  onUpdateKalenderBenutzer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateKalenderBenutzerSubscriptionVariables,
  APITypes.OnUpdateKalenderBenutzerSubscription
>;
export const onDeleteKalenderBenutzer = /* GraphQL */ `subscription OnDeleteKalenderBenutzer(
  $filter: ModelSubscriptionKalenderBenutzerFilterInput
) {
  onDeleteKalenderBenutzer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteKalenderBenutzerSubscriptionVariables,
  APITypes.OnDeleteKalenderBenutzerSubscription
>;
export const onCreateTerminKalender = /* GraphQL */ `subscription OnCreateTerminKalender(
  $filter: ModelSubscriptionTerminKalenderFilterInput
) {
  onCreateTerminKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerminKalenderSubscriptionVariables,
  APITypes.OnCreateTerminKalenderSubscription
>;
export const onUpdateTerminKalender = /* GraphQL */ `subscription OnUpdateTerminKalender(
  $filter: ModelSubscriptionTerminKalenderFilterInput
) {
  onUpdateTerminKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerminKalenderSubscriptionVariables,
  APITypes.OnUpdateTerminKalenderSubscription
>;
export const onDeleteTerminKalender = /* GraphQL */ `subscription OnDeleteTerminKalender(
  $filter: ModelSubscriptionTerminKalenderFilterInput
) {
  onDeleteTerminKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerminKalenderSubscriptionVariables,
  APITypes.OnDeleteTerminKalenderSubscription
>;
export const onCreateFeiertagKalender = /* GraphQL */ `subscription OnCreateFeiertagKalender(
  $filter: ModelSubscriptionFeiertagKalenderFilterInput
) {
  onCreateFeiertagKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeiertagKalenderSubscriptionVariables,
  APITypes.OnCreateFeiertagKalenderSubscription
>;
export const onUpdateFeiertagKalender = /* GraphQL */ `subscription OnUpdateFeiertagKalender(
  $filter: ModelSubscriptionFeiertagKalenderFilterInput
) {
  onUpdateFeiertagKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeiertagKalenderSubscriptionVariables,
  APITypes.OnUpdateFeiertagKalenderSubscription
>;
export const onDeleteFeiertagKalender = /* GraphQL */ `subscription OnDeleteFeiertagKalender(
  $filter: ModelSubscriptionFeiertagKalenderFilterInput
) {
  onDeleteFeiertagKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeiertagKalenderSubscriptionVariables,
  APITypes.OnDeleteFeiertagKalenderSubscription
>;
export const onCreateTodoKalender = /* GraphQL */ `subscription OnCreateTodoKalender(
  $filter: ModelSubscriptionTodoKalenderFilterInput
) {
  onCreateTodoKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTodoKalenderSubscriptionVariables,
  APITypes.OnCreateTodoKalenderSubscription
>;
export const onUpdateTodoKalender = /* GraphQL */ `subscription OnUpdateTodoKalender(
  $filter: ModelSubscriptionTodoKalenderFilterInput
) {
  onUpdateTodoKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTodoKalenderSubscriptionVariables,
  APITypes.OnUpdateTodoKalenderSubscription
>;
export const onDeleteTodoKalender = /* GraphQL */ `subscription OnDeleteTodoKalender(
  $filter: ModelSubscriptionTodoKalenderFilterInput
) {
  onDeleteTodoKalender(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTodoKalenderSubscriptionVariables,
  APITypes.OnDeleteTodoKalenderSubscription
>;
