/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getKalender = /* GraphQL */ `query GetKalender($id: ID!) {
  getKalender(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetKalenderQueryVariables,
  APITypes.GetKalenderQuery
>;
export const listKalenders = /* GraphQL */ `query ListKalenders(
  $filter: ModelKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  listKalenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKalendersQueryVariables,
  APITypes.ListKalendersQuery
>;
export const kalendersByFeiertagID = /* GraphQL */ `query KalendersByFeiertagID(
  $feiertagID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  kalendersByFeiertagID(
    feiertagID: $feiertagID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.KalendersByFeiertagIDQueryVariables,
  APITypes.KalendersByFeiertagIDQuery
>;
export const kalendersByTerminID = /* GraphQL */ `query KalendersByTerminID(
  $terminID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  kalendersByTerminID(
    terminID: $terminID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Name
      feiertagID
      terminID
      Farbe
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.KalendersByTerminIDQueryVariables,
  APITypes.KalendersByTerminIDQuery
>;
export const getFeiertag = /* GraphQL */ `query GetFeiertag($id: ID!) {
  getFeiertag(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFeiertagQueryVariables,
  APITypes.GetFeiertagQuery
>;
export const listFeiertags = /* GraphQL */ `query ListFeiertags(
  $filter: ModelFeiertagFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeiertags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Titel
      Datum
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeiertagsQueryVariables,
  APITypes.ListFeiertagsQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
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
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Titel
      Datum
      Erledigt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getTermin = /* GraphQL */ `query GetTermin($id: ID!) {
  getTermin(id: $id) {
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
` as GeneratedQuery<APITypes.GetTerminQueryVariables, APITypes.GetTerminQuery>;
export const listTermins = /* GraphQL */ `query ListTermins(
  $filter: ModelTerminFilterInput
  $limit: Int
  $nextToken: String
) {
  listTermins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Titel
      Datum
      Von
      Bis
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTerminsQueryVariables,
  APITypes.ListTerminsQuery
>;
export const getBenutzer = /* GraphQL */ `query GetBenutzer($id: ID!) {
  getBenutzer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBenutzerQueryVariables,
  APITypes.GetBenutzerQuery
>;
export const listBenutzers = /* GraphQL */ `query ListBenutzers(
  $filter: ModelBenutzerFilterInput
  $limit: Int
  $nextToken: String
) {
  listBenutzers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Vorname
      email
      userID
      Nachname
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBenutzersQueryVariables,
  APITypes.ListBenutzersQuery
>;
export const getProfileImage = /* GraphQL */ `query GetProfileImage($id: ID!) {
  getProfileImage(id: $id) {
    id
    userID
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileImageQueryVariables,
  APITypes.GetProfileImageQuery
>;
export const listProfileImages = /* GraphQL */ `query ListProfileImages(
  $filter: ModelProfileImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfileImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfileImagesQueryVariables,
  APITypes.ListProfileImagesQuery
>;
export const getKalenderBenutzer = /* GraphQL */ `query GetKalenderBenutzer($id: ID!) {
  getKalenderBenutzer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetKalenderBenutzerQueryVariables,
  APITypes.GetKalenderBenutzerQuery
>;
export const listKalenderBenutzers = /* GraphQL */ `query ListKalenderBenutzers(
  $filter: ModelKalenderBenutzerFilterInput
  $limit: Int
  $nextToken: String
) {
  listKalenderBenutzers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      kalenderId
      benutzerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKalenderBenutzersQueryVariables,
  APITypes.ListKalenderBenutzersQuery
>;
export const kalenderBenutzersByKalenderId = /* GraphQL */ `query KalenderBenutzersByKalenderId(
  $kalenderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelKalenderBenutzerFilterInput
  $limit: Int
  $nextToken: String
) {
  kalenderBenutzersByKalenderId(
    kalenderId: $kalenderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      benutzerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.KalenderBenutzersByKalenderIdQueryVariables,
  APITypes.KalenderBenutzersByKalenderIdQuery
>;
export const kalenderBenutzersByBenutzerId = /* GraphQL */ `query KalenderBenutzersByBenutzerId(
  $benutzerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelKalenderBenutzerFilterInput
  $limit: Int
  $nextToken: String
) {
  kalenderBenutzersByBenutzerId(
    benutzerId: $benutzerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      benutzerId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.KalenderBenutzersByBenutzerIdQueryVariables,
  APITypes.KalenderBenutzersByBenutzerIdQuery
>;
export const getTerminKalender = /* GraphQL */ `query GetTerminKalender($id: ID!) {
  getTerminKalender(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTerminKalenderQueryVariables,
  APITypes.GetTerminKalenderQuery
>;
export const listTerminKalenders = /* GraphQL */ `query ListTerminKalenders(
  $filter: ModelTerminKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  listTerminKalenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      kalenderId
      terminId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTerminKalendersQueryVariables,
  APITypes.ListTerminKalendersQuery
>;
export const terminKalendersByKalenderId = /* GraphQL */ `query TerminKalendersByKalenderId(
  $kalenderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTerminKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  terminKalendersByKalenderId(
    kalenderId: $kalenderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      terminId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TerminKalendersByKalenderIdQueryVariables,
  APITypes.TerminKalendersByKalenderIdQuery
>;
export const terminKalendersByTerminId = /* GraphQL */ `query TerminKalendersByTerminId(
  $terminId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTerminKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  terminKalendersByTerminId(
    terminId: $terminId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      terminId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TerminKalendersByTerminIdQueryVariables,
  APITypes.TerminKalendersByTerminIdQuery
>;
export const getFeiertagKalender = /* GraphQL */ `query GetFeiertagKalender($id: ID!) {
  getFeiertagKalender(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFeiertagKalenderQueryVariables,
  APITypes.GetFeiertagKalenderQuery
>;
export const listFeiertagKalenders = /* GraphQL */ `query ListFeiertagKalenders(
  $filter: ModelFeiertagKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeiertagKalenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      kalenderId
      feiertagId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeiertagKalendersQueryVariables,
  APITypes.ListFeiertagKalendersQuery
>;
export const feiertagKalendersByKalenderId = /* GraphQL */ `query FeiertagKalendersByKalenderId(
  $kalenderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFeiertagKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  feiertagKalendersByKalenderId(
    kalenderId: $kalenderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      feiertagId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FeiertagKalendersByKalenderIdQueryVariables,
  APITypes.FeiertagKalendersByKalenderIdQuery
>;
export const feiertagKalendersByFeiertagId = /* GraphQL */ `query FeiertagKalendersByFeiertagId(
  $feiertagId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFeiertagKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  feiertagKalendersByFeiertagId(
    feiertagId: $feiertagId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      feiertagId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FeiertagKalendersByFeiertagIdQueryVariables,
  APITypes.FeiertagKalendersByFeiertagIdQuery
>;
export const getTodoKalender = /* GraphQL */ `query GetTodoKalender($id: ID!) {
  getTodoKalender(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTodoKalenderQueryVariables,
  APITypes.GetTodoKalenderQuery
>;
export const listTodoKalenders = /* GraphQL */ `query ListTodoKalenders(
  $filter: ModelTodoKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodoKalenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      kalenderId
      todoId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodoKalendersQueryVariables,
  APITypes.ListTodoKalendersQuery
>;
export const todoKalendersByKalenderId = /* GraphQL */ `query TodoKalendersByKalenderId(
  $kalenderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTodoKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  todoKalendersByKalenderId(
    kalenderId: $kalenderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      todoId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TodoKalendersByKalenderIdQueryVariables,
  APITypes.TodoKalendersByKalenderIdQuery
>;
export const todoKalendersByTodoId = /* GraphQL */ `query TodoKalendersByTodoId(
  $todoId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTodoKalenderFilterInput
  $limit: Int
  $nextToken: String
) {
  todoKalendersByTodoId(
    todoId: $todoId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      kalenderId
      todoId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TodoKalendersByTodoIdQueryVariables,
  APITypes.TodoKalendersByTodoIdQuery
>;
