/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCurrentIncomeDataTable = /* GraphQL */ `query GetCurrentIncomeDataTable($id: ID!) {
  getCurrentIncomeDataTable(id: $id) {
    id
    sallary
    childrenSuppelment
    food
    laundry
    gas
    hygine
    maitanence
    car
    untitledfield
    energy
    extraHoursBenefit
    extraFood
    chrony
    extraSlot
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCurrentIncomeDataTableQueryVariables,
  APITypes.GetCurrentIncomeDataTableQuery
>;
export const listCurrentIncomeDataTables = /* GraphQL */ `query ListCurrentIncomeDataTables(
  $filter: ModelCurrentIncomeDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listCurrentIncomeDataTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sallary
      childrenSuppelment
      food
      laundry
      gas
      hygine
      maitanence
      car
      untitledfield
      energy
      extraHoursBenefit
      extraFood
      chrony
      extraSlot
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCurrentIncomeDataTablesQueryVariables,
  APITypes.ListCurrentIncomeDataTablesQuery
>;
export const getCurrentExpensesDataTable = /* GraphQL */ `query GetCurrentExpensesDataTable($id: ID!) {
  getCurrentExpensesDataTable(id: $id) {
    id
    energy
    mintanence
    network
    car
    school
    privateLessons
    classes
    safetyNet
    dental
    food
    laundry
    extraSlot
    gas
    shifts
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCurrentExpensesDataTableQueryVariables,
  APITypes.GetCurrentExpensesDataTableQuery
>;
export const listCurrentExpensesDataTables = /* GraphQL */ `query ListCurrentExpensesDataTables(
  $filter: ModelCurrentExpensesDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listCurrentExpensesDataTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      energy
      mintanence
      network
      car
      school
      privateLessons
      classes
      safetyNet
      dental
      food
      laundry
      extraSlot
      gas
      shifts
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCurrentExpensesDataTablesQueryVariables,
  APITypes.ListCurrentExpensesDataTablesQuery
>;
export const getAccountBalanceModel = /* GraphQL */ `query GetAccountBalanceModel($id: ID!) {
  getAccountBalanceModel(id: $id) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountBalanceModelQueryVariables,
  APITypes.GetAccountBalanceModelQuery
>;
export const listAccountBalanceModels = /* GraphQL */ `query ListAccountBalanceModels(
  $filter: ModelAccountBalanceModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountBalanceModels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      income
      expanse
      anomaly
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountBalanceModelsQueryVariables,
  APITypes.ListAccountBalanceModelsQuery
>;
export const getReportDataTable = /* GraphQL */ `query GetReportDataTable($id: ID!) {
  getReportDataTable(id: $id) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReportDataTableQueryVariables,
  APITypes.GetReportDataTableQuery
>;
export const listReportDataTables = /* GraphQL */ `query ListReportDataTables(
  $filter: ModelReportDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportDataTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      generatedData
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportDataTablesQueryVariables,
  APITypes.ListReportDataTablesQuery
>;
export const getFutureExpensesDataTable = /* GraphQL */ `query GetFutureExpensesDataTable($id: ID!) {
  getFutureExpensesDataTable(id: $id) {
    id
    arnnona
    water
    energy
    houseMainanace
    network
    car
    school
    kintergarden
    classes
    privateLessons
    safetyNet
    healthInsurance
    dental
    social
    food
    laundry
    tax
    specialTax
    cleaning
    garden
    extraSlot
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFutureExpensesDataTableQueryVariables,
  APITypes.GetFutureExpensesDataTableQuery
>;
export const listFutureExpensesDataTables = /* GraphQL */ `query ListFutureExpensesDataTables(
  $filter: ModelFutureExpensesDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listFutureExpensesDataTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      arnnona
      water
      energy
      houseMainanace
      network
      car
      school
      kintergarden
      classes
      privateLessons
      safetyNet
      healthInsurance
      dental
      social
      food
      laundry
      tax
      specialTax
      cleaning
      garden
      extraSlot
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFutureExpensesDataTablesQueryVariables,
  APITypes.ListFutureExpensesDataTablesQuery
>;
export const getFutureIncomesDataTable = /* GraphQL */ `query GetFutureIncomesDataTable($id: ID!) {
  getFutureIncomesDataTable(id: $id) {
    id
    sallary
    penssion
    socialSecurityChildren
    socialSecuritySenior
    socialBenefits
    medicalBenefits
    safetyNet
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFutureIncomesDataTableQueryVariables,
  APITypes.GetFutureIncomesDataTableQuery
>;
export const listFutureIncomesDataTables = /* GraphQL */ `query ListFutureIncomesDataTables(
  $filter: ModelFutureIncomesDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listFutureIncomesDataTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sallary
      penssion
      socialSecurityChildren
      socialSecuritySenior
      socialBenefits
      medicalBenefits
      safetyNet
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFutureIncomesDataTablesQueryVariables,
  APITypes.ListFutureIncomesDataTablesQuery
>;
export const getEducationDataTable = /* GraphQL */ `query GetEducationDataTable($id: ID!) {
  getEducationDataTable(id: $id) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEducationDataTableQueryVariables,
  APITypes.GetEducationDataTableQuery
>;
export const listEducationDataTables = /* GraphQL */ `query ListEducationDataTables(
  $filter: ModelEducationDataTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationDataTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      privateLessons
      classes
      school
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationDataTablesQueryVariables,
  APITypes.ListEducationDataTablesQuery
>;
export const getDynamicDataModel = /* GraphQL */ `query GetDynamicDataModel($id: ID!) {
  getDynamicDataModel(id: $id) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDynamicDataModelQueryVariables,
  APITypes.GetDynamicDataModelQuery
>;
export const listDynamicDataModels = /* GraphQL */ `query ListDynamicDataModels(
  $filter: ModelDynamicDataModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listDynamicDataModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      box
      text
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDynamicDataModelsQueryVariables,
  APITypes.ListDynamicDataModelsQuery
>;
export const getFixedDataModel = /* GraphQL */ `query GetFixedDataModel($id: ID!) {
  getFixedDataModel(id: $id) {
    id
    summary
    stats
    actualCost
    communityCoverage
    memberParticipace
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFixedDataModelQueryVariables,
  APITypes.GetFixedDataModelQuery
>;
export const listFixedDataModels = /* GraphQL */ `query ListFixedDataModels(
  $filter: ModelFixedDataModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listFixedDataModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      summary
      stats
      actualCost
      communityCoverage
      memberParticipace
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFixedDataModelsQueryVariables,
  APITypes.ListFixedDataModelsQuery
>;
export const getSelectModel = /* GraphQL */ `query GetSelectModel($id: ID!) {
  getSelectModel(id: $id) {
    id
    checkbox
    radio
    dropdown
    stepper
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSelectModelQueryVariables,
  APITypes.GetSelectModelQuery
>;
export const listSelectModels = /* GraphQL */ `query ListSelectModels(
  $filter: ModelSelectModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listSelectModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      checkbox
      radio
      dropdown
      stepper
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSelectModelsQueryVariables,
  APITypes.ListSelectModelsQuery
>;
export const getButtonModel = /* GraphQL */ `query GetButtonModel($id: ID!) {
  getButtonModel(id: $id) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetButtonModelQueryVariables,
  APITypes.GetButtonModelQuery
>;
export const listButtonModels = /* GraphQL */ `query ListButtonModels(
  $filter: ModelButtonModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listButtonModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      label
      icon
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListButtonModelsQueryVariables,
  APITypes.ListButtonModelsQuery
>;
export const getLayoutModel = /* GraphQL */ `query GetLayoutModel($id: ID!) {
  getLayoutModel(id: $id) {
    id
    backgroundImage
    theme
    credits
    desc
    date
    time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLayoutModelQueryVariables,
  APITypes.GetLayoutModelQuery
>;
export const listLayoutModels = /* GraphQL */ `query ListLayoutModels(
  $filter: ModelLayoutModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listLayoutModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      backgroundImage
      theme
      credits
      desc
      date
      time
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLayoutModelsQueryVariables,
  APITypes.ListLayoutModelsQuery
>;
