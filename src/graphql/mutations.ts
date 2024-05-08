/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCurrentIncomeDataTable = /* GraphQL */ `mutation CreateCurrentIncomeDataTable(
  $input: CreateCurrentIncomeDataTableInput!
  $condition: ModelCurrentIncomeDataTableConditionInput
) {
  createCurrentIncomeDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCurrentIncomeDataTableMutationVariables,
  APITypes.CreateCurrentIncomeDataTableMutation
>;
export const updateCurrentIncomeDataTable = /* GraphQL */ `mutation UpdateCurrentIncomeDataTable(
  $input: UpdateCurrentIncomeDataTableInput!
  $condition: ModelCurrentIncomeDataTableConditionInput
) {
  updateCurrentIncomeDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCurrentIncomeDataTableMutationVariables,
  APITypes.UpdateCurrentIncomeDataTableMutation
>;
export const deleteCurrentIncomeDataTable = /* GraphQL */ `mutation DeleteCurrentIncomeDataTable(
  $input: DeleteCurrentIncomeDataTableInput!
  $condition: ModelCurrentIncomeDataTableConditionInput
) {
  deleteCurrentIncomeDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCurrentIncomeDataTableMutationVariables,
  APITypes.DeleteCurrentIncomeDataTableMutation
>;
export const createCurrentExpensesDataTable = /* GraphQL */ `mutation CreateCurrentExpensesDataTable(
  $input: CreateCurrentExpensesDataTableInput!
  $condition: ModelCurrentExpensesDataTableConditionInput
) {
  createCurrentExpensesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCurrentExpensesDataTableMutationVariables,
  APITypes.CreateCurrentExpensesDataTableMutation
>;
export const updateCurrentExpensesDataTable = /* GraphQL */ `mutation UpdateCurrentExpensesDataTable(
  $input: UpdateCurrentExpensesDataTableInput!
  $condition: ModelCurrentExpensesDataTableConditionInput
) {
  updateCurrentExpensesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCurrentExpensesDataTableMutationVariables,
  APITypes.UpdateCurrentExpensesDataTableMutation
>;
export const deleteCurrentExpensesDataTable = /* GraphQL */ `mutation DeleteCurrentExpensesDataTable(
  $input: DeleteCurrentExpensesDataTableInput!
  $condition: ModelCurrentExpensesDataTableConditionInput
) {
  deleteCurrentExpensesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCurrentExpensesDataTableMutationVariables,
  APITypes.DeleteCurrentExpensesDataTableMutation
>;
export const createAccountBalanceModel = /* GraphQL */ `mutation CreateAccountBalanceModel(
  $input: CreateAccountBalanceModelInput!
  $condition: ModelAccountBalanceModelConditionInput
) {
  createAccountBalanceModel(input: $input, condition: $condition) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAccountBalanceModelMutationVariables,
  APITypes.CreateAccountBalanceModelMutation
>;
export const updateAccountBalanceModel = /* GraphQL */ `mutation UpdateAccountBalanceModel(
  $input: UpdateAccountBalanceModelInput!
  $condition: ModelAccountBalanceModelConditionInput
) {
  updateAccountBalanceModel(input: $input, condition: $condition) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAccountBalanceModelMutationVariables,
  APITypes.UpdateAccountBalanceModelMutation
>;
export const deleteAccountBalanceModel = /* GraphQL */ `mutation DeleteAccountBalanceModel(
  $input: DeleteAccountBalanceModelInput!
  $condition: ModelAccountBalanceModelConditionInput
) {
  deleteAccountBalanceModel(input: $input, condition: $condition) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAccountBalanceModelMutationVariables,
  APITypes.DeleteAccountBalanceModelMutation
>;
export const createReportDataTable = /* GraphQL */ `mutation CreateReportDataTable(
  $input: CreateReportDataTableInput!
  $condition: ModelReportDataTableConditionInput
) {
  createReportDataTable(input: $input, condition: $condition) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportDataTableMutationVariables,
  APITypes.CreateReportDataTableMutation
>;
export const updateReportDataTable = /* GraphQL */ `mutation UpdateReportDataTable(
  $input: UpdateReportDataTableInput!
  $condition: ModelReportDataTableConditionInput
) {
  updateReportDataTable(input: $input, condition: $condition) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportDataTableMutationVariables,
  APITypes.UpdateReportDataTableMutation
>;
export const deleteReportDataTable = /* GraphQL */ `mutation DeleteReportDataTable(
  $input: DeleteReportDataTableInput!
  $condition: ModelReportDataTableConditionInput
) {
  deleteReportDataTable(input: $input, condition: $condition) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportDataTableMutationVariables,
  APITypes.DeleteReportDataTableMutation
>;
export const createFutureExpensesDataTable = /* GraphQL */ `mutation CreateFutureExpensesDataTable(
  $input: CreateFutureExpensesDataTableInput!
  $condition: ModelFutureExpensesDataTableConditionInput
) {
  createFutureExpensesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFutureExpensesDataTableMutationVariables,
  APITypes.CreateFutureExpensesDataTableMutation
>;
export const updateFutureExpensesDataTable = /* GraphQL */ `mutation UpdateFutureExpensesDataTable(
  $input: UpdateFutureExpensesDataTableInput!
  $condition: ModelFutureExpensesDataTableConditionInput
) {
  updateFutureExpensesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFutureExpensesDataTableMutationVariables,
  APITypes.UpdateFutureExpensesDataTableMutation
>;
export const deleteFutureExpensesDataTable = /* GraphQL */ `mutation DeleteFutureExpensesDataTable(
  $input: DeleteFutureExpensesDataTableInput!
  $condition: ModelFutureExpensesDataTableConditionInput
) {
  deleteFutureExpensesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFutureExpensesDataTableMutationVariables,
  APITypes.DeleteFutureExpensesDataTableMutation
>;
export const createFutureIncomesDataTable = /* GraphQL */ `mutation CreateFutureIncomesDataTable(
  $input: CreateFutureIncomesDataTableInput!
  $condition: ModelFutureIncomesDataTableConditionInput
) {
  createFutureIncomesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFutureIncomesDataTableMutationVariables,
  APITypes.CreateFutureIncomesDataTableMutation
>;
export const updateFutureIncomesDataTable = /* GraphQL */ `mutation UpdateFutureIncomesDataTable(
  $input: UpdateFutureIncomesDataTableInput!
  $condition: ModelFutureIncomesDataTableConditionInput
) {
  updateFutureIncomesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFutureIncomesDataTableMutationVariables,
  APITypes.UpdateFutureIncomesDataTableMutation
>;
export const deleteFutureIncomesDataTable = /* GraphQL */ `mutation DeleteFutureIncomesDataTable(
  $input: DeleteFutureIncomesDataTableInput!
  $condition: ModelFutureIncomesDataTableConditionInput
) {
  deleteFutureIncomesDataTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFutureIncomesDataTableMutationVariables,
  APITypes.DeleteFutureIncomesDataTableMutation
>;
export const createEducationDataTable = /* GraphQL */ `mutation CreateEducationDataTable(
  $input: CreateEducationDataTableInput!
  $condition: ModelEducationDataTableConditionInput
) {
  createEducationDataTable(input: $input, condition: $condition) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEducationDataTableMutationVariables,
  APITypes.CreateEducationDataTableMutation
>;
export const updateEducationDataTable = /* GraphQL */ `mutation UpdateEducationDataTable(
  $input: UpdateEducationDataTableInput!
  $condition: ModelEducationDataTableConditionInput
) {
  updateEducationDataTable(input: $input, condition: $condition) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEducationDataTableMutationVariables,
  APITypes.UpdateEducationDataTableMutation
>;
export const deleteEducationDataTable = /* GraphQL */ `mutation DeleteEducationDataTable(
  $input: DeleteEducationDataTableInput!
  $condition: ModelEducationDataTableConditionInput
) {
  deleteEducationDataTable(input: $input, condition: $condition) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEducationDataTableMutationVariables,
  APITypes.DeleteEducationDataTableMutation
>;
export const createDynamicDataModel = /* GraphQL */ `mutation CreateDynamicDataModel(
  $input: CreateDynamicDataModelInput!
  $condition: ModelDynamicDataModelConditionInput
) {
  createDynamicDataModel(input: $input, condition: $condition) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDynamicDataModelMutationVariables,
  APITypes.CreateDynamicDataModelMutation
>;
export const updateDynamicDataModel = /* GraphQL */ `mutation UpdateDynamicDataModel(
  $input: UpdateDynamicDataModelInput!
  $condition: ModelDynamicDataModelConditionInput
) {
  updateDynamicDataModel(input: $input, condition: $condition) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDynamicDataModelMutationVariables,
  APITypes.UpdateDynamicDataModelMutation
>;
export const deleteDynamicDataModel = /* GraphQL */ `mutation DeleteDynamicDataModel(
  $input: DeleteDynamicDataModelInput!
  $condition: ModelDynamicDataModelConditionInput
) {
  deleteDynamicDataModel(input: $input, condition: $condition) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDynamicDataModelMutationVariables,
  APITypes.DeleteDynamicDataModelMutation
>;
export const createFixedDataModel = /* GraphQL */ `mutation CreateFixedDataModel(
  $input: CreateFixedDataModelInput!
  $condition: ModelFixedDataModelConditionInput
) {
  createFixedDataModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFixedDataModelMutationVariables,
  APITypes.CreateFixedDataModelMutation
>;
export const updateFixedDataModel = /* GraphQL */ `mutation UpdateFixedDataModel(
  $input: UpdateFixedDataModelInput!
  $condition: ModelFixedDataModelConditionInput
) {
  updateFixedDataModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFixedDataModelMutationVariables,
  APITypes.UpdateFixedDataModelMutation
>;
export const deleteFixedDataModel = /* GraphQL */ `mutation DeleteFixedDataModel(
  $input: DeleteFixedDataModelInput!
  $condition: ModelFixedDataModelConditionInput
) {
  deleteFixedDataModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFixedDataModelMutationVariables,
  APITypes.DeleteFixedDataModelMutation
>;
export const createSelectModel = /* GraphQL */ `mutation CreateSelectModel(
  $input: CreateSelectModelInput!
  $condition: ModelSelectModelConditionInput
) {
  createSelectModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSelectModelMutationVariables,
  APITypes.CreateSelectModelMutation
>;
export const updateSelectModel = /* GraphQL */ `mutation UpdateSelectModel(
  $input: UpdateSelectModelInput!
  $condition: ModelSelectModelConditionInput
) {
  updateSelectModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSelectModelMutationVariables,
  APITypes.UpdateSelectModelMutation
>;
export const deleteSelectModel = /* GraphQL */ `mutation DeleteSelectModel(
  $input: DeleteSelectModelInput!
  $condition: ModelSelectModelConditionInput
) {
  deleteSelectModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSelectModelMutationVariables,
  APITypes.DeleteSelectModelMutation
>;
export const createButtonModel = /* GraphQL */ `mutation CreateButtonModel(
  $input: CreateButtonModelInput!
  $condition: ModelButtonModelConditionInput
) {
  createButtonModel(input: $input, condition: $condition) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateButtonModelMutationVariables,
  APITypes.CreateButtonModelMutation
>;
export const updateButtonModel = /* GraphQL */ `mutation UpdateButtonModel(
  $input: UpdateButtonModelInput!
  $condition: ModelButtonModelConditionInput
) {
  updateButtonModel(input: $input, condition: $condition) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateButtonModelMutationVariables,
  APITypes.UpdateButtonModelMutation
>;
export const deleteButtonModel = /* GraphQL */ `mutation DeleteButtonModel(
  $input: DeleteButtonModelInput!
  $condition: ModelButtonModelConditionInput
) {
  deleteButtonModel(input: $input, condition: $condition) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteButtonModelMutationVariables,
  APITypes.DeleteButtonModelMutation
>;
export const createLayoutModel = /* GraphQL */ `mutation CreateLayoutModel(
  $input: CreateLayoutModelInput!
  $condition: ModelLayoutModelConditionInput
) {
  createLayoutModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLayoutModelMutationVariables,
  APITypes.CreateLayoutModelMutation
>;
export const updateLayoutModel = /* GraphQL */ `mutation UpdateLayoutModel(
  $input: UpdateLayoutModelInput!
  $condition: ModelLayoutModelConditionInput
) {
  updateLayoutModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLayoutModelMutationVariables,
  APITypes.UpdateLayoutModelMutation
>;
export const deleteLayoutModel = /* GraphQL */ `mutation DeleteLayoutModel(
  $input: DeleteLayoutModelInput!
  $condition: ModelLayoutModelConditionInput
) {
  deleteLayoutModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLayoutModelMutationVariables,
  APITypes.DeleteLayoutModelMutation
>;
