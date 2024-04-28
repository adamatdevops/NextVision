/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLandingPageModelInput = {
  id?: string | null,
  Description?: string | null,
  Date?: string | null,
  Time?: string | null,
};

export type ModelLandingPageModelConditionInput = {
  Description?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  Time?: ModelStringInput | null,
  and?: Array< ModelLandingPageModelConditionInput | null > | null,
  or?: Array< ModelLandingPageModelConditionInput | null > | null,
  not?: ModelLandingPageModelConditionInput | null,
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

export type LandingPageModel = {
  __typename: "LandingPageModel",
  id: string,
  Description?: string | null,
  Date?: string | null,
  Time?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLandingPageModelInput = {
  id: string,
  Description?: string | null,
  Date?: string | null,
  Time?: string | null,
};

export type DeleteLandingPageModelInput = {
  id: string,
};

export type CreateOutcomesModelInput = {
  id?: string | null,
};

export type ModelOutcomesModelConditionInput = {
  and?: Array< ModelOutcomesModelConditionInput | null > | null,
  or?: Array< ModelOutcomesModelConditionInput | null > | null,
  not?: ModelOutcomesModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type OutcomesModel = {
  __typename: "OutcomesModel",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOutcomesModelInput = {
  id: string,
};

export type DeleteOutcomesModelInput = {
  id: string,
};

export type CreateIncomesModelInput = {
  id?: string | null,
};

export type ModelIncomesModelConditionInput = {
  and?: Array< ModelIncomesModelConditionInput | null > | null,
  or?: Array< ModelIncomesModelConditionInput | null > | null,
  not?: ModelIncomesModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type IncomesModel = {
  __typename: "IncomesModel",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIncomesModelInput = {
  id: string,
};

export type DeleteIncomesModelInput = {
  id: string,
};

export type CreateEducationModelInput = {
  id?: string | null,
};

export type ModelEducationModelConditionInput = {
  and?: Array< ModelEducationModelConditionInput | null > | null,
  or?: Array< ModelEducationModelConditionInput | null > | null,
  not?: ModelEducationModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type EducationModel = {
  __typename: "EducationModel",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEducationModelInput = {
  id: string,
};

export type DeleteEducationModelInput = {
  id: string,
};

export type CreateSeniorityModelInput = {
  id?: string | null,
};

export type ModelSeniorityModelConditionInput = {
  and?: Array< ModelSeniorityModelConditionInput | null > | null,
  or?: Array< ModelSeniorityModelConditionInput | null > | null,
  not?: ModelSeniorityModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SeniorityModel = {
  __typename: "SeniorityModel",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSeniorityModelInput = {
  id: string,
};

export type DeleteSeniorityModelInput = {
  id: string,
};

export type CreateMembershipModelInput = {
  id?: string | null,
};

export type ModelMembershipModelConditionInput = {
  and?: Array< ModelMembershipModelConditionInput | null > | null,
  or?: Array< ModelMembershipModelConditionInput | null > | null,
  not?: ModelMembershipModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type MembershipModel = {
  __typename: "MembershipModel",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMembershipModelInput = {
  id: string,
};

export type DeleteMembershipModelInput = {
  id: string,
};

export type CreateEconomicSimulatorInput = {
  id?: string | null,
  IncomesData: string,
  OutcomesData: string,
  economicSimulatorIncomesRelId?: string | null,
  economicSimulatorOutcomesRelId?: string | null,
};

export type ModelEconomicSimulatorConditionInput = {
  IncomesData?: ModelStringInput | null,
  OutcomesData?: ModelStringInput | null,
  and?: Array< ModelEconomicSimulatorConditionInput | null > | null,
  or?: Array< ModelEconomicSimulatorConditionInput | null > | null,
  not?: ModelEconomicSimulatorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  economicSimulatorIncomesRelId?: ModelIDInput | null,
  economicSimulatorOutcomesRelId?: ModelIDInput | null,
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

export type EconomicSimulator = {
  __typename: "EconomicSimulator",
  id: string,
  IncomesData: string,
  OutcomesData: string,
  IncomesRel?: IncomesModel | null,
  OutcomesRel?: OutcomesModel | null,
  createdAt: string,
  updatedAt: string,
  economicSimulatorIncomesRelId?: string | null,
  economicSimulatorOutcomesRelId?: string | null,
};

export type UpdateEconomicSimulatorInput = {
  id: string,
  IncomesData?: string | null,
  OutcomesData?: string | null,
  economicSimulatorIncomesRelId?: string | null,
  economicSimulatorOutcomesRelId?: string | null,
};

export type DeleteEconomicSimulatorInput = {
  id: string,
};

export type CreateSocialSimulatorInput = {
  id?: string | null,
  MembershipData: string,
  SeniorityData: string,
  EducationData: string,
  socialSimulatorMembershipRelId: string,
  socialSimulatorSeniorityRelId: string,
  socialSimulatorEducationRelId: string,
};

export type ModelSocialSimulatorConditionInput = {
  MembershipData?: ModelIDInput | null,
  SeniorityData?: ModelIDInput | null,
  EducationData?: ModelIDInput | null,
  and?: Array< ModelSocialSimulatorConditionInput | null > | null,
  or?: Array< ModelSocialSimulatorConditionInput | null > | null,
  not?: ModelSocialSimulatorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  socialSimulatorMembershipRelId?: ModelIDInput | null,
  socialSimulatorSeniorityRelId?: ModelIDInput | null,
  socialSimulatorEducationRelId?: ModelIDInput | null,
};

export type SocialSimulator = {
  __typename: "SocialSimulator",
  id: string,
  MembershipData: string,
  SeniorityData: string,
  EducationData: string,
  MembershipRel: MembershipModel,
  SeniorityRel: SeniorityModel,
  EducationRel: EducationModel,
  createdAt: string,
  updatedAt: string,
  socialSimulatorMembershipRelId: string,
  socialSimulatorSeniorityRelId: string,
  socialSimulatorEducationRelId: string,
};

export type UpdateSocialSimulatorInput = {
  id: string,
  MembershipData?: string | null,
  SeniorityData?: string | null,
  EducationData?: string | null,
  socialSimulatorMembershipRelId?: string | null,
  socialSimulatorSeniorityRelId?: string | null,
  socialSimulatorEducationRelId?: string | null,
};

export type DeleteSocialSimulatorInput = {
  id: string,
};

export type ModelLandingPageModelFilterInput = {
  id?: ModelIDInput | null,
  Description?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  Time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLandingPageModelFilterInput | null > | null,
  or?: Array< ModelLandingPageModelFilterInput | null > | null,
  not?: ModelLandingPageModelFilterInput | null,
};

export type ModelLandingPageModelConnection = {
  __typename: "ModelLandingPageModelConnection",
  items:  Array<LandingPageModel | null >,
  nextToken?: string | null,
};

export type ModelOutcomesModelFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOutcomesModelFilterInput | null > | null,
  or?: Array< ModelOutcomesModelFilterInput | null > | null,
  not?: ModelOutcomesModelFilterInput | null,
};

export type ModelOutcomesModelConnection = {
  __typename: "ModelOutcomesModelConnection",
  items:  Array<OutcomesModel | null >,
  nextToken?: string | null,
};

export type ModelIncomesModelFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIncomesModelFilterInput | null > | null,
  or?: Array< ModelIncomesModelFilterInput | null > | null,
  not?: ModelIncomesModelFilterInput | null,
};

export type ModelIncomesModelConnection = {
  __typename: "ModelIncomesModelConnection",
  items:  Array<IncomesModel | null >,
  nextToken?: string | null,
};

export type ModelEducationModelFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationModelFilterInput | null > | null,
  or?: Array< ModelEducationModelFilterInput | null > | null,
  not?: ModelEducationModelFilterInput | null,
};

export type ModelEducationModelConnection = {
  __typename: "ModelEducationModelConnection",
  items:  Array<EducationModel | null >,
  nextToken?: string | null,
};

export type ModelSeniorityModelFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSeniorityModelFilterInput | null > | null,
  or?: Array< ModelSeniorityModelFilterInput | null > | null,
  not?: ModelSeniorityModelFilterInput | null,
};

export type ModelSeniorityModelConnection = {
  __typename: "ModelSeniorityModelConnection",
  items:  Array<SeniorityModel | null >,
  nextToken?: string | null,
};

export type ModelMembershipModelFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMembershipModelFilterInput | null > | null,
  or?: Array< ModelMembershipModelFilterInput | null > | null,
  not?: ModelMembershipModelFilterInput | null,
};

export type ModelMembershipModelConnection = {
  __typename: "ModelMembershipModelConnection",
  items:  Array<MembershipModel | null >,
  nextToken?: string | null,
};

export type ModelEconomicSimulatorFilterInput = {
  id?: ModelIDInput | null,
  IncomesData?: ModelStringInput | null,
  OutcomesData?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEconomicSimulatorFilterInput | null > | null,
  or?: Array< ModelEconomicSimulatorFilterInput | null > | null,
  not?: ModelEconomicSimulatorFilterInput | null,
  economicSimulatorIncomesRelId?: ModelIDInput | null,
  economicSimulatorOutcomesRelId?: ModelIDInput | null,
};

export type ModelEconomicSimulatorConnection = {
  __typename: "ModelEconomicSimulatorConnection",
  items:  Array<EconomicSimulator | null >,
  nextToken?: string | null,
};

export type ModelSocialSimulatorFilterInput = {
  id?: ModelIDInput | null,
  MembershipData?: ModelIDInput | null,
  SeniorityData?: ModelIDInput | null,
  EducationData?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSocialSimulatorFilterInput | null > | null,
  or?: Array< ModelSocialSimulatorFilterInput | null > | null,
  not?: ModelSocialSimulatorFilterInput | null,
  socialSimulatorMembershipRelId?: ModelIDInput | null,
  socialSimulatorSeniorityRelId?: ModelIDInput | null,
  socialSimulatorEducationRelId?: ModelIDInput | null,
};

export type ModelSocialSimulatorConnection = {
  __typename: "ModelSocialSimulatorConnection",
  items:  Array<SocialSimulator | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLandingPageModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Description?: ModelSubscriptionStringInput | null,
  Date?: ModelSubscriptionStringInput | null,
  Time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLandingPageModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionLandingPageModelFilterInput | null > | null,
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

export type ModelSubscriptionOutcomesModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOutcomesModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionOutcomesModelFilterInput | null > | null,
};

export type ModelSubscriptionIncomesModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIncomesModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionIncomesModelFilterInput | null > | null,
};

export type ModelSubscriptionEducationModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationModelFilterInput | null > | null,
};

export type ModelSubscriptionSeniorityModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSeniorityModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeniorityModelFilterInput | null > | null,
};

export type ModelSubscriptionMembershipModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMembershipModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionMembershipModelFilterInput | null > | null,
};

export type ModelSubscriptionEconomicSimulatorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  IncomesData?: ModelSubscriptionStringInput | null,
  OutcomesData?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEconomicSimulatorFilterInput | null > | null,
  or?: Array< ModelSubscriptionEconomicSimulatorFilterInput | null > | null,
  economicSimulatorIncomesRelId?: ModelSubscriptionIDInput | null,
  economicSimulatorOutcomesRelId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionSocialSimulatorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  MembershipData?: ModelSubscriptionIDInput | null,
  SeniorityData?: ModelSubscriptionIDInput | null,
  EducationData?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSocialSimulatorFilterInput | null > | null,
  or?: Array< ModelSubscriptionSocialSimulatorFilterInput | null > | null,
  socialSimulatorMembershipRelId?: ModelSubscriptionIDInput | null,
  socialSimulatorSeniorityRelId?: ModelSubscriptionIDInput | null,
  socialSimulatorEducationRelId?: ModelSubscriptionIDInput | null,
};

export type CreateLandingPageModelMutationVariables = {
  input: CreateLandingPageModelInput,
  condition?: ModelLandingPageModelConditionInput | null,
};

export type CreateLandingPageModelMutation = {
  createLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLandingPageModelMutationVariables = {
  input: UpdateLandingPageModelInput,
  condition?: ModelLandingPageModelConditionInput | null,
};

export type UpdateLandingPageModelMutation = {
  updateLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLandingPageModelMutationVariables = {
  input: DeleteLandingPageModelInput,
  condition?: ModelLandingPageModelConditionInput | null,
};

export type DeleteLandingPageModelMutation = {
  deleteLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOutcomesModelMutationVariables = {
  input: CreateOutcomesModelInput,
  condition?: ModelOutcomesModelConditionInput | null,
};

export type CreateOutcomesModelMutation = {
  createOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOutcomesModelMutationVariables = {
  input: UpdateOutcomesModelInput,
  condition?: ModelOutcomesModelConditionInput | null,
};

export type UpdateOutcomesModelMutation = {
  updateOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOutcomesModelMutationVariables = {
  input: DeleteOutcomesModelInput,
  condition?: ModelOutcomesModelConditionInput | null,
};

export type DeleteOutcomesModelMutation = {
  deleteOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIncomesModelMutationVariables = {
  input: CreateIncomesModelInput,
  condition?: ModelIncomesModelConditionInput | null,
};

export type CreateIncomesModelMutation = {
  createIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIncomesModelMutationVariables = {
  input: UpdateIncomesModelInput,
  condition?: ModelIncomesModelConditionInput | null,
};

export type UpdateIncomesModelMutation = {
  updateIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIncomesModelMutationVariables = {
  input: DeleteIncomesModelInput,
  condition?: ModelIncomesModelConditionInput | null,
};

export type DeleteIncomesModelMutation = {
  deleteIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEducationModelMutationVariables = {
  input: CreateEducationModelInput,
  condition?: ModelEducationModelConditionInput | null,
};

export type CreateEducationModelMutation = {
  createEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEducationModelMutationVariables = {
  input: UpdateEducationModelInput,
  condition?: ModelEducationModelConditionInput | null,
};

export type UpdateEducationModelMutation = {
  updateEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEducationModelMutationVariables = {
  input: DeleteEducationModelInput,
  condition?: ModelEducationModelConditionInput | null,
};

export type DeleteEducationModelMutation = {
  deleteEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSeniorityModelMutationVariables = {
  input: CreateSeniorityModelInput,
  condition?: ModelSeniorityModelConditionInput | null,
};

export type CreateSeniorityModelMutation = {
  createSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSeniorityModelMutationVariables = {
  input: UpdateSeniorityModelInput,
  condition?: ModelSeniorityModelConditionInput | null,
};

export type UpdateSeniorityModelMutation = {
  updateSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSeniorityModelMutationVariables = {
  input: DeleteSeniorityModelInput,
  condition?: ModelSeniorityModelConditionInput | null,
};

export type DeleteSeniorityModelMutation = {
  deleteSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMembershipModelMutationVariables = {
  input: CreateMembershipModelInput,
  condition?: ModelMembershipModelConditionInput | null,
};

export type CreateMembershipModelMutation = {
  createMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembershipModelMutationVariables = {
  input: UpdateMembershipModelInput,
  condition?: ModelMembershipModelConditionInput | null,
};

export type UpdateMembershipModelMutation = {
  updateMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembershipModelMutationVariables = {
  input: DeleteMembershipModelInput,
  condition?: ModelMembershipModelConditionInput | null,
};

export type DeleteMembershipModelMutation = {
  deleteMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEconomicSimulatorMutationVariables = {
  input: CreateEconomicSimulatorInput,
  condition?: ModelEconomicSimulatorConditionInput | null,
};

export type CreateEconomicSimulatorMutation = {
  createEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type UpdateEconomicSimulatorMutationVariables = {
  input: UpdateEconomicSimulatorInput,
  condition?: ModelEconomicSimulatorConditionInput | null,
};

export type UpdateEconomicSimulatorMutation = {
  updateEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type DeleteEconomicSimulatorMutationVariables = {
  input: DeleteEconomicSimulatorInput,
  condition?: ModelEconomicSimulatorConditionInput | null,
};

export type DeleteEconomicSimulatorMutation = {
  deleteEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type CreateSocialSimulatorMutationVariables = {
  input: CreateSocialSimulatorInput,
  condition?: ModelSocialSimulatorConditionInput | null,
};

export type CreateSocialSimulatorMutation = {
  createSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};

export type UpdateSocialSimulatorMutationVariables = {
  input: UpdateSocialSimulatorInput,
  condition?: ModelSocialSimulatorConditionInput | null,
};

export type UpdateSocialSimulatorMutation = {
  updateSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};

export type DeleteSocialSimulatorMutationVariables = {
  input: DeleteSocialSimulatorInput,
  condition?: ModelSocialSimulatorConditionInput | null,
};

export type DeleteSocialSimulatorMutation = {
  deleteSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};

export type GetLandingPageModelQueryVariables = {
  id: string,
};

export type GetLandingPageModelQuery = {
  getLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLandingPageModelsQueryVariables = {
  filter?: ModelLandingPageModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLandingPageModelsQuery = {
  listLandingPageModels?:  {
    __typename: "ModelLandingPageModelConnection",
    items:  Array< {
      __typename: "LandingPageModel",
      id: string,
      Description?: string | null,
      Date?: string | null,
      Time?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOutcomesModelQueryVariables = {
  id: string,
};

export type GetOutcomesModelQuery = {
  getOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOutcomesModelsQueryVariables = {
  filter?: ModelOutcomesModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOutcomesModelsQuery = {
  listOutcomesModels?:  {
    __typename: "ModelOutcomesModelConnection",
    items:  Array< {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIncomesModelQueryVariables = {
  id: string,
};

export type GetIncomesModelQuery = {
  getIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIncomesModelsQueryVariables = {
  filter?: ModelIncomesModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIncomesModelsQuery = {
  listIncomesModels?:  {
    __typename: "ModelIncomesModelConnection",
    items:  Array< {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationModelQueryVariables = {
  id: string,
};

export type GetEducationModelQuery = {
  getEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEducationModelsQueryVariables = {
  filter?: ModelEducationModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationModelsQuery = {
  listEducationModels?:  {
    __typename: "ModelEducationModelConnection",
    items:  Array< {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSeniorityModelQueryVariables = {
  id: string,
};

export type GetSeniorityModelQuery = {
  getSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSeniorityModelsQueryVariables = {
  filter?: ModelSeniorityModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeniorityModelsQuery = {
  listSeniorityModels?:  {
    __typename: "ModelSeniorityModelConnection",
    items:  Array< {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMembershipModelQueryVariables = {
  id: string,
};

export type GetMembershipModelQuery = {
  getMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembershipModelsQueryVariables = {
  filter?: ModelMembershipModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembershipModelsQuery = {
  listMembershipModels?:  {
    __typename: "ModelMembershipModelConnection",
    items:  Array< {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEconomicSimulatorQueryVariables = {
  id: string,
};

export type GetEconomicSimulatorQuery = {
  getEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type ListEconomicSimulatorsQueryVariables = {
  filter?: ModelEconomicSimulatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEconomicSimulatorsQuery = {
  listEconomicSimulators?:  {
    __typename: "ModelEconomicSimulatorConnection",
    items:  Array< {
      __typename: "EconomicSimulator",
      id: string,
      IncomesData: string,
      OutcomesData: string,
      IncomesRel?:  {
        __typename: "IncomesModel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      OutcomesRel?:  {
        __typename: "OutcomesModel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      economicSimulatorIncomesRelId?: string | null,
      economicSimulatorOutcomesRelId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSocialSimulatorQueryVariables = {
  id: string,
};

export type GetSocialSimulatorQuery = {
  getSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};

export type ListSocialSimulatorsQueryVariables = {
  filter?: ModelSocialSimulatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialSimulatorsQuery = {
  listSocialSimulators?:  {
    __typename: "ModelSocialSimulatorConnection",
    items:  Array< {
      __typename: "SocialSimulator",
      id: string,
      MembershipData: string,
      SeniorityData: string,
      EducationData: string,
      MembershipRel:  {
        __typename: "MembershipModel",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      SeniorityRel:  {
        __typename: "SeniorityModel",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      EducationRel:  {
        __typename: "EducationModel",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      socialSimulatorMembershipRelId: string,
      socialSimulatorSeniorityRelId: string,
      socialSimulatorEducationRelId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLandingPageModelSubscriptionVariables = {
  filter?: ModelSubscriptionLandingPageModelFilterInput | null,
};

export type OnCreateLandingPageModelSubscription = {
  onCreateLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLandingPageModelSubscriptionVariables = {
  filter?: ModelSubscriptionLandingPageModelFilterInput | null,
};

export type OnUpdateLandingPageModelSubscription = {
  onUpdateLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLandingPageModelSubscriptionVariables = {
  filter?: ModelSubscriptionLandingPageModelFilterInput | null,
};

export type OnDeleteLandingPageModelSubscription = {
  onDeleteLandingPageModel?:  {
    __typename: "LandingPageModel",
    id: string,
    Description?: string | null,
    Date?: string | null,
    Time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOutcomesModelSubscriptionVariables = {
  filter?: ModelSubscriptionOutcomesModelFilterInput | null,
};

export type OnCreateOutcomesModelSubscription = {
  onCreateOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOutcomesModelSubscriptionVariables = {
  filter?: ModelSubscriptionOutcomesModelFilterInput | null,
};

export type OnUpdateOutcomesModelSubscription = {
  onUpdateOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOutcomesModelSubscriptionVariables = {
  filter?: ModelSubscriptionOutcomesModelFilterInput | null,
};

export type OnDeleteOutcomesModelSubscription = {
  onDeleteOutcomesModel?:  {
    __typename: "OutcomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIncomesModelSubscriptionVariables = {
  filter?: ModelSubscriptionIncomesModelFilterInput | null,
};

export type OnCreateIncomesModelSubscription = {
  onCreateIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIncomesModelSubscriptionVariables = {
  filter?: ModelSubscriptionIncomesModelFilterInput | null,
};

export type OnUpdateIncomesModelSubscription = {
  onUpdateIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIncomesModelSubscriptionVariables = {
  filter?: ModelSubscriptionIncomesModelFilterInput | null,
};

export type OnDeleteIncomesModelSubscription = {
  onDeleteIncomesModel?:  {
    __typename: "IncomesModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEducationModelSubscriptionVariables = {
  filter?: ModelSubscriptionEducationModelFilterInput | null,
};

export type OnCreateEducationModelSubscription = {
  onCreateEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationModelSubscriptionVariables = {
  filter?: ModelSubscriptionEducationModelFilterInput | null,
};

export type OnUpdateEducationModelSubscription = {
  onUpdateEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationModelSubscriptionVariables = {
  filter?: ModelSubscriptionEducationModelFilterInput | null,
};

export type OnDeleteEducationModelSubscription = {
  onDeleteEducationModel?:  {
    __typename: "EducationModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSeniorityModelSubscriptionVariables = {
  filter?: ModelSubscriptionSeniorityModelFilterInput | null,
};

export type OnCreateSeniorityModelSubscription = {
  onCreateSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSeniorityModelSubscriptionVariables = {
  filter?: ModelSubscriptionSeniorityModelFilterInput | null,
};

export type OnUpdateSeniorityModelSubscription = {
  onUpdateSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSeniorityModelSubscriptionVariables = {
  filter?: ModelSubscriptionSeniorityModelFilterInput | null,
};

export type OnDeleteSeniorityModelSubscription = {
  onDeleteSeniorityModel?:  {
    __typename: "SeniorityModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMembershipModelSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipModelFilterInput | null,
};

export type OnCreateMembershipModelSubscription = {
  onCreateMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembershipModelSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipModelFilterInput | null,
};

export type OnUpdateMembershipModelSubscription = {
  onUpdateMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembershipModelSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipModelFilterInput | null,
};

export type OnDeleteMembershipModelSubscription = {
  onDeleteMembershipModel?:  {
    __typename: "MembershipModel",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEconomicSimulatorSubscriptionVariables = {
  filter?: ModelSubscriptionEconomicSimulatorFilterInput | null,
};

export type OnCreateEconomicSimulatorSubscription = {
  onCreateEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type OnUpdateEconomicSimulatorSubscriptionVariables = {
  filter?: ModelSubscriptionEconomicSimulatorFilterInput | null,
};

export type OnUpdateEconomicSimulatorSubscription = {
  onUpdateEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type OnDeleteEconomicSimulatorSubscriptionVariables = {
  filter?: ModelSubscriptionEconomicSimulatorFilterInput | null,
};

export type OnDeleteEconomicSimulatorSubscription = {
  onDeleteEconomicSimulator?:  {
    __typename: "EconomicSimulator",
    id: string,
    IncomesData: string,
    OutcomesData: string,
    IncomesRel?:  {
      __typename: "IncomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    OutcomesRel?:  {
      __typename: "OutcomesModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    economicSimulatorIncomesRelId?: string | null,
    economicSimulatorOutcomesRelId?: string | null,
  } | null,
};

export type OnCreateSocialSimulatorSubscriptionVariables = {
  filter?: ModelSubscriptionSocialSimulatorFilterInput | null,
};

export type OnCreateSocialSimulatorSubscription = {
  onCreateSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};

export type OnUpdateSocialSimulatorSubscriptionVariables = {
  filter?: ModelSubscriptionSocialSimulatorFilterInput | null,
};

export type OnUpdateSocialSimulatorSubscription = {
  onUpdateSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};

export type OnDeleteSocialSimulatorSubscriptionVariables = {
  filter?: ModelSubscriptionSocialSimulatorFilterInput | null,
};

export type OnDeleteSocialSimulatorSubscription = {
  onDeleteSocialSimulator?:  {
    __typename: "SocialSimulator",
    id: string,
    MembershipData: string,
    SeniorityData: string,
    EducationData: string,
    MembershipRel:  {
      __typename: "MembershipModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    SeniorityRel:  {
      __typename: "SeniorityModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    EducationRel:  {
      __typename: "EducationModel",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    socialSimulatorMembershipRelId: string,
    socialSimulatorSeniorityRelId: string,
    socialSimulatorEducationRelId: string,
  } | null,
};
