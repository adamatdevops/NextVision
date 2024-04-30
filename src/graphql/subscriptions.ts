/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExitPageModel = /* GraphQL */ `subscription OnCreateExitPageModel(
  $filter: ModelSubscriptionExitPageModelFilterInput
) {
  onCreateExitPageModel(filter: $filter) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExitPageModelSubscriptionVariables,
  APITypes.OnCreateExitPageModelSubscription
>;
export const onUpdateExitPageModel = /* GraphQL */ `subscription OnUpdateExitPageModel(
  $filter: ModelSubscriptionExitPageModelFilterInput
) {
  onUpdateExitPageModel(filter: $filter) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExitPageModelSubscriptionVariables,
  APITypes.OnUpdateExitPageModelSubscription
>;
export const onDeleteExitPageModel = /* GraphQL */ `subscription OnDeleteExitPageModel(
  $filter: ModelSubscriptionExitPageModelFilterInput
) {
  onDeleteExitPageModel(filter: $filter) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExitPageModelSubscriptionVariables,
  APITypes.OnDeleteExitPageModelSubscription
>;
export const onCreateEntryPageModel = /* GraphQL */ `subscription OnCreateEntryPageModel(
  $filter: ModelSubscriptionEntryPageModelFilterInput
) {
  onCreateEntryPageModel(filter: $filter) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEntryPageModelSubscriptionVariables,
  APITypes.OnCreateEntryPageModelSubscription
>;
export const onUpdateEntryPageModel = /* GraphQL */ `subscription OnUpdateEntryPageModel(
  $filter: ModelSubscriptionEntryPageModelFilterInput
) {
  onUpdateEntryPageModel(filter: $filter) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEntryPageModelSubscriptionVariables,
  APITypes.OnUpdateEntryPageModelSubscription
>;
export const onDeleteEntryPageModel = /* GraphQL */ `subscription OnDeleteEntryPageModel(
  $filter: ModelSubscriptionEntryPageModelFilterInput
) {
  onDeleteEntryPageModel(filter: $filter) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEntryPageModelSubscriptionVariables,
  APITypes.OnDeleteEntryPageModelSubscription
>;
export const onCreateOutcomesModel = /* GraphQL */ `subscription OnCreateOutcomesModel(
  $filter: ModelSubscriptionOutcomesModelFilterInput
) {
  onCreateOutcomesModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOutcomesModelSubscriptionVariables,
  APITypes.OnCreateOutcomesModelSubscription
>;
export const onUpdateOutcomesModel = /* GraphQL */ `subscription OnUpdateOutcomesModel(
  $filter: ModelSubscriptionOutcomesModelFilterInput
) {
  onUpdateOutcomesModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOutcomesModelSubscriptionVariables,
  APITypes.OnUpdateOutcomesModelSubscription
>;
export const onDeleteOutcomesModel = /* GraphQL */ `subscription OnDeleteOutcomesModel(
  $filter: ModelSubscriptionOutcomesModelFilterInput
) {
  onDeleteOutcomesModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOutcomesModelSubscriptionVariables,
  APITypes.OnDeleteOutcomesModelSubscription
>;
export const onCreateIncomesModel = /* GraphQL */ `subscription OnCreateIncomesModel(
  $filter: ModelSubscriptionIncomesModelFilterInput
) {
  onCreateIncomesModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIncomesModelSubscriptionVariables,
  APITypes.OnCreateIncomesModelSubscription
>;
export const onUpdateIncomesModel = /* GraphQL */ `subscription OnUpdateIncomesModel(
  $filter: ModelSubscriptionIncomesModelFilterInput
) {
  onUpdateIncomesModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIncomesModelSubscriptionVariables,
  APITypes.OnUpdateIncomesModelSubscription
>;
export const onDeleteIncomesModel = /* GraphQL */ `subscription OnDeleteIncomesModel(
  $filter: ModelSubscriptionIncomesModelFilterInput
) {
  onDeleteIncomesModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIncomesModelSubscriptionVariables,
  APITypes.OnDeleteIncomesModelSubscription
>;
export const onCreateEducationModel = /* GraphQL */ `subscription OnCreateEducationModel(
  $filter: ModelSubscriptionEducationModelFilterInput
) {
  onCreateEducationModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationModelSubscriptionVariables,
  APITypes.OnCreateEducationModelSubscription
>;
export const onUpdateEducationModel = /* GraphQL */ `subscription OnUpdateEducationModel(
  $filter: ModelSubscriptionEducationModelFilterInput
) {
  onUpdateEducationModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationModelSubscriptionVariables,
  APITypes.OnUpdateEducationModelSubscription
>;
export const onDeleteEducationModel = /* GraphQL */ `subscription OnDeleteEducationModel(
  $filter: ModelSubscriptionEducationModelFilterInput
) {
  onDeleteEducationModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationModelSubscriptionVariables,
  APITypes.OnDeleteEducationModelSubscription
>;
export const onCreateSeniorityModel = /* GraphQL */ `subscription OnCreateSeniorityModel(
  $filter: ModelSubscriptionSeniorityModelFilterInput
) {
  onCreateSeniorityModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSeniorityModelSubscriptionVariables,
  APITypes.OnCreateSeniorityModelSubscription
>;
export const onUpdateSeniorityModel = /* GraphQL */ `subscription OnUpdateSeniorityModel(
  $filter: ModelSubscriptionSeniorityModelFilterInput
) {
  onUpdateSeniorityModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSeniorityModelSubscriptionVariables,
  APITypes.OnUpdateSeniorityModelSubscription
>;
export const onDeleteSeniorityModel = /* GraphQL */ `subscription OnDeleteSeniorityModel(
  $filter: ModelSubscriptionSeniorityModelFilterInput
) {
  onDeleteSeniorityModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSeniorityModelSubscriptionVariables,
  APITypes.OnDeleteSeniorityModelSubscription
>;
export const onCreateMembershipModel = /* GraphQL */ `subscription OnCreateMembershipModel(
  $filter: ModelSubscriptionMembershipModelFilterInput
) {
  onCreateMembershipModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMembershipModelSubscriptionVariables,
  APITypes.OnCreateMembershipModelSubscription
>;
export const onUpdateMembershipModel = /* GraphQL */ `subscription OnUpdateMembershipModel(
  $filter: ModelSubscriptionMembershipModelFilterInput
) {
  onUpdateMembershipModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMembershipModelSubscriptionVariables,
  APITypes.OnUpdateMembershipModelSubscription
>;
export const onDeleteMembershipModel = /* GraphQL */ `subscription OnDeleteMembershipModel(
  $filter: ModelSubscriptionMembershipModelFilterInput
) {
  onDeleteMembershipModel(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMembershipModelSubscriptionVariables,
  APITypes.OnDeleteMembershipModelSubscription
>;
export const onCreateEconomicSimulator = /* GraphQL */ `subscription OnCreateEconomicSimulator(
  $filter: ModelSubscriptionEconomicSimulatorFilterInput
) {
  onCreateEconomicSimulator(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEconomicSimulatorSubscriptionVariables,
  APITypes.OnCreateEconomicSimulatorSubscription
>;
export const onUpdateEconomicSimulator = /* GraphQL */ `subscription OnUpdateEconomicSimulator(
  $filter: ModelSubscriptionEconomicSimulatorFilterInput
) {
  onUpdateEconomicSimulator(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEconomicSimulatorSubscriptionVariables,
  APITypes.OnUpdateEconomicSimulatorSubscription
>;
export const onDeleteEconomicSimulator = /* GraphQL */ `subscription OnDeleteEconomicSimulator(
  $filter: ModelSubscriptionEconomicSimulatorFilterInput
) {
  onDeleteEconomicSimulator(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEconomicSimulatorSubscriptionVariables,
  APITypes.OnDeleteEconomicSimulatorSubscription
>;
export const onCreateSocialSimulator = /* GraphQL */ `subscription OnCreateSocialSimulator(
  $filter: ModelSubscriptionSocialSimulatorFilterInput
) {
  onCreateSocialSimulator(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSocialSimulatorSubscriptionVariables,
  APITypes.OnCreateSocialSimulatorSubscription
>;
export const onUpdateSocialSimulator = /* GraphQL */ `subscription OnUpdateSocialSimulator(
  $filter: ModelSubscriptionSocialSimulatorFilterInput
) {
  onUpdateSocialSimulator(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSocialSimulatorSubscriptionVariables,
  APITypes.OnUpdateSocialSimulatorSubscription
>;
export const onDeleteSocialSimulator = /* GraphQL */ `subscription OnDeleteSocialSimulator(
  $filter: ModelSubscriptionSocialSimulatorFilterInput
) {
  onDeleteSocialSimulator(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSocialSimulatorSubscriptionVariables,
  APITypes.OnDeleteSocialSimulatorSubscription
>;
