/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCurrentIncomeDataTable = /* GraphQL */ `subscription OnCreateCurrentIncomeDataTable(
  $filter: ModelSubscriptionCurrentIncomeDataTableFilterInput
) {
  onCreateCurrentIncomeDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCurrentIncomeDataTableSubscriptionVariables,
  APITypes.OnCreateCurrentIncomeDataTableSubscription
>;
export const onUpdateCurrentIncomeDataTable = /* GraphQL */ `subscription OnUpdateCurrentIncomeDataTable(
  $filter: ModelSubscriptionCurrentIncomeDataTableFilterInput
) {
  onUpdateCurrentIncomeDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCurrentIncomeDataTableSubscriptionVariables,
  APITypes.OnUpdateCurrentIncomeDataTableSubscription
>;
export const onDeleteCurrentIncomeDataTable = /* GraphQL */ `subscription OnDeleteCurrentIncomeDataTable(
  $filter: ModelSubscriptionCurrentIncomeDataTableFilterInput
) {
  onDeleteCurrentIncomeDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCurrentIncomeDataTableSubscriptionVariables,
  APITypes.OnDeleteCurrentIncomeDataTableSubscription
>;
export const onCreateCurrentExpensesDataTable = /* GraphQL */ `subscription OnCreateCurrentExpensesDataTable(
  $filter: ModelSubscriptionCurrentExpensesDataTableFilterInput
) {
  onCreateCurrentExpensesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCurrentExpensesDataTableSubscriptionVariables,
  APITypes.OnCreateCurrentExpensesDataTableSubscription
>;
export const onUpdateCurrentExpensesDataTable = /* GraphQL */ `subscription OnUpdateCurrentExpensesDataTable(
  $filter: ModelSubscriptionCurrentExpensesDataTableFilterInput
) {
  onUpdateCurrentExpensesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCurrentExpensesDataTableSubscriptionVariables,
  APITypes.OnUpdateCurrentExpensesDataTableSubscription
>;
export const onDeleteCurrentExpensesDataTable = /* GraphQL */ `subscription OnDeleteCurrentExpensesDataTable(
  $filter: ModelSubscriptionCurrentExpensesDataTableFilterInput
) {
  onDeleteCurrentExpensesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCurrentExpensesDataTableSubscriptionVariables,
  APITypes.OnDeleteCurrentExpensesDataTableSubscription
>;
export const onCreateAccountBalanceModel = /* GraphQL */ `subscription OnCreateAccountBalanceModel(
  $filter: ModelSubscriptionAccountBalanceModelFilterInput
) {
  onCreateAccountBalanceModel(filter: $filter) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAccountBalanceModelSubscriptionVariables,
  APITypes.OnCreateAccountBalanceModelSubscription
>;
export const onUpdateAccountBalanceModel = /* GraphQL */ `subscription OnUpdateAccountBalanceModel(
  $filter: ModelSubscriptionAccountBalanceModelFilterInput
) {
  onUpdateAccountBalanceModel(filter: $filter) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAccountBalanceModelSubscriptionVariables,
  APITypes.OnUpdateAccountBalanceModelSubscription
>;
export const onDeleteAccountBalanceModel = /* GraphQL */ `subscription OnDeleteAccountBalanceModel(
  $filter: ModelSubscriptionAccountBalanceModelFilterInput
) {
  onDeleteAccountBalanceModel(filter: $filter) {
    id
    income
    expanse
    anomaly
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAccountBalanceModelSubscriptionVariables,
  APITypes.OnDeleteAccountBalanceModelSubscription
>;
export const onCreateReportDataTable = /* GraphQL */ `subscription OnCreateReportDataTable(
  $filter: ModelSubscriptionReportDataTableFilterInput
) {
  onCreateReportDataTable(filter: $filter) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReportDataTableSubscriptionVariables,
  APITypes.OnCreateReportDataTableSubscription
>;
export const onUpdateReportDataTable = /* GraphQL */ `subscription OnUpdateReportDataTable(
  $filter: ModelSubscriptionReportDataTableFilterInput
) {
  onUpdateReportDataTable(filter: $filter) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReportDataTableSubscriptionVariables,
  APITypes.OnUpdateReportDataTableSubscription
>;
export const onDeleteReportDataTable = /* GraphQL */ `subscription OnDeleteReportDataTable(
  $filter: ModelSubscriptionReportDataTableFilterInput
) {
  onDeleteReportDataTable(filter: $filter) {
    id
    generatedData
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReportDataTableSubscriptionVariables,
  APITypes.OnDeleteReportDataTableSubscription
>;
export const onCreateFutureExpensesDataTable = /* GraphQL */ `subscription OnCreateFutureExpensesDataTable(
  $filter: ModelSubscriptionFutureExpensesDataTableFilterInput
) {
  onCreateFutureExpensesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFutureExpensesDataTableSubscriptionVariables,
  APITypes.OnCreateFutureExpensesDataTableSubscription
>;
export const onUpdateFutureExpensesDataTable = /* GraphQL */ `subscription OnUpdateFutureExpensesDataTable(
  $filter: ModelSubscriptionFutureExpensesDataTableFilterInput
) {
  onUpdateFutureExpensesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFutureExpensesDataTableSubscriptionVariables,
  APITypes.OnUpdateFutureExpensesDataTableSubscription
>;
export const onDeleteFutureExpensesDataTable = /* GraphQL */ `subscription OnDeleteFutureExpensesDataTable(
  $filter: ModelSubscriptionFutureExpensesDataTableFilterInput
) {
  onDeleteFutureExpensesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFutureExpensesDataTableSubscriptionVariables,
  APITypes.OnDeleteFutureExpensesDataTableSubscription
>;
export const onCreateFutureIncomesDataTable = /* GraphQL */ `subscription OnCreateFutureIncomesDataTable(
  $filter: ModelSubscriptionFutureIncomesDataTableFilterInput
) {
  onCreateFutureIncomesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFutureIncomesDataTableSubscriptionVariables,
  APITypes.OnCreateFutureIncomesDataTableSubscription
>;
export const onUpdateFutureIncomesDataTable = /* GraphQL */ `subscription OnUpdateFutureIncomesDataTable(
  $filter: ModelSubscriptionFutureIncomesDataTableFilterInput
) {
  onUpdateFutureIncomesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFutureIncomesDataTableSubscriptionVariables,
  APITypes.OnUpdateFutureIncomesDataTableSubscription
>;
export const onDeleteFutureIncomesDataTable = /* GraphQL */ `subscription OnDeleteFutureIncomesDataTable(
  $filter: ModelSubscriptionFutureIncomesDataTableFilterInput
) {
  onDeleteFutureIncomesDataTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFutureIncomesDataTableSubscriptionVariables,
  APITypes.OnDeleteFutureIncomesDataTableSubscription
>;
export const onCreateEducationDataTable = /* GraphQL */ `subscription OnCreateEducationDataTable(
  $filter: ModelSubscriptionEducationDataTableFilterInput
) {
  onCreateEducationDataTable(filter: $filter) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationDataTableSubscriptionVariables,
  APITypes.OnCreateEducationDataTableSubscription
>;
export const onUpdateEducationDataTable = /* GraphQL */ `subscription OnUpdateEducationDataTable(
  $filter: ModelSubscriptionEducationDataTableFilterInput
) {
  onUpdateEducationDataTable(filter: $filter) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationDataTableSubscriptionVariables,
  APITypes.OnUpdateEducationDataTableSubscription
>;
export const onDeleteEducationDataTable = /* GraphQL */ `subscription OnDeleteEducationDataTable(
  $filter: ModelSubscriptionEducationDataTableFilterInput
) {
  onDeleteEducationDataTable(filter: $filter) {
    id
    privateLessons
    classes
    school
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationDataTableSubscriptionVariables,
  APITypes.OnDeleteEducationDataTableSubscription
>;
export const onCreateDynamicDataModel = /* GraphQL */ `subscription OnCreateDynamicDataModel(
  $filter: ModelSubscriptionDynamicDataModelFilterInput
) {
  onCreateDynamicDataModel(filter: $filter) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDynamicDataModelSubscriptionVariables,
  APITypes.OnCreateDynamicDataModelSubscription
>;
export const onUpdateDynamicDataModel = /* GraphQL */ `subscription OnUpdateDynamicDataModel(
  $filter: ModelSubscriptionDynamicDataModelFilterInput
) {
  onUpdateDynamicDataModel(filter: $filter) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDynamicDataModelSubscriptionVariables,
  APITypes.OnUpdateDynamicDataModelSubscription
>;
export const onDeleteDynamicDataModel = /* GraphQL */ `subscription OnDeleteDynamicDataModel(
  $filter: ModelSubscriptionDynamicDataModelFilterInput
) {
  onDeleteDynamicDataModel(filter: $filter) {
    id
    box
    text
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDynamicDataModelSubscriptionVariables,
  APITypes.OnDeleteDynamicDataModelSubscription
>;
export const onCreateFixedDataModel = /* GraphQL */ `subscription OnCreateFixedDataModel(
  $filter: ModelSubscriptionFixedDataModelFilterInput
) {
  onCreateFixedDataModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFixedDataModelSubscriptionVariables,
  APITypes.OnCreateFixedDataModelSubscription
>;
export const onUpdateFixedDataModel = /* GraphQL */ `subscription OnUpdateFixedDataModel(
  $filter: ModelSubscriptionFixedDataModelFilterInput
) {
  onUpdateFixedDataModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFixedDataModelSubscriptionVariables,
  APITypes.OnUpdateFixedDataModelSubscription
>;
export const onDeleteFixedDataModel = /* GraphQL */ `subscription OnDeleteFixedDataModel(
  $filter: ModelSubscriptionFixedDataModelFilterInput
) {
  onDeleteFixedDataModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFixedDataModelSubscriptionVariables,
  APITypes.OnDeleteFixedDataModelSubscription
>;
export const onCreateSelectModel = /* GraphQL */ `subscription OnCreateSelectModel(
  $filter: ModelSubscriptionSelectModelFilterInput
) {
  onCreateSelectModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSelectModelSubscriptionVariables,
  APITypes.OnCreateSelectModelSubscription
>;
export const onUpdateSelectModel = /* GraphQL */ `subscription OnUpdateSelectModel(
  $filter: ModelSubscriptionSelectModelFilterInput
) {
  onUpdateSelectModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSelectModelSubscriptionVariables,
  APITypes.OnUpdateSelectModelSubscription
>;
export const onDeleteSelectModel = /* GraphQL */ `subscription OnDeleteSelectModel(
  $filter: ModelSubscriptionSelectModelFilterInput
) {
  onDeleteSelectModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSelectModelSubscriptionVariables,
  APITypes.OnDeleteSelectModelSubscription
>;
export const onCreateButtonModel = /* GraphQL */ `subscription OnCreateButtonModel(
  $filter: ModelSubscriptionButtonModelFilterInput
) {
  onCreateButtonModel(filter: $filter) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateButtonModelSubscriptionVariables,
  APITypes.OnCreateButtonModelSubscription
>;
export const onUpdateButtonModel = /* GraphQL */ `subscription OnUpdateButtonModel(
  $filter: ModelSubscriptionButtonModelFilterInput
) {
  onUpdateButtonModel(filter: $filter) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateButtonModelSubscriptionVariables,
  APITypes.OnUpdateButtonModelSubscription
>;
export const onDeleteButtonModel = /* GraphQL */ `subscription OnDeleteButtonModel(
  $filter: ModelSubscriptionButtonModelFilterInput
) {
  onDeleteButtonModel(filter: $filter) {
    id
    label
    icon
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteButtonModelSubscriptionVariables,
  APITypes.OnDeleteButtonModelSubscription
>;
export const onCreateLayoutModel = /* GraphQL */ `subscription OnCreateLayoutModel(
  $filter: ModelSubscriptionLayoutModelFilterInput
) {
  onCreateLayoutModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLayoutModelSubscriptionVariables,
  APITypes.OnCreateLayoutModelSubscription
>;
export const onUpdateLayoutModel = /* GraphQL */ `subscription OnUpdateLayoutModel(
  $filter: ModelSubscriptionLayoutModelFilterInput
) {
  onUpdateLayoutModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLayoutModelSubscriptionVariables,
  APITypes.OnUpdateLayoutModelSubscription
>;
export const onDeleteLayoutModel = /* GraphQL */ `subscription OnDeleteLayoutModel(
  $filter: ModelSubscriptionLayoutModelFilterInput
) {
  onDeleteLayoutModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLayoutModelSubscriptionVariables,
  APITypes.OnDeleteLayoutModelSubscription
>;
