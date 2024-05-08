/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCurrentIncomeDataTableInput = {
  id?: string | null,
  sallary?: number | null,
  childrenSuppelment?: number | null,
  food?: number | null,
  laundry?: number | null,
  gas?: number | null,
  hygine?: number | null,
  maitanence?: number | null,
  car?: number | null,
  untitledfield?: number | null,
  energy?: number | null,
  extraHoursBenefit?: number | null,
  extraFood?: number | null,
  chrony?: number | null,
  extraSlot?: Array< string | null > | null,
};

export type ModelCurrentIncomeDataTableConditionInput = {
  sallary?: ModelIntInput | null,
  childrenSuppelment?: ModelIntInput | null,
  food?: ModelIntInput | null,
  laundry?: ModelIntInput | null,
  gas?: ModelIntInput | null,
  hygine?: ModelIntInput | null,
  maitanence?: ModelIntInput | null,
  car?: ModelIntInput | null,
  untitledfield?: ModelIntInput | null,
  energy?: ModelIntInput | null,
  extraHoursBenefit?: ModelIntInput | null,
  extraFood?: ModelIntInput | null,
  chrony?: ModelIntInput | null,
  extraSlot?: ModelStringInput | null,
  and?: Array< ModelCurrentIncomeDataTableConditionInput | null > | null,
  or?: Array< ModelCurrentIncomeDataTableConditionInput | null > | null,
  not?: ModelCurrentIncomeDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CurrentIncomeDataTable = {
  __typename: "CurrentIncomeDataTable",
  id: string,
  sallary?: number | null,
  childrenSuppelment?: number | null,
  food?: number | null,
  laundry?: number | null,
  gas?: number | null,
  hygine?: number | null,
  maitanence?: number | null,
  car?: number | null,
  untitledfield?: number | null,
  energy?: number | null,
  extraHoursBenefit?: number | null,
  extraFood?: number | null,
  chrony?: number | null,
  extraSlot?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCurrentIncomeDataTableInput = {
  id: string,
  sallary?: number | null,
  childrenSuppelment?: number | null,
  food?: number | null,
  laundry?: number | null,
  gas?: number | null,
  hygine?: number | null,
  maitanence?: number | null,
  car?: number | null,
  untitledfield?: number | null,
  energy?: number | null,
  extraHoursBenefit?: number | null,
  extraFood?: number | null,
  chrony?: number | null,
  extraSlot?: Array< string | null > | null,
};

export type DeleteCurrentIncomeDataTableInput = {
  id: string,
};

export type CreateCurrentExpensesDataTableInput = {
  id?: string | null,
  energy?: number | null,
  mintanence?: number | null,
  network?: number | null,
  car?: number | null,
  school?: number | null,
  privateLessons?: number | null,
  classes?: number | null,
  safetyNet?: number | null,
  dental?: number | null,
  food?: number | null,
  laundry?: number | null,
  extraSlot?: Array< string | null > | null,
  gas?: number | null,
  shifts?: number | null,
};

export type ModelCurrentExpensesDataTableConditionInput = {
  energy?: ModelIntInput | null,
  mintanence?: ModelIntInput | null,
  network?: ModelIntInput | null,
  car?: ModelIntInput | null,
  school?: ModelIntInput | null,
  privateLessons?: ModelIntInput | null,
  classes?: ModelIntInput | null,
  safetyNet?: ModelIntInput | null,
  dental?: ModelIntInput | null,
  food?: ModelIntInput | null,
  laundry?: ModelIntInput | null,
  extraSlot?: ModelStringInput | null,
  gas?: ModelIntInput | null,
  shifts?: ModelIntInput | null,
  and?: Array< ModelCurrentExpensesDataTableConditionInput | null > | null,
  or?: Array< ModelCurrentExpensesDataTableConditionInput | null > | null,
  not?: ModelCurrentExpensesDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CurrentExpensesDataTable = {
  __typename: "CurrentExpensesDataTable",
  id: string,
  energy?: number | null,
  mintanence?: number | null,
  network?: number | null,
  car?: number | null,
  school?: number | null,
  privateLessons?: number | null,
  classes?: number | null,
  safetyNet?: number | null,
  dental?: number | null,
  food?: number | null,
  laundry?: number | null,
  extraSlot?: Array< string | null > | null,
  gas?: number | null,
  shifts?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCurrentExpensesDataTableInput = {
  id: string,
  energy?: number | null,
  mintanence?: number | null,
  network?: number | null,
  car?: number | null,
  school?: number | null,
  privateLessons?: number | null,
  classes?: number | null,
  safetyNet?: number | null,
  dental?: number | null,
  food?: number | null,
  laundry?: number | null,
  extraSlot?: Array< string | null > | null,
  gas?: number | null,
  shifts?: number | null,
};

export type DeleteCurrentExpensesDataTableInput = {
  id: string,
};

export type CreateAccountBalanceModelInput = {
  id?: string | null,
  income?: number | null,
  expanse?: number | null,
  anomaly?: number | null,
};

export type ModelAccountBalanceModelConditionInput = {
  income?: ModelIntInput | null,
  expanse?: ModelIntInput | null,
  anomaly?: ModelIntInput | null,
  and?: Array< ModelAccountBalanceModelConditionInput | null > | null,
  or?: Array< ModelAccountBalanceModelConditionInput | null > | null,
  not?: ModelAccountBalanceModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AccountBalanceModel = {
  __typename: "AccountBalanceModel",
  id: string,
  income?: number | null,
  expanse?: number | null,
  anomaly?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAccountBalanceModelInput = {
  id: string,
  income?: number | null,
  expanse?: number | null,
  anomaly?: number | null,
};

export type DeleteAccountBalanceModelInput = {
  id: string,
};

export type CreateReportDataTableInput = {
  id?: string | null,
  generatedData?: Array< string | null > | null,
};

export type ModelReportDataTableConditionInput = {
  generatedData?: ModelStringInput | null,
  and?: Array< ModelReportDataTableConditionInput | null > | null,
  or?: Array< ModelReportDataTableConditionInput | null > | null,
  not?: ModelReportDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ReportDataTable = {
  __typename: "ReportDataTable",
  id: string,
  generatedData?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportDataTableInput = {
  id: string,
  generatedData?: Array< string | null > | null,
};

export type DeleteReportDataTableInput = {
  id: string,
};

export type CreateFutureExpensesDataTableInput = {
  id?: string | null,
  arnnona?: number | null,
  water?: number | null,
  energy?: number | null,
  houseMainanace?: number | null,
  network?: number | null,
  car?: number | null,
  school?: number | null,
  kintergarden?: number | null,
  classes?: number | null,
  privateLessons?: number | null,
  safetyNet?: number | null,
  healthInsurance?: number | null,
  dental?: number | null,
  social?: number | null,
  food?: number | null,
  laundry?: number | null,
  tax?: number | null,
  specialTax?: number | null,
  cleaning?: number | null,
  garden?: number | null,
  extraSlot?: Array< string | null > | null,
};

export type ModelFutureExpensesDataTableConditionInput = {
  arnnona?: ModelIntInput | null,
  water?: ModelIntInput | null,
  energy?: ModelIntInput | null,
  houseMainanace?: ModelIntInput | null,
  network?: ModelIntInput | null,
  car?: ModelIntInput | null,
  school?: ModelIntInput | null,
  kintergarden?: ModelIntInput | null,
  classes?: ModelIntInput | null,
  privateLessons?: ModelIntInput | null,
  safetyNet?: ModelIntInput | null,
  healthInsurance?: ModelIntInput | null,
  dental?: ModelIntInput | null,
  social?: ModelIntInput | null,
  food?: ModelIntInput | null,
  laundry?: ModelIntInput | null,
  tax?: ModelIntInput | null,
  specialTax?: ModelIntInput | null,
  cleaning?: ModelIntInput | null,
  garden?: ModelIntInput | null,
  extraSlot?: ModelStringInput | null,
  and?: Array< ModelFutureExpensesDataTableConditionInput | null > | null,
  or?: Array< ModelFutureExpensesDataTableConditionInput | null > | null,
  not?: ModelFutureExpensesDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type FutureExpensesDataTable = {
  __typename: "FutureExpensesDataTable",
  id: string,
  arnnona?: number | null,
  water?: number | null,
  energy?: number | null,
  houseMainanace?: number | null,
  network?: number | null,
  car?: number | null,
  school?: number | null,
  kintergarden?: number | null,
  classes?: number | null,
  privateLessons?: number | null,
  safetyNet?: number | null,
  healthInsurance?: number | null,
  dental?: number | null,
  social?: number | null,
  food?: number | null,
  laundry?: number | null,
  tax?: number | null,
  specialTax?: number | null,
  cleaning?: number | null,
  garden?: number | null,
  extraSlot?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFutureExpensesDataTableInput = {
  id: string,
  arnnona?: number | null,
  water?: number | null,
  energy?: number | null,
  houseMainanace?: number | null,
  network?: number | null,
  car?: number | null,
  school?: number | null,
  kintergarden?: number | null,
  classes?: number | null,
  privateLessons?: number | null,
  safetyNet?: number | null,
  healthInsurance?: number | null,
  dental?: number | null,
  social?: number | null,
  food?: number | null,
  laundry?: number | null,
  tax?: number | null,
  specialTax?: number | null,
  cleaning?: number | null,
  garden?: number | null,
  extraSlot?: Array< string | null > | null,
};

export type DeleteFutureExpensesDataTableInput = {
  id: string,
};

export type CreateFutureIncomesDataTableInput = {
  id?: string | null,
  sallary?: number | null,
  penssion?: number | null,
  socialSecurityChildren?: number | null,
  socialSecuritySenior?: number | null,
  socialBenefits?: number | null,
  medicalBenefits?: number | null,
  safetyNet?: number | null,
};

export type ModelFutureIncomesDataTableConditionInput = {
  sallary?: ModelIntInput | null,
  penssion?: ModelIntInput | null,
  socialSecurityChildren?: ModelIntInput | null,
  socialSecuritySenior?: ModelIntInput | null,
  socialBenefits?: ModelIntInput | null,
  medicalBenefits?: ModelIntInput | null,
  safetyNet?: ModelIntInput | null,
  and?: Array< ModelFutureIncomesDataTableConditionInput | null > | null,
  or?: Array< ModelFutureIncomesDataTableConditionInput | null > | null,
  not?: ModelFutureIncomesDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type FutureIncomesDataTable = {
  __typename: "FutureIncomesDataTable",
  id: string,
  sallary?: number | null,
  penssion?: number | null,
  socialSecurityChildren?: number | null,
  socialSecuritySenior?: number | null,
  socialBenefits?: number | null,
  medicalBenefits?: number | null,
  safetyNet?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFutureIncomesDataTableInput = {
  id: string,
  sallary?: number | null,
  penssion?: number | null,
  socialSecurityChildren?: number | null,
  socialSecuritySenior?: number | null,
  socialBenefits?: number | null,
  medicalBenefits?: number | null,
  safetyNet?: number | null,
};

export type DeleteFutureIncomesDataTableInput = {
  id: string,
};

export type CreateEducationDataTableInput = {
  id?: string | null,
  privateLessons?: number | null,
  classes?: number | null,
  school?: number | null,
};

export type ModelEducationDataTableConditionInput = {
  privateLessons?: ModelIntInput | null,
  classes?: ModelIntInput | null,
  school?: ModelIntInput | null,
  and?: Array< ModelEducationDataTableConditionInput | null > | null,
  or?: Array< ModelEducationDataTableConditionInput | null > | null,
  not?: ModelEducationDataTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type EducationDataTable = {
  __typename: "EducationDataTable",
  id: string,
  privateLessons?: number | null,
  classes?: number | null,
  school?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEducationDataTableInput = {
  id: string,
  privateLessons?: number | null,
  classes?: number | null,
  school?: number | null,
};

export type DeleteEducationDataTableInput = {
  id: string,
};

export type CreateDynamicDataModelInput = {
  id?: string | null,
  box?: string | null,
  text?: string | null,
};

export type ModelDynamicDataModelConditionInput = {
  box?: ModelStringInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelDynamicDataModelConditionInput | null > | null,
  or?: Array< ModelDynamicDataModelConditionInput | null > | null,
  not?: ModelDynamicDataModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type DynamicDataModel = {
  __typename: "DynamicDataModel",
  id: string,
  box?: string | null,
  text?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDynamicDataModelInput = {
  id: string,
  box?: string | null,
  text?: string | null,
};

export type DeleteDynamicDataModelInput = {
  id: string,
};

export type CreateFixedDataModelInput = {
  id?: string | null,
  summary?: number | null,
  stats?: number | null,
  actualCost?: number | null,
  communityCoverage?: number | null,
  memberParticipace?: number | null,
};

export type ModelFixedDataModelConditionInput = {
  summary?: ModelIntInput | null,
  stats?: ModelIntInput | null,
  actualCost?: ModelIntInput | null,
  communityCoverage?: ModelIntInput | null,
  memberParticipace?: ModelIntInput | null,
  and?: Array< ModelFixedDataModelConditionInput | null > | null,
  or?: Array< ModelFixedDataModelConditionInput | null > | null,
  not?: ModelFixedDataModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type FixedDataModel = {
  __typename: "FixedDataModel",
  id: string,
  summary?: number | null,
  stats?: number | null,
  actualCost?: number | null,
  communityCoverage?: number | null,
  memberParticipace?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFixedDataModelInput = {
  id: string,
  summary?: number | null,
  stats?: number | null,
  actualCost?: number | null,
  communityCoverage?: number | null,
  memberParticipace?: number | null,
};

export type DeleteFixedDataModelInput = {
  id: string,
};

export type CreateSelectModelInput = {
  id?: string | null,
  checkbox?: string | null,
  radio?: string | null,
  dropdown?: string | null,
  stepper?: string | null,
};

export type ModelSelectModelConditionInput = {
  checkbox?: ModelStringInput | null,
  radio?: ModelStringInput | null,
  dropdown?: ModelStringInput | null,
  stepper?: ModelStringInput | null,
  and?: Array< ModelSelectModelConditionInput | null > | null,
  or?: Array< ModelSelectModelConditionInput | null > | null,
  not?: ModelSelectModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SelectModel = {
  __typename: "SelectModel",
  id: string,
  checkbox?: string | null,
  radio?: string | null,
  dropdown?: string | null,
  stepper?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSelectModelInput = {
  id: string,
  checkbox?: string | null,
  radio?: string | null,
  dropdown?: string | null,
  stepper?: string | null,
};

export type DeleteSelectModelInput = {
  id: string,
};

export type CreateButtonModelInput = {
  id?: string | null,
  label?: string | null,
  icon?: string | null,
};

export type ModelButtonModelConditionInput = {
  label?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  and?: Array< ModelButtonModelConditionInput | null > | null,
  or?: Array< ModelButtonModelConditionInput | null > | null,
  not?: ModelButtonModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ButtonModel = {
  __typename: "ButtonModel",
  id: string,
  label?: string | null,
  icon?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateButtonModelInput = {
  id: string,
  label?: string | null,
  icon?: string | null,
};

export type DeleteButtonModelInput = {
  id: string,
};

export type CreateLayoutModelInput = {
  id?: string | null,
  backgroundImage?: string | null,
  theme?: string | null,
  credits?: string | null,
  desc?: string | null,
  date?: string | null,
  time?: string | null,
};

export type ModelLayoutModelConditionInput = {
  backgroundImage?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  credits?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelLayoutModelConditionInput | null > | null,
  or?: Array< ModelLayoutModelConditionInput | null > | null,
  not?: ModelLayoutModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type LayoutModel = {
  __typename: "LayoutModel",
  id: string,
  backgroundImage?: string | null,
  theme?: string | null,
  credits?: string | null,
  desc?: string | null,
  date?: string | null,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLayoutModelInput = {
  id: string,
  backgroundImage?: string | null,
  theme?: string | null,
  credits?: string | null,
  desc?: string | null,
  date?: string | null,
  time?: string | null,
};

export type DeleteLayoutModelInput = {
  id: string,
};

export type ModelCurrentIncomeDataTableFilterInput = {
  id?: ModelIDInput | null,
  sallary?: ModelIntInput | null,
  childrenSuppelment?: ModelIntInput | null,
  food?: ModelIntInput | null,
  laundry?: ModelIntInput | null,
  gas?: ModelIntInput | null,
  hygine?: ModelIntInput | null,
  maitanence?: ModelIntInput | null,
  car?: ModelIntInput | null,
  untitledfield?: ModelIntInput | null,
  energy?: ModelIntInput | null,
  extraHoursBenefit?: ModelIntInput | null,
  extraFood?: ModelIntInput | null,
  chrony?: ModelIntInput | null,
  extraSlot?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCurrentIncomeDataTableFilterInput | null > | null,
  or?: Array< ModelCurrentIncomeDataTableFilterInput | null > | null,
  not?: ModelCurrentIncomeDataTableFilterInput | null,
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

export type ModelCurrentIncomeDataTableConnection = {
  __typename: "ModelCurrentIncomeDataTableConnection",
  items:  Array<CurrentIncomeDataTable | null >,
  nextToken?: string | null,
};

export type ModelCurrentExpensesDataTableFilterInput = {
  id?: ModelIDInput | null,
  energy?: ModelIntInput | null,
  mintanence?: ModelIntInput | null,
  network?: ModelIntInput | null,
  car?: ModelIntInput | null,
  school?: ModelIntInput | null,
  privateLessons?: ModelIntInput | null,
  classes?: ModelIntInput | null,
  safetyNet?: ModelIntInput | null,
  dental?: ModelIntInput | null,
  food?: ModelIntInput | null,
  laundry?: ModelIntInput | null,
  extraSlot?: ModelStringInput | null,
  gas?: ModelIntInput | null,
  shifts?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCurrentExpensesDataTableFilterInput | null > | null,
  or?: Array< ModelCurrentExpensesDataTableFilterInput | null > | null,
  not?: ModelCurrentExpensesDataTableFilterInput | null,
};

export type ModelCurrentExpensesDataTableConnection = {
  __typename: "ModelCurrentExpensesDataTableConnection",
  items:  Array<CurrentExpensesDataTable | null >,
  nextToken?: string | null,
};

export type ModelAccountBalanceModelFilterInput = {
  id?: ModelIDInput | null,
  income?: ModelIntInput | null,
  expanse?: ModelIntInput | null,
  anomaly?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountBalanceModelFilterInput | null > | null,
  or?: Array< ModelAccountBalanceModelFilterInput | null > | null,
  not?: ModelAccountBalanceModelFilterInput | null,
};

export type ModelAccountBalanceModelConnection = {
  __typename: "ModelAccountBalanceModelConnection",
  items:  Array<AccountBalanceModel | null >,
  nextToken?: string | null,
};

export type ModelReportDataTableFilterInput = {
  id?: ModelIDInput | null,
  generatedData?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReportDataTableFilterInput | null > | null,
  or?: Array< ModelReportDataTableFilterInput | null > | null,
  not?: ModelReportDataTableFilterInput | null,
};

export type ModelReportDataTableConnection = {
  __typename: "ModelReportDataTableConnection",
  items:  Array<ReportDataTable | null >,
  nextToken?: string | null,
};

export type ModelFutureExpensesDataTableFilterInput = {
  id?: ModelIDInput | null,
  arnnona?: ModelIntInput | null,
  water?: ModelIntInput | null,
  energy?: ModelIntInput | null,
  houseMainanace?: ModelIntInput | null,
  network?: ModelIntInput | null,
  car?: ModelIntInput | null,
  school?: ModelIntInput | null,
  kintergarden?: ModelIntInput | null,
  classes?: ModelIntInput | null,
  privateLessons?: ModelIntInput | null,
  safetyNet?: ModelIntInput | null,
  healthInsurance?: ModelIntInput | null,
  dental?: ModelIntInput | null,
  social?: ModelIntInput | null,
  food?: ModelIntInput | null,
  laundry?: ModelIntInput | null,
  tax?: ModelIntInput | null,
  specialTax?: ModelIntInput | null,
  cleaning?: ModelIntInput | null,
  garden?: ModelIntInput | null,
  extraSlot?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFutureExpensesDataTableFilterInput | null > | null,
  or?: Array< ModelFutureExpensesDataTableFilterInput | null > | null,
  not?: ModelFutureExpensesDataTableFilterInput | null,
};

export type ModelFutureExpensesDataTableConnection = {
  __typename: "ModelFutureExpensesDataTableConnection",
  items:  Array<FutureExpensesDataTable | null >,
  nextToken?: string | null,
};

export type ModelFutureIncomesDataTableFilterInput = {
  id?: ModelIDInput | null,
  sallary?: ModelIntInput | null,
  penssion?: ModelIntInput | null,
  socialSecurityChildren?: ModelIntInput | null,
  socialSecuritySenior?: ModelIntInput | null,
  socialBenefits?: ModelIntInput | null,
  medicalBenefits?: ModelIntInput | null,
  safetyNet?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFutureIncomesDataTableFilterInput | null > | null,
  or?: Array< ModelFutureIncomesDataTableFilterInput | null > | null,
  not?: ModelFutureIncomesDataTableFilterInput | null,
};

export type ModelFutureIncomesDataTableConnection = {
  __typename: "ModelFutureIncomesDataTableConnection",
  items:  Array<FutureIncomesDataTable | null >,
  nextToken?: string | null,
};

export type ModelEducationDataTableFilterInput = {
  id?: ModelIDInput | null,
  privateLessons?: ModelIntInput | null,
  classes?: ModelIntInput | null,
  school?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationDataTableFilterInput | null > | null,
  or?: Array< ModelEducationDataTableFilterInput | null > | null,
  not?: ModelEducationDataTableFilterInput | null,
};

export type ModelEducationDataTableConnection = {
  __typename: "ModelEducationDataTableConnection",
  items:  Array<EducationDataTable | null >,
  nextToken?: string | null,
};

export type ModelDynamicDataModelFilterInput = {
  id?: ModelIDInput | null,
  box?: ModelStringInput | null,
  text?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDynamicDataModelFilterInput | null > | null,
  or?: Array< ModelDynamicDataModelFilterInput | null > | null,
  not?: ModelDynamicDataModelFilterInput | null,
};

export type ModelDynamicDataModelConnection = {
  __typename: "ModelDynamicDataModelConnection",
  items:  Array<DynamicDataModel | null >,
  nextToken?: string | null,
};

export type ModelFixedDataModelFilterInput = {
  id?: ModelIDInput | null,
  summary?: ModelIntInput | null,
  stats?: ModelIntInput | null,
  actualCost?: ModelIntInput | null,
  communityCoverage?: ModelIntInput | null,
  memberParticipace?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFixedDataModelFilterInput | null > | null,
  or?: Array< ModelFixedDataModelFilterInput | null > | null,
  not?: ModelFixedDataModelFilterInput | null,
};

export type ModelFixedDataModelConnection = {
  __typename: "ModelFixedDataModelConnection",
  items:  Array<FixedDataModel | null >,
  nextToken?: string | null,
};

export type ModelSelectModelFilterInput = {
  id?: ModelIDInput | null,
  checkbox?: ModelStringInput | null,
  radio?: ModelStringInput | null,
  dropdown?: ModelStringInput | null,
  stepper?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSelectModelFilterInput | null > | null,
  or?: Array< ModelSelectModelFilterInput | null > | null,
  not?: ModelSelectModelFilterInput | null,
};

export type ModelSelectModelConnection = {
  __typename: "ModelSelectModelConnection",
  items:  Array<SelectModel | null >,
  nextToken?: string | null,
};

export type ModelButtonModelFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelButtonModelFilterInput | null > | null,
  or?: Array< ModelButtonModelFilterInput | null > | null,
  not?: ModelButtonModelFilterInput | null,
};

export type ModelButtonModelConnection = {
  __typename: "ModelButtonModelConnection",
  items:  Array<ButtonModel | null >,
  nextToken?: string | null,
};

export type ModelLayoutModelFilterInput = {
  id?: ModelIDInput | null,
  backgroundImage?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  credits?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLayoutModelFilterInput | null > | null,
  or?: Array< ModelLayoutModelFilterInput | null > | null,
  not?: ModelLayoutModelFilterInput | null,
};

export type ModelLayoutModelConnection = {
  __typename: "ModelLayoutModelConnection",
  items:  Array<LayoutModel | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCurrentIncomeDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sallary?: ModelSubscriptionIntInput | null,
  childrenSuppelment?: ModelSubscriptionIntInput | null,
  food?: ModelSubscriptionIntInput | null,
  laundry?: ModelSubscriptionIntInput | null,
  gas?: ModelSubscriptionIntInput | null,
  hygine?: ModelSubscriptionIntInput | null,
  maitanence?: ModelSubscriptionIntInput | null,
  car?: ModelSubscriptionIntInput | null,
  untitledfield?: ModelSubscriptionIntInput | null,
  energy?: ModelSubscriptionIntInput | null,
  extraHoursBenefit?: ModelSubscriptionIntInput | null,
  extraFood?: ModelSubscriptionIntInput | null,
  chrony?: ModelSubscriptionIntInput | null,
  extraSlot?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCurrentIncomeDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionCurrentIncomeDataTableFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
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

export type ModelSubscriptionCurrentExpensesDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  energy?: ModelSubscriptionIntInput | null,
  mintanence?: ModelSubscriptionIntInput | null,
  network?: ModelSubscriptionIntInput | null,
  car?: ModelSubscriptionIntInput | null,
  school?: ModelSubscriptionIntInput | null,
  privateLessons?: ModelSubscriptionIntInput | null,
  classes?: ModelSubscriptionIntInput | null,
  safetyNet?: ModelSubscriptionIntInput | null,
  dental?: ModelSubscriptionIntInput | null,
  food?: ModelSubscriptionIntInput | null,
  laundry?: ModelSubscriptionIntInput | null,
  extraSlot?: ModelSubscriptionStringInput | null,
  gas?: ModelSubscriptionIntInput | null,
  shifts?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCurrentExpensesDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionCurrentExpensesDataTableFilterInput | null > | null,
};

export type ModelSubscriptionAccountBalanceModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  income?: ModelSubscriptionIntInput | null,
  expanse?: ModelSubscriptionIntInput | null,
  anomaly?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountBalanceModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountBalanceModelFilterInput | null > | null,
};

export type ModelSubscriptionReportDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  generatedData?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportDataTableFilterInput | null > | null,
};

export type ModelSubscriptionFutureExpensesDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  arnnona?: ModelSubscriptionIntInput | null,
  water?: ModelSubscriptionIntInput | null,
  energy?: ModelSubscriptionIntInput | null,
  houseMainanace?: ModelSubscriptionIntInput | null,
  network?: ModelSubscriptionIntInput | null,
  car?: ModelSubscriptionIntInput | null,
  school?: ModelSubscriptionIntInput | null,
  kintergarden?: ModelSubscriptionIntInput | null,
  classes?: ModelSubscriptionIntInput | null,
  privateLessons?: ModelSubscriptionIntInput | null,
  safetyNet?: ModelSubscriptionIntInput | null,
  healthInsurance?: ModelSubscriptionIntInput | null,
  dental?: ModelSubscriptionIntInput | null,
  social?: ModelSubscriptionIntInput | null,
  food?: ModelSubscriptionIntInput | null,
  laundry?: ModelSubscriptionIntInput | null,
  tax?: ModelSubscriptionIntInput | null,
  specialTax?: ModelSubscriptionIntInput | null,
  cleaning?: ModelSubscriptionIntInput | null,
  garden?: ModelSubscriptionIntInput | null,
  extraSlot?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFutureExpensesDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionFutureExpensesDataTableFilterInput | null > | null,
};

export type ModelSubscriptionFutureIncomesDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sallary?: ModelSubscriptionIntInput | null,
  penssion?: ModelSubscriptionIntInput | null,
  socialSecurityChildren?: ModelSubscriptionIntInput | null,
  socialSecuritySenior?: ModelSubscriptionIntInput | null,
  socialBenefits?: ModelSubscriptionIntInput | null,
  medicalBenefits?: ModelSubscriptionIntInput | null,
  safetyNet?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFutureIncomesDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionFutureIncomesDataTableFilterInput | null > | null,
};

export type ModelSubscriptionEducationDataTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  privateLessons?: ModelSubscriptionIntInput | null,
  classes?: ModelSubscriptionIntInput | null,
  school?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationDataTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationDataTableFilterInput | null > | null,
};

export type ModelSubscriptionDynamicDataModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  box?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDynamicDataModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionDynamicDataModelFilterInput | null > | null,
};

export type ModelSubscriptionFixedDataModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  summary?: ModelSubscriptionIntInput | null,
  stats?: ModelSubscriptionIntInput | null,
  actualCost?: ModelSubscriptionIntInput | null,
  communityCoverage?: ModelSubscriptionIntInput | null,
  memberParticipace?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFixedDataModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionFixedDataModelFilterInput | null > | null,
};

export type ModelSubscriptionSelectModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  checkbox?: ModelSubscriptionStringInput | null,
  radio?: ModelSubscriptionStringInput | null,
  dropdown?: ModelSubscriptionStringInput | null,
  stepper?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSelectModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionSelectModelFilterInput | null > | null,
};

export type ModelSubscriptionButtonModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionButtonModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionButtonModelFilterInput | null > | null,
};

export type ModelSubscriptionLayoutModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  backgroundImage?: ModelSubscriptionStringInput | null,
  theme?: ModelSubscriptionStringInput | null,
  credits?: ModelSubscriptionStringInput | null,
  desc?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLayoutModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionLayoutModelFilterInput | null > | null,
};

export type CreateCurrentIncomeDataTableMutationVariables = {
  input: CreateCurrentIncomeDataTableInput,
  condition?: ModelCurrentIncomeDataTableConditionInput | null,
};

export type CreateCurrentIncomeDataTableMutation = {
  createCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCurrentIncomeDataTableMutationVariables = {
  input: UpdateCurrentIncomeDataTableInput,
  condition?: ModelCurrentIncomeDataTableConditionInput | null,
};

export type UpdateCurrentIncomeDataTableMutation = {
  updateCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCurrentIncomeDataTableMutationVariables = {
  input: DeleteCurrentIncomeDataTableInput,
  condition?: ModelCurrentIncomeDataTableConditionInput | null,
};

export type DeleteCurrentIncomeDataTableMutation = {
  deleteCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCurrentExpensesDataTableMutationVariables = {
  input: CreateCurrentExpensesDataTableInput,
  condition?: ModelCurrentExpensesDataTableConditionInput | null,
};

export type CreateCurrentExpensesDataTableMutation = {
  createCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCurrentExpensesDataTableMutationVariables = {
  input: UpdateCurrentExpensesDataTableInput,
  condition?: ModelCurrentExpensesDataTableConditionInput | null,
};

export type UpdateCurrentExpensesDataTableMutation = {
  updateCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCurrentExpensesDataTableMutationVariables = {
  input: DeleteCurrentExpensesDataTableInput,
  condition?: ModelCurrentExpensesDataTableConditionInput | null,
};

export type DeleteCurrentExpensesDataTableMutation = {
  deleteCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountBalanceModelMutationVariables = {
  input: CreateAccountBalanceModelInput,
  condition?: ModelAccountBalanceModelConditionInput | null,
};

export type CreateAccountBalanceModelMutation = {
  createAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountBalanceModelMutationVariables = {
  input: UpdateAccountBalanceModelInput,
  condition?: ModelAccountBalanceModelConditionInput | null,
};

export type UpdateAccountBalanceModelMutation = {
  updateAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountBalanceModelMutationVariables = {
  input: DeleteAccountBalanceModelInput,
  condition?: ModelAccountBalanceModelConditionInput | null,
};

export type DeleteAccountBalanceModelMutation = {
  deleteAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportDataTableMutationVariables = {
  input: CreateReportDataTableInput,
  condition?: ModelReportDataTableConditionInput | null,
};

export type CreateReportDataTableMutation = {
  createReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportDataTableMutationVariables = {
  input: UpdateReportDataTableInput,
  condition?: ModelReportDataTableConditionInput | null,
};

export type UpdateReportDataTableMutation = {
  updateReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportDataTableMutationVariables = {
  input: DeleteReportDataTableInput,
  condition?: ModelReportDataTableConditionInput | null,
};

export type DeleteReportDataTableMutation = {
  deleteReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFutureExpensesDataTableMutationVariables = {
  input: CreateFutureExpensesDataTableInput,
  condition?: ModelFutureExpensesDataTableConditionInput | null,
};

export type CreateFutureExpensesDataTableMutation = {
  createFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFutureExpensesDataTableMutationVariables = {
  input: UpdateFutureExpensesDataTableInput,
  condition?: ModelFutureExpensesDataTableConditionInput | null,
};

export type UpdateFutureExpensesDataTableMutation = {
  updateFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFutureExpensesDataTableMutationVariables = {
  input: DeleteFutureExpensesDataTableInput,
  condition?: ModelFutureExpensesDataTableConditionInput | null,
};

export type DeleteFutureExpensesDataTableMutation = {
  deleteFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFutureIncomesDataTableMutationVariables = {
  input: CreateFutureIncomesDataTableInput,
  condition?: ModelFutureIncomesDataTableConditionInput | null,
};

export type CreateFutureIncomesDataTableMutation = {
  createFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFutureIncomesDataTableMutationVariables = {
  input: UpdateFutureIncomesDataTableInput,
  condition?: ModelFutureIncomesDataTableConditionInput | null,
};

export type UpdateFutureIncomesDataTableMutation = {
  updateFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFutureIncomesDataTableMutationVariables = {
  input: DeleteFutureIncomesDataTableInput,
  condition?: ModelFutureIncomesDataTableConditionInput | null,
};

export type DeleteFutureIncomesDataTableMutation = {
  deleteFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEducationDataTableMutationVariables = {
  input: CreateEducationDataTableInput,
  condition?: ModelEducationDataTableConditionInput | null,
};

export type CreateEducationDataTableMutation = {
  createEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEducationDataTableMutationVariables = {
  input: UpdateEducationDataTableInput,
  condition?: ModelEducationDataTableConditionInput | null,
};

export type UpdateEducationDataTableMutation = {
  updateEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEducationDataTableMutationVariables = {
  input: DeleteEducationDataTableInput,
  condition?: ModelEducationDataTableConditionInput | null,
};

export type DeleteEducationDataTableMutation = {
  deleteEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDynamicDataModelMutationVariables = {
  input: CreateDynamicDataModelInput,
  condition?: ModelDynamicDataModelConditionInput | null,
};

export type CreateDynamicDataModelMutation = {
  createDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDynamicDataModelMutationVariables = {
  input: UpdateDynamicDataModelInput,
  condition?: ModelDynamicDataModelConditionInput | null,
};

export type UpdateDynamicDataModelMutation = {
  updateDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDynamicDataModelMutationVariables = {
  input: DeleteDynamicDataModelInput,
  condition?: ModelDynamicDataModelConditionInput | null,
};

export type DeleteDynamicDataModelMutation = {
  deleteDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFixedDataModelMutationVariables = {
  input: CreateFixedDataModelInput,
  condition?: ModelFixedDataModelConditionInput | null,
};

export type CreateFixedDataModelMutation = {
  createFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFixedDataModelMutationVariables = {
  input: UpdateFixedDataModelInput,
  condition?: ModelFixedDataModelConditionInput | null,
};

export type UpdateFixedDataModelMutation = {
  updateFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFixedDataModelMutationVariables = {
  input: DeleteFixedDataModelInput,
  condition?: ModelFixedDataModelConditionInput | null,
};

export type DeleteFixedDataModelMutation = {
  deleteFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSelectModelMutationVariables = {
  input: CreateSelectModelInput,
  condition?: ModelSelectModelConditionInput | null,
};

export type CreateSelectModelMutation = {
  createSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSelectModelMutationVariables = {
  input: UpdateSelectModelInput,
  condition?: ModelSelectModelConditionInput | null,
};

export type UpdateSelectModelMutation = {
  updateSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSelectModelMutationVariables = {
  input: DeleteSelectModelInput,
  condition?: ModelSelectModelConditionInput | null,
};

export type DeleteSelectModelMutation = {
  deleteSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateButtonModelMutationVariables = {
  input: CreateButtonModelInput,
  condition?: ModelButtonModelConditionInput | null,
};

export type CreateButtonModelMutation = {
  createButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateButtonModelMutationVariables = {
  input: UpdateButtonModelInput,
  condition?: ModelButtonModelConditionInput | null,
};

export type UpdateButtonModelMutation = {
  updateButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteButtonModelMutationVariables = {
  input: DeleteButtonModelInput,
  condition?: ModelButtonModelConditionInput | null,
};

export type DeleteButtonModelMutation = {
  deleteButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLayoutModelMutationVariables = {
  input: CreateLayoutModelInput,
  condition?: ModelLayoutModelConditionInput | null,
};

export type CreateLayoutModelMutation = {
  createLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLayoutModelMutationVariables = {
  input: UpdateLayoutModelInput,
  condition?: ModelLayoutModelConditionInput | null,
};

export type UpdateLayoutModelMutation = {
  updateLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLayoutModelMutationVariables = {
  input: DeleteLayoutModelInput,
  condition?: ModelLayoutModelConditionInput | null,
};

export type DeleteLayoutModelMutation = {
  deleteLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCurrentIncomeDataTableQueryVariables = {
  id: string,
};

export type GetCurrentIncomeDataTableQuery = {
  getCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCurrentIncomeDataTablesQueryVariables = {
  filter?: ModelCurrentIncomeDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCurrentIncomeDataTablesQuery = {
  listCurrentIncomeDataTables?:  {
    __typename: "ModelCurrentIncomeDataTableConnection",
    items:  Array< {
      __typename: "CurrentIncomeDataTable",
      id: string,
      sallary?: number | null,
      childrenSuppelment?: number | null,
      food?: number | null,
      laundry?: number | null,
      gas?: number | null,
      hygine?: number | null,
      maitanence?: number | null,
      car?: number | null,
      untitledfield?: number | null,
      energy?: number | null,
      extraHoursBenefit?: number | null,
      extraFood?: number | null,
      chrony?: number | null,
      extraSlot?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCurrentExpensesDataTableQueryVariables = {
  id: string,
};

export type GetCurrentExpensesDataTableQuery = {
  getCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCurrentExpensesDataTablesQueryVariables = {
  filter?: ModelCurrentExpensesDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCurrentExpensesDataTablesQuery = {
  listCurrentExpensesDataTables?:  {
    __typename: "ModelCurrentExpensesDataTableConnection",
    items:  Array< {
      __typename: "CurrentExpensesDataTable",
      id: string,
      energy?: number | null,
      mintanence?: number | null,
      network?: number | null,
      car?: number | null,
      school?: number | null,
      privateLessons?: number | null,
      classes?: number | null,
      safetyNet?: number | null,
      dental?: number | null,
      food?: number | null,
      laundry?: number | null,
      extraSlot?: Array< string | null > | null,
      gas?: number | null,
      shifts?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountBalanceModelQueryVariables = {
  id: string,
};

export type GetAccountBalanceModelQuery = {
  getAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountBalanceModelsQueryVariables = {
  filter?: ModelAccountBalanceModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountBalanceModelsQuery = {
  listAccountBalanceModels?:  {
    __typename: "ModelAccountBalanceModelConnection",
    items:  Array< {
      __typename: "AccountBalanceModel",
      id: string,
      income?: number | null,
      expanse?: number | null,
      anomaly?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportDataTableQueryVariables = {
  id: string,
};

export type GetReportDataTableQuery = {
  getReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportDataTablesQueryVariables = {
  filter?: ModelReportDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportDataTablesQuery = {
  listReportDataTables?:  {
    __typename: "ModelReportDataTableConnection",
    items:  Array< {
      __typename: "ReportDataTable",
      id: string,
      generatedData?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFutureExpensesDataTableQueryVariables = {
  id: string,
};

export type GetFutureExpensesDataTableQuery = {
  getFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFutureExpensesDataTablesQueryVariables = {
  filter?: ModelFutureExpensesDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFutureExpensesDataTablesQuery = {
  listFutureExpensesDataTables?:  {
    __typename: "ModelFutureExpensesDataTableConnection",
    items:  Array< {
      __typename: "FutureExpensesDataTable",
      id: string,
      arnnona?: number | null,
      water?: number | null,
      energy?: number | null,
      houseMainanace?: number | null,
      network?: number | null,
      car?: number | null,
      school?: number | null,
      kintergarden?: number | null,
      classes?: number | null,
      privateLessons?: number | null,
      safetyNet?: number | null,
      healthInsurance?: number | null,
      dental?: number | null,
      social?: number | null,
      food?: number | null,
      laundry?: number | null,
      tax?: number | null,
      specialTax?: number | null,
      cleaning?: number | null,
      garden?: number | null,
      extraSlot?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFutureIncomesDataTableQueryVariables = {
  id: string,
};

export type GetFutureIncomesDataTableQuery = {
  getFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFutureIncomesDataTablesQueryVariables = {
  filter?: ModelFutureIncomesDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFutureIncomesDataTablesQuery = {
  listFutureIncomesDataTables?:  {
    __typename: "ModelFutureIncomesDataTableConnection",
    items:  Array< {
      __typename: "FutureIncomesDataTable",
      id: string,
      sallary?: number | null,
      penssion?: number | null,
      socialSecurityChildren?: number | null,
      socialSecuritySenior?: number | null,
      socialBenefits?: number | null,
      medicalBenefits?: number | null,
      safetyNet?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationDataTableQueryVariables = {
  id: string,
};

export type GetEducationDataTableQuery = {
  getEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEducationDataTablesQueryVariables = {
  filter?: ModelEducationDataTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationDataTablesQuery = {
  listEducationDataTables?:  {
    __typename: "ModelEducationDataTableConnection",
    items:  Array< {
      __typename: "EducationDataTable",
      id: string,
      privateLessons?: number | null,
      classes?: number | null,
      school?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDynamicDataModelQueryVariables = {
  id: string,
};

export type GetDynamicDataModelQuery = {
  getDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDynamicDataModelsQueryVariables = {
  filter?: ModelDynamicDataModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDynamicDataModelsQuery = {
  listDynamicDataModels?:  {
    __typename: "ModelDynamicDataModelConnection",
    items:  Array< {
      __typename: "DynamicDataModel",
      id: string,
      box?: string | null,
      text?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFixedDataModelQueryVariables = {
  id: string,
};

export type GetFixedDataModelQuery = {
  getFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFixedDataModelsQueryVariables = {
  filter?: ModelFixedDataModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFixedDataModelsQuery = {
  listFixedDataModels?:  {
    __typename: "ModelFixedDataModelConnection",
    items:  Array< {
      __typename: "FixedDataModel",
      id: string,
      summary?: number | null,
      stats?: number | null,
      actualCost?: number | null,
      communityCoverage?: number | null,
      memberParticipace?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSelectModelQueryVariables = {
  id: string,
};

export type GetSelectModelQuery = {
  getSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSelectModelsQueryVariables = {
  filter?: ModelSelectModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSelectModelsQuery = {
  listSelectModels?:  {
    __typename: "ModelSelectModelConnection",
    items:  Array< {
      __typename: "SelectModel",
      id: string,
      checkbox?: string | null,
      radio?: string | null,
      dropdown?: string | null,
      stepper?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetButtonModelQueryVariables = {
  id: string,
};

export type GetButtonModelQuery = {
  getButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListButtonModelsQueryVariables = {
  filter?: ModelButtonModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListButtonModelsQuery = {
  listButtonModels?:  {
    __typename: "ModelButtonModelConnection",
    items:  Array< {
      __typename: "ButtonModel",
      id: string,
      label?: string | null,
      icon?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLayoutModelQueryVariables = {
  id: string,
};

export type GetLayoutModelQuery = {
  getLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLayoutModelsQueryVariables = {
  filter?: ModelLayoutModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLayoutModelsQuery = {
  listLayoutModels?:  {
    __typename: "ModelLayoutModelConnection",
    items:  Array< {
      __typename: "LayoutModel",
      id: string,
      backgroundImage?: string | null,
      theme?: string | null,
      credits?: string | null,
      desc?: string | null,
      date?: string | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCurrentIncomeDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionCurrentIncomeDataTableFilterInput | null,
};

export type OnCreateCurrentIncomeDataTableSubscription = {
  onCreateCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCurrentIncomeDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionCurrentIncomeDataTableFilterInput | null,
};

export type OnUpdateCurrentIncomeDataTableSubscription = {
  onUpdateCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCurrentIncomeDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionCurrentIncomeDataTableFilterInput | null,
};

export type OnDeleteCurrentIncomeDataTableSubscription = {
  onDeleteCurrentIncomeDataTable?:  {
    __typename: "CurrentIncomeDataTable",
    id: string,
    sallary?: number | null,
    childrenSuppelment?: number | null,
    food?: number | null,
    laundry?: number | null,
    gas?: number | null,
    hygine?: number | null,
    maitanence?: number | null,
    car?: number | null,
    untitledfield?: number | null,
    energy?: number | null,
    extraHoursBenefit?: number | null,
    extraFood?: number | null,
    chrony?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCurrentExpensesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionCurrentExpensesDataTableFilterInput | null,
};

export type OnCreateCurrentExpensesDataTableSubscription = {
  onCreateCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCurrentExpensesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionCurrentExpensesDataTableFilterInput | null,
};

export type OnUpdateCurrentExpensesDataTableSubscription = {
  onUpdateCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCurrentExpensesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionCurrentExpensesDataTableFilterInput | null,
};

export type OnDeleteCurrentExpensesDataTableSubscription = {
  onDeleteCurrentExpensesDataTable?:  {
    __typename: "CurrentExpensesDataTable",
    id: string,
    energy?: number | null,
    mintanence?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    privateLessons?: number | null,
    classes?: number | null,
    safetyNet?: number | null,
    dental?: number | null,
    food?: number | null,
    laundry?: number | null,
    extraSlot?: Array< string | null > | null,
    gas?: number | null,
    shifts?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountBalanceModelSubscriptionVariables = {
  filter?: ModelSubscriptionAccountBalanceModelFilterInput | null,
};

export type OnCreateAccountBalanceModelSubscription = {
  onCreateAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountBalanceModelSubscriptionVariables = {
  filter?: ModelSubscriptionAccountBalanceModelFilterInput | null,
};

export type OnUpdateAccountBalanceModelSubscription = {
  onUpdateAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountBalanceModelSubscriptionVariables = {
  filter?: ModelSubscriptionAccountBalanceModelFilterInput | null,
};

export type OnDeleteAccountBalanceModelSubscription = {
  onDeleteAccountBalanceModel?:  {
    __typename: "AccountBalanceModel",
    id: string,
    income?: number | null,
    expanse?: number | null,
    anomaly?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataTableFilterInput | null,
};

export type OnCreateReportDataTableSubscription = {
  onCreateReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataTableFilterInput | null,
};

export type OnUpdateReportDataTableSubscription = {
  onUpdateReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataTableFilterInput | null,
};

export type OnDeleteReportDataTableSubscription = {
  onDeleteReportDataTable?:  {
    __typename: "ReportDataTable",
    id: string,
    generatedData?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFutureExpensesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionFutureExpensesDataTableFilterInput | null,
};

export type OnCreateFutureExpensesDataTableSubscription = {
  onCreateFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFutureExpensesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionFutureExpensesDataTableFilterInput | null,
};

export type OnUpdateFutureExpensesDataTableSubscription = {
  onUpdateFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFutureExpensesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionFutureExpensesDataTableFilterInput | null,
};

export type OnDeleteFutureExpensesDataTableSubscription = {
  onDeleteFutureExpensesDataTable?:  {
    __typename: "FutureExpensesDataTable",
    id: string,
    arnnona?: number | null,
    water?: number | null,
    energy?: number | null,
    houseMainanace?: number | null,
    network?: number | null,
    car?: number | null,
    school?: number | null,
    kintergarden?: number | null,
    classes?: number | null,
    privateLessons?: number | null,
    safetyNet?: number | null,
    healthInsurance?: number | null,
    dental?: number | null,
    social?: number | null,
    food?: number | null,
    laundry?: number | null,
    tax?: number | null,
    specialTax?: number | null,
    cleaning?: number | null,
    garden?: number | null,
    extraSlot?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFutureIncomesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionFutureIncomesDataTableFilterInput | null,
};

export type OnCreateFutureIncomesDataTableSubscription = {
  onCreateFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFutureIncomesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionFutureIncomesDataTableFilterInput | null,
};

export type OnUpdateFutureIncomesDataTableSubscription = {
  onUpdateFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFutureIncomesDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionFutureIncomesDataTableFilterInput | null,
};

export type OnDeleteFutureIncomesDataTableSubscription = {
  onDeleteFutureIncomesDataTable?:  {
    __typename: "FutureIncomesDataTable",
    id: string,
    sallary?: number | null,
    penssion?: number | null,
    socialSecurityChildren?: number | null,
    socialSecuritySenior?: number | null,
    socialBenefits?: number | null,
    medicalBenefits?: number | null,
    safetyNet?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEducationDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionEducationDataTableFilterInput | null,
};

export type OnCreateEducationDataTableSubscription = {
  onCreateEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionEducationDataTableFilterInput | null,
};

export type OnUpdateEducationDataTableSubscription = {
  onUpdateEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationDataTableSubscriptionVariables = {
  filter?: ModelSubscriptionEducationDataTableFilterInput | null,
};

export type OnDeleteEducationDataTableSubscription = {
  onDeleteEducationDataTable?:  {
    __typename: "EducationDataTable",
    id: string,
    privateLessons?: number | null,
    classes?: number | null,
    school?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDynamicDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionDynamicDataModelFilterInput | null,
};

export type OnCreateDynamicDataModelSubscription = {
  onCreateDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDynamicDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionDynamicDataModelFilterInput | null,
};

export type OnUpdateDynamicDataModelSubscription = {
  onUpdateDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDynamicDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionDynamicDataModelFilterInput | null,
};

export type OnDeleteDynamicDataModelSubscription = {
  onDeleteDynamicDataModel?:  {
    __typename: "DynamicDataModel",
    id: string,
    box?: string | null,
    text?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFixedDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionFixedDataModelFilterInput | null,
};

export type OnCreateFixedDataModelSubscription = {
  onCreateFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFixedDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionFixedDataModelFilterInput | null,
};

export type OnUpdateFixedDataModelSubscription = {
  onUpdateFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFixedDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionFixedDataModelFilterInput | null,
};

export type OnDeleteFixedDataModelSubscription = {
  onDeleteFixedDataModel?:  {
    __typename: "FixedDataModel",
    id: string,
    summary?: number | null,
    stats?: number | null,
    actualCost?: number | null,
    communityCoverage?: number | null,
    memberParticipace?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSelectModelSubscriptionVariables = {
  filter?: ModelSubscriptionSelectModelFilterInput | null,
};

export type OnCreateSelectModelSubscription = {
  onCreateSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSelectModelSubscriptionVariables = {
  filter?: ModelSubscriptionSelectModelFilterInput | null,
};

export type OnUpdateSelectModelSubscription = {
  onUpdateSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSelectModelSubscriptionVariables = {
  filter?: ModelSubscriptionSelectModelFilterInput | null,
};

export type OnDeleteSelectModelSubscription = {
  onDeleteSelectModel?:  {
    __typename: "SelectModel",
    id: string,
    checkbox?: string | null,
    radio?: string | null,
    dropdown?: string | null,
    stepper?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateButtonModelSubscriptionVariables = {
  filter?: ModelSubscriptionButtonModelFilterInput | null,
};

export type OnCreateButtonModelSubscription = {
  onCreateButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateButtonModelSubscriptionVariables = {
  filter?: ModelSubscriptionButtonModelFilterInput | null,
};

export type OnUpdateButtonModelSubscription = {
  onUpdateButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteButtonModelSubscriptionVariables = {
  filter?: ModelSubscriptionButtonModelFilterInput | null,
};

export type OnDeleteButtonModelSubscription = {
  onDeleteButtonModel?:  {
    __typename: "ButtonModel",
    id: string,
    label?: string | null,
    icon?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLayoutModelSubscriptionVariables = {
  filter?: ModelSubscriptionLayoutModelFilterInput | null,
};

export type OnCreateLayoutModelSubscription = {
  onCreateLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLayoutModelSubscriptionVariables = {
  filter?: ModelSubscriptionLayoutModelFilterInput | null,
};

export type OnUpdateLayoutModelSubscription = {
  onUpdateLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLayoutModelSubscriptionVariables = {
  filter?: ModelSubscriptionLayoutModelFilterInput | null,
};

export type OnDeleteLayoutModelSubscription = {
  onDeleteLayoutModel?:  {
    __typename: "LayoutModel",
    id: string,
    backgroundImage?: string | null,
    theme?: string | null,
    credits?: string | null,
    desc?: string | null,
    date?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
