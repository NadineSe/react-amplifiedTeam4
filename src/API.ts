/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateKalenderInput = {
  id?: string | null,
  Name?: string | null,
  feiertagID?: string | null,
  terminID?: string | null,
  Farbe?: string | null,
};

export type ModelKalenderConditionInput = {
  Name?: ModelStringInput | null,
  feiertagID?: ModelIDInput | null,
  terminID?: ModelIDInput | null,
  Farbe?: ModelStringInput | null,
  and?: Array< ModelKalenderConditionInput | null > | null,
  or?: Array< ModelKalenderConditionInput | null > | null,
  not?: ModelKalenderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Kalender = {
  __typename: "Kalender",
  id: string,
  Name?: string | null,
  Benutzers?: ModelKalenderBenutzerConnection | null,
  feiertagID?: string | null,
  terminID?: string | null,
  Farbe?: string | null,
  termins?: ModelTerminKalenderConnection | null,
  feiertags?: ModelFeiertagKalenderConnection | null,
  todos?: ModelTodoKalenderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelKalenderBenutzerConnection = {
  __typename: "ModelKalenderBenutzerConnection",
  items:  Array<KalenderBenutzer | null >,
  nextToken?: string | null,
};

export type KalenderBenutzer = {
  __typename: "KalenderBenutzer",
  id: string,
  kalenderId: string,
  benutzerId: string,
  kalender: Kalender,
  benutzer: Benutzer,
  createdAt: string,
  updatedAt: string,
};

export type Benutzer = {
  __typename: "Benutzer",
  id: string,
  Vorname: string,
  email: string,
  userID: string,
  Nachname?: string | null,
  kalenders?: ModelKalenderBenutzerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTerminKalenderConnection = {
  __typename: "ModelTerminKalenderConnection",
  items:  Array<TerminKalender | null >,
  nextToken?: string | null,
};

export type TerminKalender = {
  __typename: "TerminKalender",
  id: string,
  kalenderId: string,
  terminId: string,
  kalender: Kalender,
  termin: Termin,
  createdAt: string,
  updatedAt: string,
};

export type Termin = {
  __typename: "Termin",
  id: string,
  Titel?: string | null,
  Datum?: string | null,
  Von?: string | null,
  Bis?: string | null,
  Kalenders?: ModelTerminKalenderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFeiertagKalenderConnection = {
  __typename: "ModelFeiertagKalenderConnection",
  items:  Array<FeiertagKalender | null >,
  nextToken?: string | null,
};

export type FeiertagKalender = {
  __typename: "FeiertagKalender",
  id: string,
  kalenderId: string,
  feiertagId: string,
  kalender: Kalender,
  feiertag: Feiertag,
  createdAt: string,
  updatedAt: string,
};

export type Feiertag = {
  __typename: "Feiertag",
  id: string,
  Titel?: string | null,
  Datum?: string | null,
  Kalenders?: ModelFeiertagKalenderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTodoKalenderConnection = {
  __typename: "ModelTodoKalenderConnection",
  items:  Array<TodoKalender | null >,
  nextToken?: string | null,
};

export type TodoKalender = {
  __typename: "TodoKalender",
  id: string,
  kalenderId: string,
  todoId: string,
  kalender: Kalender,
  todo: Todo,
  createdAt: string,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  Titel?: string | null,
  Datum?: string | null,
  Erledigt?: boolean | null,
  Kalender?: ModelTodoKalenderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateKalenderInput = {
  id: string,
  Name?: string | null,
  feiertagID?: string | null,
  terminID?: string | null,
  Farbe?: string | null,
};

export type DeleteKalenderInput = {
  id: string,
};

export type CreateFeiertagInput = {
  id?: string | null,
  Titel?: string | null,
  Datum?: string | null,
};

export type ModelFeiertagConditionInput = {
  Titel?: ModelStringInput | null,
  Datum?: ModelStringInput | null,
  and?: Array< ModelFeiertagConditionInput | null > | null,
  or?: Array< ModelFeiertagConditionInput | null > | null,
  not?: ModelFeiertagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFeiertagInput = {
  id: string,
  Titel?: string | null,
  Datum?: string | null,
};

export type DeleteFeiertagInput = {
  id: string,
};

export type CreateTodoInput = {
  id?: string | null,
  Titel?: string | null,
  Datum?: string | null,
  Erledigt?: boolean | null,
};

export type ModelTodoConditionInput = {
  Titel?: ModelStringInput | null,
  Datum?: ModelStringInput | null,
  Erledigt?: ModelBooleanInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  Titel?: string | null,
  Datum?: string | null,
  Erledigt?: boolean | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateTerminInput = {
  id?: string | null,
  Titel?: string | null,
  Datum?: string | null,
  Von?: string | null,
  Bis?: string | null,
};

export type ModelTerminConditionInput = {
  Titel?: ModelStringInput | null,
  Datum?: ModelStringInput | null,
  Von?: ModelStringInput | null,
  Bis?: ModelStringInput | null,
  and?: Array< ModelTerminConditionInput | null > | null,
  or?: Array< ModelTerminConditionInput | null > | null,
  not?: ModelTerminConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTerminInput = {
  id: string,
  Titel?: string | null,
  Datum?: string | null,
  Von?: string | null,
  Bis?: string | null,
};

export type DeleteTerminInput = {
  id: string,
};

export type CreateBenutzerInput = {
  id?: string | null,
  Vorname: string,
  email: string,
  userID: string,
  Nachname?: string | null,
};

export type ModelBenutzerConditionInput = {
  Vorname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  Nachname?: ModelStringInput | null,
  and?: Array< ModelBenutzerConditionInput | null > | null,
  or?: Array< ModelBenutzerConditionInput | null > | null,
  not?: ModelBenutzerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBenutzerInput = {
  id: string,
  Vorname?: string | null,
  email?: string | null,
  userID?: string | null,
  Nachname?: string | null,
};

export type DeleteBenutzerInput = {
  id: string,
};

export type CreateProfileImageInput = {
  id?: string | null,
  userID?: string | null,
  image?: string | null,
};

export type ModelProfileImageConditionInput = {
  userID?: ModelIDInput | null,
  image?: ModelIDInput | null,
  and?: Array< ModelProfileImageConditionInput | null > | null,
  or?: Array< ModelProfileImageConditionInput | null > | null,
  not?: ModelProfileImageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ProfileImage = {
  __typename: "ProfileImage",
  id: string,
  userID?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileImageInput = {
  id: string,
  userID?: string | null,
  image?: string | null,
};

export type DeleteProfileImageInput = {
  id: string,
};

export type CreateKalenderBenutzerInput = {
  id?: string | null,
  kalenderId: string,
  benutzerId: string,
};

export type ModelKalenderBenutzerConditionInput = {
  kalenderId?: ModelIDInput | null,
  benutzerId?: ModelIDInput | null,
  and?: Array< ModelKalenderBenutzerConditionInput | null > | null,
  or?: Array< ModelKalenderBenutzerConditionInput | null > | null,
  not?: ModelKalenderBenutzerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateKalenderBenutzerInput = {
  id: string,
  kalenderId?: string | null,
  benutzerId?: string | null,
};

export type DeleteKalenderBenutzerInput = {
  id: string,
};

export type CreateTerminKalenderInput = {
  id?: string | null,
  kalenderId: string,
  terminId: string,
};

export type ModelTerminKalenderConditionInput = {
  kalenderId?: ModelIDInput | null,
  terminId?: ModelIDInput | null,
  and?: Array< ModelTerminKalenderConditionInput | null > | null,
  or?: Array< ModelTerminKalenderConditionInput | null > | null,
  not?: ModelTerminKalenderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTerminKalenderInput = {
  id: string,
  kalenderId?: string | null,
  terminId?: string | null,
};

export type DeleteTerminKalenderInput = {
  id: string,
};

export type CreateFeiertagKalenderInput = {
  id?: string | null,
  kalenderId: string,
  feiertagId: string,
};

export type ModelFeiertagKalenderConditionInput = {
  kalenderId?: ModelIDInput | null,
  feiertagId?: ModelIDInput | null,
  and?: Array< ModelFeiertagKalenderConditionInput | null > | null,
  or?: Array< ModelFeiertagKalenderConditionInput | null > | null,
  not?: ModelFeiertagKalenderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFeiertagKalenderInput = {
  id: string,
  kalenderId?: string | null,
  feiertagId?: string | null,
};

export type DeleteFeiertagKalenderInput = {
  id: string,
};

export type CreateTodoKalenderInput = {
  id?: string | null,
  kalenderId: string,
  todoId: string,
};

export type ModelTodoKalenderConditionInput = {
  kalenderId?: ModelIDInput | null,
  todoId?: ModelIDInput | null,
  and?: Array< ModelTodoKalenderConditionInput | null > | null,
  or?: Array< ModelTodoKalenderConditionInput | null > | null,
  not?: ModelTodoKalenderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTodoKalenderInput = {
  id: string,
  kalenderId?: string | null,
  todoId?: string | null,
};

export type DeleteTodoKalenderInput = {
  id: string,
};

export type ModelKalenderFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  feiertagID?: ModelIDInput | null,
  terminID?: ModelIDInput | null,
  Farbe?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelKalenderFilterInput | null > | null,
  or?: Array< ModelKalenderFilterInput | null > | null,
  not?: ModelKalenderFilterInput | null,
};

export type ModelKalenderConnection = {
  __typename: "ModelKalenderConnection",
  items:  Array<Kalender | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFeiertagFilterInput = {
  id?: ModelIDInput | null,
  Titel?: ModelStringInput | null,
  Datum?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeiertagFilterInput | null > | null,
  or?: Array< ModelFeiertagFilterInput | null > | null,
  not?: ModelFeiertagFilterInput | null,
};

export type ModelFeiertagConnection = {
  __typename: "ModelFeiertagConnection",
  items:  Array<Feiertag | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  Titel?: ModelStringInput | null,
  Datum?: ModelStringInput | null,
  Erledigt?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelTerminFilterInput = {
  id?: ModelIDInput | null,
  Titel?: ModelStringInput | null,
  Datum?: ModelStringInput | null,
  Von?: ModelStringInput | null,
  Bis?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTerminFilterInput | null > | null,
  or?: Array< ModelTerminFilterInput | null > | null,
  not?: ModelTerminFilterInput | null,
};

export type ModelTerminConnection = {
  __typename: "ModelTerminConnection",
  items:  Array<Termin | null >,
  nextToken?: string | null,
};

export type ModelBenutzerFilterInput = {
  id?: ModelIDInput | null,
  Vorname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  Nachname?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBenutzerFilterInput | null > | null,
  or?: Array< ModelBenutzerFilterInput | null > | null,
  not?: ModelBenutzerFilterInput | null,
};

export type ModelBenutzerConnection = {
  __typename: "ModelBenutzerConnection",
  items:  Array<Benutzer | null >,
  nextToken?: string | null,
};

export type ModelProfileImageFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  image?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileImageFilterInput | null > | null,
  or?: Array< ModelProfileImageFilterInput | null > | null,
  not?: ModelProfileImageFilterInput | null,
};

export type ModelProfileImageConnection = {
  __typename: "ModelProfileImageConnection",
  items:  Array<ProfileImage | null >,
  nextToken?: string | null,
};

export type ModelKalenderBenutzerFilterInput = {
  id?: ModelIDInput | null,
  kalenderId?: ModelIDInput | null,
  benutzerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelKalenderBenutzerFilterInput | null > | null,
  or?: Array< ModelKalenderBenutzerFilterInput | null > | null,
  not?: ModelKalenderBenutzerFilterInput | null,
};

export type ModelTerminKalenderFilterInput = {
  id?: ModelIDInput | null,
  kalenderId?: ModelIDInput | null,
  terminId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTerminKalenderFilterInput | null > | null,
  or?: Array< ModelTerminKalenderFilterInput | null > | null,
  not?: ModelTerminKalenderFilterInput | null,
};

export type ModelFeiertagKalenderFilterInput = {
  id?: ModelIDInput | null,
  kalenderId?: ModelIDInput | null,
  feiertagId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeiertagKalenderFilterInput | null > | null,
  or?: Array< ModelFeiertagKalenderFilterInput | null > | null,
  not?: ModelFeiertagKalenderFilterInput | null,
};

export type ModelTodoKalenderFilterInput = {
  id?: ModelIDInput | null,
  kalenderId?: ModelIDInput | null,
  todoId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoKalenderFilterInput | null > | null,
  or?: Array< ModelTodoKalenderFilterInput | null > | null,
  not?: ModelTodoKalenderFilterInput | null,
};

export type ModelSubscriptionKalenderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Name?: ModelSubscriptionStringInput | null,
  feiertagID?: ModelSubscriptionIDInput | null,
  terminID?: ModelSubscriptionIDInput | null,
  Farbe?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionKalenderFilterInput | null > | null,
  or?: Array< ModelSubscriptionKalenderFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFeiertagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Titel?: ModelSubscriptionStringInput | null,
  Datum?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeiertagFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeiertagFilterInput | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Titel?: ModelSubscriptionStringInput | null,
  Datum?: ModelSubscriptionStringInput | null,
  Erledigt?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTerminFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Titel?: ModelSubscriptionStringInput | null,
  Datum?: ModelSubscriptionStringInput | null,
  Von?: ModelSubscriptionStringInput | null,
  Bis?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTerminFilterInput | null > | null,
  or?: Array< ModelSubscriptionTerminFilterInput | null > | null,
};

export type ModelSubscriptionBenutzerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Vorname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  Nachname?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBenutzerFilterInput | null > | null,
  or?: Array< ModelSubscriptionBenutzerFilterInput | null > | null,
};

export type ModelSubscriptionProfileImageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileImageFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileImageFilterInput | null > | null,
};

export type ModelSubscriptionKalenderBenutzerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  kalenderId?: ModelSubscriptionIDInput | null,
  benutzerId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionKalenderBenutzerFilterInput | null > | null,
  or?: Array< ModelSubscriptionKalenderBenutzerFilterInput | null > | null,
};

export type ModelSubscriptionTerminKalenderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  kalenderId?: ModelSubscriptionIDInput | null,
  terminId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTerminKalenderFilterInput | null > | null,
  or?: Array< ModelSubscriptionTerminKalenderFilterInput | null > | null,
};

export type ModelSubscriptionFeiertagKalenderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  kalenderId?: ModelSubscriptionIDInput | null,
  feiertagId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeiertagKalenderFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeiertagKalenderFilterInput | null > | null,
};

export type ModelSubscriptionTodoKalenderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  kalenderId?: ModelSubscriptionIDInput | null,
  todoId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoKalenderFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoKalenderFilterInput | null > | null,
};

export type CreateKalenderMutationVariables = {
  input: CreateKalenderInput,
  condition?: ModelKalenderConditionInput | null,
};

export type CreateKalenderMutation = {
  createKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateKalenderMutationVariables = {
  input: UpdateKalenderInput,
  condition?: ModelKalenderConditionInput | null,
};

export type UpdateKalenderMutation = {
  updateKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteKalenderMutationVariables = {
  input: DeleteKalenderInput,
  condition?: ModelKalenderConditionInput | null,
};

export type DeleteKalenderMutation = {
  deleteKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeiertagMutationVariables = {
  input: CreateFeiertagInput,
  condition?: ModelFeiertagConditionInput | null,
};

export type CreateFeiertagMutation = {
  createFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeiertagMutationVariables = {
  input: UpdateFeiertagInput,
  condition?: ModelFeiertagConditionInput | null,
};

export type UpdateFeiertagMutation = {
  updateFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeiertagMutationVariables = {
  input: DeleteFeiertagInput,
  condition?: ModelFeiertagConditionInput | null,
};

export type DeleteFeiertagMutation = {
  deleteFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTerminMutationVariables = {
  input: CreateTerminInput,
  condition?: ModelTerminConditionInput | null,
};

export type CreateTerminMutation = {
  createTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTerminMutationVariables = {
  input: UpdateTerminInput,
  condition?: ModelTerminConditionInput | null,
};

export type UpdateTerminMutation = {
  updateTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTerminMutationVariables = {
  input: DeleteTerminInput,
  condition?: ModelTerminConditionInput | null,
};

export type DeleteTerminMutation = {
  deleteTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBenutzerMutationVariables = {
  input: CreateBenutzerInput,
  condition?: ModelBenutzerConditionInput | null,
};

export type CreateBenutzerMutation = {
  createBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBenutzerMutationVariables = {
  input: UpdateBenutzerInput,
  condition?: ModelBenutzerConditionInput | null,
};

export type UpdateBenutzerMutation = {
  updateBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBenutzerMutationVariables = {
  input: DeleteBenutzerInput,
  condition?: ModelBenutzerConditionInput | null,
};

export type DeleteBenutzerMutation = {
  deleteBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileImageMutationVariables = {
  input: CreateProfileImageInput,
  condition?: ModelProfileImageConditionInput | null,
};

export type CreateProfileImageMutation = {
  createProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileImageMutationVariables = {
  input: UpdateProfileImageInput,
  condition?: ModelProfileImageConditionInput | null,
};

export type UpdateProfileImageMutation = {
  updateProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileImageMutationVariables = {
  input: DeleteProfileImageInput,
  condition?: ModelProfileImageConditionInput | null,
};

export type DeleteProfileImageMutation = {
  deleteProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateKalenderBenutzerMutationVariables = {
  input: CreateKalenderBenutzerInput,
  condition?: ModelKalenderBenutzerConditionInput | null,
};

export type CreateKalenderBenutzerMutation = {
  createKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateKalenderBenutzerMutationVariables = {
  input: UpdateKalenderBenutzerInput,
  condition?: ModelKalenderBenutzerConditionInput | null,
};

export type UpdateKalenderBenutzerMutation = {
  updateKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteKalenderBenutzerMutationVariables = {
  input: DeleteKalenderBenutzerInput,
  condition?: ModelKalenderBenutzerConditionInput | null,
};

export type DeleteKalenderBenutzerMutation = {
  deleteKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTerminKalenderMutationVariables = {
  input: CreateTerminKalenderInput,
  condition?: ModelTerminKalenderConditionInput | null,
};

export type CreateTerminKalenderMutation = {
  createTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTerminKalenderMutationVariables = {
  input: UpdateTerminKalenderInput,
  condition?: ModelTerminKalenderConditionInput | null,
};

export type UpdateTerminKalenderMutation = {
  updateTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTerminKalenderMutationVariables = {
  input: DeleteTerminKalenderInput,
  condition?: ModelTerminKalenderConditionInput | null,
};

export type DeleteTerminKalenderMutation = {
  deleteTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeiertagKalenderMutationVariables = {
  input: CreateFeiertagKalenderInput,
  condition?: ModelFeiertagKalenderConditionInput | null,
};

export type CreateFeiertagKalenderMutation = {
  createFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeiertagKalenderMutationVariables = {
  input: UpdateFeiertagKalenderInput,
  condition?: ModelFeiertagKalenderConditionInput | null,
};

export type UpdateFeiertagKalenderMutation = {
  updateFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeiertagKalenderMutationVariables = {
  input: DeleteFeiertagKalenderInput,
  condition?: ModelFeiertagKalenderConditionInput | null,
};

export type DeleteFeiertagKalenderMutation = {
  deleteFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoKalenderMutationVariables = {
  input: CreateTodoKalenderInput,
  condition?: ModelTodoKalenderConditionInput | null,
};

export type CreateTodoKalenderMutation = {
  createTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoKalenderMutationVariables = {
  input: UpdateTodoKalenderInput,
  condition?: ModelTodoKalenderConditionInput | null,
};

export type UpdateTodoKalenderMutation = {
  updateTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoKalenderMutationVariables = {
  input: DeleteTodoKalenderInput,
  condition?: ModelTodoKalenderConditionInput | null,
};

export type DeleteTodoKalenderMutation = {
  deleteTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetKalenderQueryVariables = {
  id: string,
};

export type GetKalenderQuery = {
  getKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListKalendersQueryVariables = {
  filter?: ModelKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKalendersQuery = {
  listKalenders?:  {
    __typename: "ModelKalenderConnection",
    items:  Array< {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type KalendersByFeiertagIDQueryVariables = {
  feiertagID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type KalendersByFeiertagIDQuery = {
  kalendersByFeiertagID?:  {
    __typename: "ModelKalenderConnection",
    items:  Array< {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type KalendersByTerminIDQueryVariables = {
  terminID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type KalendersByTerminIDQuery = {
  kalendersByTerminID?:  {
    __typename: "ModelKalenderConnection",
    items:  Array< {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeiertagQueryVariables = {
  id: string,
};

export type GetFeiertagQuery = {
  getFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeiertagsQueryVariables = {
  filter?: ModelFeiertagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeiertagsQuery = {
  listFeiertags?:  {
    __typename: "ModelFeiertagConnection",
    items:  Array< {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTerminQueryVariables = {
  id: string,
};

export type GetTerminQuery = {
  getTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTerminsQueryVariables = {
  filter?: ModelTerminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTerminsQuery = {
  listTermins?:  {
    __typename: "ModelTerminConnection",
    items:  Array< {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBenutzerQueryVariables = {
  id: string,
};

export type GetBenutzerQuery = {
  getBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBenutzersQueryVariables = {
  filter?: ModelBenutzerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBenutzersQuery = {
  listBenutzers?:  {
    __typename: "ModelBenutzerConnection",
    items:  Array< {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileImageQueryVariables = {
  id: string,
};

export type GetProfileImageQuery = {
  getProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfileImagesQueryVariables = {
  filter?: ModelProfileImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfileImagesQuery = {
  listProfileImages?:  {
    __typename: "ModelProfileImageConnection",
    items:  Array< {
      __typename: "ProfileImage",
      id: string,
      userID?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetKalenderBenutzerQueryVariables = {
  id: string,
};

export type GetKalenderBenutzerQuery = {
  getKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListKalenderBenutzersQueryVariables = {
  filter?: ModelKalenderBenutzerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKalenderBenutzersQuery = {
  listKalenderBenutzers?:  {
    __typename: "ModelKalenderBenutzerConnection",
    items:  Array< {
      __typename: "KalenderBenutzer",
      id: string,
      kalenderId: string,
      benutzerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type KalenderBenutzersByKalenderIdQueryVariables = {
  kalenderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelKalenderBenutzerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type KalenderBenutzersByKalenderIdQuery = {
  kalenderBenutzersByKalenderId?:  {
    __typename: "ModelKalenderBenutzerConnection",
    items:  Array< {
      __typename: "KalenderBenutzer",
      id: string,
      kalenderId: string,
      benutzerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type KalenderBenutzersByBenutzerIdQueryVariables = {
  benutzerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelKalenderBenutzerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type KalenderBenutzersByBenutzerIdQuery = {
  kalenderBenutzersByBenutzerId?:  {
    __typename: "ModelKalenderBenutzerConnection",
    items:  Array< {
      __typename: "KalenderBenutzer",
      id: string,
      kalenderId: string,
      benutzerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTerminKalenderQueryVariables = {
  id: string,
};

export type GetTerminKalenderQuery = {
  getTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTerminKalendersQueryVariables = {
  filter?: ModelTerminKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTerminKalendersQuery = {
  listTerminKalenders?:  {
    __typename: "ModelTerminKalenderConnection",
    items:  Array< {
      __typename: "TerminKalender",
      id: string,
      kalenderId: string,
      terminId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TerminKalendersByKalenderIdQueryVariables = {
  kalenderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTerminKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TerminKalendersByKalenderIdQuery = {
  terminKalendersByKalenderId?:  {
    __typename: "ModelTerminKalenderConnection",
    items:  Array< {
      __typename: "TerminKalender",
      id: string,
      kalenderId: string,
      terminId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TerminKalendersByTerminIdQueryVariables = {
  terminId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTerminKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TerminKalendersByTerminIdQuery = {
  terminKalendersByTerminId?:  {
    __typename: "ModelTerminKalenderConnection",
    items:  Array< {
      __typename: "TerminKalender",
      id: string,
      kalenderId: string,
      terminId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeiertagKalenderQueryVariables = {
  id: string,
};

export type GetFeiertagKalenderQuery = {
  getFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeiertagKalendersQueryVariables = {
  filter?: ModelFeiertagKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeiertagKalendersQuery = {
  listFeiertagKalenders?:  {
    __typename: "ModelFeiertagKalenderConnection",
    items:  Array< {
      __typename: "FeiertagKalender",
      id: string,
      kalenderId: string,
      feiertagId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FeiertagKalendersByKalenderIdQueryVariables = {
  kalenderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFeiertagKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FeiertagKalendersByKalenderIdQuery = {
  feiertagKalendersByKalenderId?:  {
    __typename: "ModelFeiertagKalenderConnection",
    items:  Array< {
      __typename: "FeiertagKalender",
      id: string,
      kalenderId: string,
      feiertagId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FeiertagKalendersByFeiertagIdQueryVariables = {
  feiertagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFeiertagKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FeiertagKalendersByFeiertagIdQuery = {
  feiertagKalendersByFeiertagId?:  {
    __typename: "ModelFeiertagKalenderConnection",
    items:  Array< {
      __typename: "FeiertagKalender",
      id: string,
      kalenderId: string,
      feiertagId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoKalenderQueryVariables = {
  id: string,
};

export type GetTodoKalenderQuery = {
  getTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodoKalendersQueryVariables = {
  filter?: ModelTodoKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoKalendersQuery = {
  listTodoKalenders?:  {
    __typename: "ModelTodoKalenderConnection",
    items:  Array< {
      __typename: "TodoKalender",
      id: string,
      kalenderId: string,
      todoId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TodoKalendersByKalenderIdQueryVariables = {
  kalenderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodoKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TodoKalendersByKalenderIdQuery = {
  todoKalendersByKalenderId?:  {
    __typename: "ModelTodoKalenderConnection",
    items:  Array< {
      __typename: "TodoKalender",
      id: string,
      kalenderId: string,
      todoId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TodoKalendersByTodoIdQueryVariables = {
  todoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodoKalenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TodoKalendersByTodoIdQuery = {
  todoKalendersByTodoId?:  {
    __typename: "ModelTodoKalenderConnection",
    items:  Array< {
      __typename: "TodoKalender",
      id: string,
      kalenderId: string,
      todoId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionKalenderFilterInput | null,
};

export type OnCreateKalenderSubscription = {
  onCreateKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionKalenderFilterInput | null,
};

export type OnUpdateKalenderSubscription = {
  onUpdateKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionKalenderFilterInput | null,
};

export type OnDeleteKalenderSubscription = {
  onDeleteKalender?:  {
    __typename: "Kalender",
    id: string,
    Name?: string | null,
    Benutzers?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    feiertagID?: string | null,
    terminID?: string | null,
    Farbe?: string | null,
    termins?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    feiertags?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    todos?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeiertagSubscriptionVariables = {
  filter?: ModelSubscriptionFeiertagFilterInput | null,
};

export type OnCreateFeiertagSubscription = {
  onCreateFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeiertagSubscriptionVariables = {
  filter?: ModelSubscriptionFeiertagFilterInput | null,
};

export type OnUpdateFeiertagSubscription = {
  onUpdateFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeiertagSubscriptionVariables = {
  filter?: ModelSubscriptionFeiertagFilterInput | null,
};

export type OnDeleteFeiertagSubscription = {
  onDeleteFeiertag?:  {
    __typename: "Feiertag",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Kalenders?:  {
      __typename: "ModelFeiertagKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Erledigt?: boolean | null,
    Kalender?:  {
      __typename: "ModelTodoKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTerminSubscriptionVariables = {
  filter?: ModelSubscriptionTerminFilterInput | null,
};

export type OnCreateTerminSubscription = {
  onCreateTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTerminSubscriptionVariables = {
  filter?: ModelSubscriptionTerminFilterInput | null,
};

export type OnUpdateTerminSubscription = {
  onUpdateTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTerminSubscriptionVariables = {
  filter?: ModelSubscriptionTerminFilterInput | null,
};

export type OnDeleteTerminSubscription = {
  onDeleteTermin?:  {
    __typename: "Termin",
    id: string,
    Titel?: string | null,
    Datum?: string | null,
    Von?: string | null,
    Bis?: string | null,
    Kalenders?:  {
      __typename: "ModelTerminKalenderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBenutzerSubscriptionVariables = {
  filter?: ModelSubscriptionBenutzerFilterInput | null,
};

export type OnCreateBenutzerSubscription = {
  onCreateBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBenutzerSubscriptionVariables = {
  filter?: ModelSubscriptionBenutzerFilterInput | null,
};

export type OnUpdateBenutzerSubscription = {
  onUpdateBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBenutzerSubscriptionVariables = {
  filter?: ModelSubscriptionBenutzerFilterInput | null,
};

export type OnDeleteBenutzerSubscription = {
  onDeleteBenutzer?:  {
    __typename: "Benutzer",
    id: string,
    Vorname: string,
    email: string,
    userID: string,
    Nachname?: string | null,
    kalenders?:  {
      __typename: "ModelKalenderBenutzerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileImageSubscriptionVariables = {
  filter?: ModelSubscriptionProfileImageFilterInput | null,
};

export type OnCreateProfileImageSubscription = {
  onCreateProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileImageSubscriptionVariables = {
  filter?: ModelSubscriptionProfileImageFilterInput | null,
};

export type OnUpdateProfileImageSubscription = {
  onUpdateProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileImageSubscriptionVariables = {
  filter?: ModelSubscriptionProfileImageFilterInput | null,
};

export type OnDeleteProfileImageSubscription = {
  onDeleteProfileImage?:  {
    __typename: "ProfileImage",
    id: string,
    userID?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateKalenderBenutzerSubscriptionVariables = {
  filter?: ModelSubscriptionKalenderBenutzerFilterInput | null,
};

export type OnCreateKalenderBenutzerSubscription = {
  onCreateKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateKalenderBenutzerSubscriptionVariables = {
  filter?: ModelSubscriptionKalenderBenutzerFilterInput | null,
};

export type OnUpdateKalenderBenutzerSubscription = {
  onUpdateKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteKalenderBenutzerSubscriptionVariables = {
  filter?: ModelSubscriptionKalenderBenutzerFilterInput | null,
};

export type OnDeleteKalenderBenutzerSubscription = {
  onDeleteKalenderBenutzer?:  {
    __typename: "KalenderBenutzer",
    id: string,
    kalenderId: string,
    benutzerId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    benutzer:  {
      __typename: "Benutzer",
      id: string,
      Vorname: string,
      email: string,
      userID: string,
      Nachname?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTerminKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionTerminKalenderFilterInput | null,
};

export type OnCreateTerminKalenderSubscription = {
  onCreateTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTerminKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionTerminKalenderFilterInput | null,
};

export type OnUpdateTerminKalenderSubscription = {
  onUpdateTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTerminKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionTerminKalenderFilterInput | null,
};

export type OnDeleteTerminKalenderSubscription = {
  onDeleteTerminKalender?:  {
    __typename: "TerminKalender",
    id: string,
    kalenderId: string,
    terminId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    termin:  {
      __typename: "Termin",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Von?: string | null,
      Bis?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeiertagKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionFeiertagKalenderFilterInput | null,
};

export type OnCreateFeiertagKalenderSubscription = {
  onCreateFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeiertagKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionFeiertagKalenderFilterInput | null,
};

export type OnUpdateFeiertagKalenderSubscription = {
  onUpdateFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeiertagKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionFeiertagKalenderFilterInput | null,
};

export type OnDeleteFeiertagKalenderSubscription = {
  onDeleteFeiertagKalender?:  {
    __typename: "FeiertagKalender",
    id: string,
    kalenderId: string,
    feiertagId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    feiertag:  {
      __typename: "Feiertag",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionTodoKalenderFilterInput | null,
};

export type OnCreateTodoKalenderSubscription = {
  onCreateTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionTodoKalenderFilterInput | null,
};

export type OnUpdateTodoKalenderSubscription = {
  onUpdateTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoKalenderSubscriptionVariables = {
  filter?: ModelSubscriptionTodoKalenderFilterInput | null,
};

export type OnDeleteTodoKalenderSubscription = {
  onDeleteTodoKalender?:  {
    __typename: "TodoKalender",
    id: string,
    kalenderId: string,
    todoId: string,
    kalender:  {
      __typename: "Kalender",
      id: string,
      Name?: string | null,
      feiertagID?: string | null,
      terminID?: string | null,
      Farbe?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      Titel?: string | null,
      Datum?: string | null,
      Erledigt?: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
