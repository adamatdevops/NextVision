/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createExitPageModel = /* GraphQL */ `mutation CreateExitPageModel(
  $input: CreateExitPageModelInput!
  $condition: ModelExitPageModelConditionInput
) {
  createExitPageModel(input: $input, condition: $condition) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExitPageModelMutationVariables,
  APITypes.CreateExitPageModelMutation
>;
export const updateExitPageModel = /* GraphQL */ `mutation UpdateExitPageModel(
  $input: UpdateExitPageModelInput!
  $condition: ModelExitPageModelConditionInput
) {
  updateExitPageModel(input: $input, condition: $condition) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExitPageModelMutationVariables,
  APITypes.UpdateExitPageModelMutation
>;
export const deleteExitPageModel = /* GraphQL */ `mutation DeleteExitPageModel(
  $input: DeleteExitPageModelInput!
  $condition: ModelExitPageModelConditionInput
) {
  deleteExitPageModel(input: $input, condition: $condition) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExitPageModelMutationVariables,
  APITypes.DeleteExitPageModelMutation
>;
export const createEntryPageModel = /* GraphQL */ `mutation CreateEntryPageModel(
  $input: CreateEntryPageModelInput!
  $condition: ModelEntryPageModelConditionInput
) {
  createEntryPageModel(input: $input, condition: $condition) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEntryPageModelMutationVariables,
  APITypes.CreateEntryPageModelMutation
>;
export const updateEntryPageModel = /* GraphQL */ `mutation UpdateEntryPageModel(
  $input: UpdateEntryPageModelInput!
  $condition: ModelEntryPageModelConditionInput
) {
  updateEntryPageModel(input: $input, condition: $condition) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEntryPageModelMutationVariables,
  APITypes.UpdateEntryPageModelMutation
>;
export const deleteEntryPageModel = /* GraphQL */ `mutation DeleteEntryPageModel(
  $input: DeleteEntryPageModelInput!
  $condition: ModelEntryPageModelConditionInput
) {
  deleteEntryPageModel(input: $input, condition: $condition) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEntryPageModelMutationVariables,
  APITypes.DeleteEntryPageModelMutation
>;
export const createOutcomesModel = /* GraphQL */ `mutation CreateOutcomesModel(
  $input: CreateOutcomesModelInput!
  $condition: ModelOutcomesModelConditionInput
) {
  createOutcomesModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOutcomesModelMutationVariables,
  APITypes.CreateOutcomesModelMutation
>;
export const updateOutcomesModel = /* GraphQL */ `mutation UpdateOutcomesModel(
  $input: UpdateOutcomesModelInput!
  $condition: ModelOutcomesModelConditionInput
) {
  updateOutcomesModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOutcomesModelMutationVariables,
  APITypes.UpdateOutcomesModelMutation
>;
export const deleteOutcomesModel = /* GraphQL */ `mutation DeleteOutcomesModel(
  $input: DeleteOutcomesModelInput!
  $condition: ModelOutcomesModelConditionInput
) {
  deleteOutcomesModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOutcomesModelMutationVariables,
  APITypes.DeleteOutcomesModelMutation
>;
export const createIncomesModel = /* GraphQL */ `mutation CreateIncomesModel(
  $input: CreateIncomesModelInput!
  $condition: ModelIncomesModelConditionInput
) {
  createIncomesModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIncomesModelMutationVariables,
  APITypes.CreateIncomesModelMutation
>;
export const updateIncomesModel = /* GraphQL */ `mutation UpdateIncomesModel(
  $input: UpdateIncomesModelInput!
  $condition: ModelIncomesModelConditionInput
) {
  updateIncomesModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIncomesModelMutationVariables,
  APITypes.UpdateIncomesModelMutation
>;
export const deleteIncomesModel = /* GraphQL */ `mutation DeleteIncomesModel(
  $input: DeleteIncomesModelInput!
  $condition: ModelIncomesModelConditionInput
) {
  deleteIncomesModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIncomesModelMutationVariables,
  APITypes.DeleteIncomesModelMutation
>;
export const createEducationModel = /* GraphQL */ `mutation CreateEducationModel(
  $input: CreateEducationModelInput!
  $condition: ModelEducationModelConditionInput
) {
  createEducationModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEducationModelMutationVariables,
  APITypes.CreateEducationModelMutation
>;
export const updateEducationModel = /* GraphQL */ `mutation UpdateEducationModel(
  $input: UpdateEducationModelInput!
  $condition: ModelEducationModelConditionInput
) {
  updateEducationModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEducationModelMutationVariables,
  APITypes.UpdateEducationModelMutation
>;
export const deleteEducationModel = /* GraphQL */ `mutation DeleteEducationModel(
  $input: DeleteEducationModelInput!
  $condition: ModelEducationModelConditionInput
) {
  deleteEducationModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEducationModelMutationVariables,
  APITypes.DeleteEducationModelMutation
>;
export const createSeniorityModel = /* GraphQL */ `mutation CreateSeniorityModel(
  $input: CreateSeniorityModelInput!
  $condition: ModelSeniorityModelConditionInput
) {
  createSeniorityModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSeniorityModelMutationVariables,
  APITypes.CreateSeniorityModelMutation
>;
export const updateSeniorityModel = /* GraphQL */ `mutation UpdateSeniorityModel(
  $input: UpdateSeniorityModelInput!
  $condition: ModelSeniorityModelConditionInput
) {
  updateSeniorityModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSeniorityModelMutationVariables,
  APITypes.UpdateSeniorityModelMutation
>;
export const deleteSeniorityModel = /* GraphQL */ `mutation DeleteSeniorityModel(
  $input: DeleteSeniorityModelInput!
  $condition: ModelSeniorityModelConditionInput
) {
  deleteSeniorityModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSeniorityModelMutationVariables,
  APITypes.DeleteSeniorityModelMutation
>;
export const createMembershipModel = /* GraphQL */ `mutation CreateMembershipModel(
  $input: CreateMembershipModelInput!
  $condition: ModelMembershipModelConditionInput
) {
  createMembershipModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMembershipModelMutationVariables,
  APITypes.CreateMembershipModelMutation
>;
export const updateMembershipModel = /* GraphQL */ `mutation UpdateMembershipModel(
  $input: UpdateMembershipModelInput!
  $condition: ModelMembershipModelConditionInput
) {
  updateMembershipModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMembershipModelMutationVariables,
  APITypes.UpdateMembershipModelMutation
>;
export const deleteMembershipModel = /* GraphQL */ `mutation DeleteMembershipModel(
  $input: DeleteMembershipModelInput!
  $condition: ModelMembershipModelConditionInput
) {
  deleteMembershipModel(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMembershipModelMutationVariables,
  APITypes.DeleteMembershipModelMutation
>;
export const createEconomicSimulator = /* GraphQL */ `mutation CreateEconomicSimulator(
  $input: CreateEconomicSimulatorInput!
  $condition: ModelEconomicSimulatorConditionInput
) {
  createEconomicSimulator(input: $input, condition: $condition) {
    id
    IncomesData
    OutcomesData
    IncomesRel {
      id
      createdAt
      updatedAt
      __typename
    }
    OutcomesRel {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    economicSimulatorIncomesRelId
    economicSimulatorOutcomesRelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEconomicSimulatorMutationVariables,
  APITypes.CreateEconomicSimulatorMutation
>;
export const updateEconomicSimulator = /* GraphQL */ `mutation UpdateEconomicSimulator(
  $input: UpdateEconomicSimulatorInput!
  $condition: ModelEconomicSimulatorConditionInput
) {
  updateEconomicSimulator(input: $input, condition: $condition) {
    id
    IncomesData
    OutcomesData
    IncomesRel {
      id
      createdAt
      updatedAt
      __typename
    }
    OutcomesRel {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    economicSimulatorIncomesRelId
    economicSimulatorOutcomesRelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEconomicSimulatorMutationVariables,
  APITypes.UpdateEconomicSimulatorMutation
>;
export const deleteEconomicSimulator = /* GraphQL */ `mutation DeleteEconomicSimulator(
  $input: DeleteEconomicSimulatorInput!
  $condition: ModelEconomicSimulatorConditionInput
) {
  deleteEconomicSimulator(input: $input, condition: $condition) {
    id
    IncomesData
    OutcomesData
    IncomesRel {
      id
      createdAt
      updatedAt
      __typename
    }
    OutcomesRel {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    economicSimulatorIncomesRelId
    economicSimulatorOutcomesRelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEconomicSimulatorMutationVariables,
  APITypes.DeleteEconomicSimulatorMutation
>;
export const createSocialSimulator = /* GraphQL */ `mutation CreateSocialSimulator(
  $input: CreateSocialSimulatorInput!
  $condition: ModelSocialSimulatorConditionInput
) {
  createSocialSimulator(input: $input, condition: $condition) {
    id
    MembershipData
    SeniorityData
    EducationData
    MembershipRel {
      id
      createdAt
      updatedAt
      __typename
    }
    SeniorityRel {
      id
      createdAt
      updatedAt
      __typename
    }
    EducationRel {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    socialSimulatorMembershipRelId
    socialSimulatorSeniorityRelId
    socialSimulatorEducationRelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSocialSimulatorMutationVariables,
  APITypes.CreateSocialSimulatorMutation
>;
export const updateSocialSimulator = /* GraphQL */ `mutation UpdateSocialSimulator(
  $input: UpdateSocialSimulatorInput!
  $condition: ModelSocialSimulatorConditionInput
) {
  updateSocialSimulator(input: $input, condition: $condition) {
    id
    MembershipData
    SeniorityData
    EducationData
    MembershipRel {
      id
      createdAt
      updatedAt
      __typename
    }
    SeniorityRel {
      id
      createdAt
      updatedAt
      __typename
    }
    EducationRel {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    socialSimulatorMembershipRelId
    socialSimulatorSeniorityRelId
    socialSimulatorEducationRelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSocialSimulatorMutationVariables,
  APITypes.UpdateSocialSimulatorMutation
>;
export const deleteSocialSimulator = /* GraphQL */ `mutation DeleteSocialSimulator(
  $input: DeleteSocialSimulatorInput!
  $condition: ModelSocialSimulatorConditionInput
) {
  deleteSocialSimulator(input: $input, condition: $condition) {
    id
    MembershipData
    SeniorityData
    EducationData
    MembershipRel {
      id
      createdAt
      updatedAt
      __typename
    }
    SeniorityRel {
      id
      createdAt
      updatedAt
      __typename
    }
    EducationRel {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    socialSimulatorMembershipRelId
    socialSimulatorSeniorityRelId
    socialSimulatorEducationRelId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSocialSimulatorMutationVariables,
  APITypes.DeleteSocialSimulatorMutation
>;
