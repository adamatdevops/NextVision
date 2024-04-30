/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getExitPageModel = /* GraphQL */ `query GetExitPageModel($id: ID!) {
  getExitPageModel(id: $id) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExitPageModelQueryVariables,
  APITypes.GetExitPageModelQuery
>;
export const listExitPageModels = /* GraphQL */ `query ListExitPageModels(
  $filter: ModelExitPageModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listExitPageModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Description
      Date
      Time
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExitPageModelsQueryVariables,
  APITypes.ListExitPageModelsQuery
>;
export const getEntryPageModel = /* GraphQL */ `query GetEntryPageModel($id: ID!) {
  getEntryPageModel(id: $id) {
    id
    Description
    Date
    Time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEntryPageModelQueryVariables,
  APITypes.GetEntryPageModelQuery
>;
export const listEntryPageModels = /* GraphQL */ `query ListEntryPageModels(
  $filter: ModelEntryPageModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntryPageModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Description
      Date
      Time
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEntryPageModelsQueryVariables,
  APITypes.ListEntryPageModelsQuery
>;
export const getOutcomesModel = /* GraphQL */ `query GetOutcomesModel($id: ID!) {
  getOutcomesModel(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOutcomesModelQueryVariables,
  APITypes.GetOutcomesModelQuery
>;
export const listOutcomesModels = /* GraphQL */ `query ListOutcomesModels(
  $filter: ModelOutcomesModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listOutcomesModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOutcomesModelsQueryVariables,
  APITypes.ListOutcomesModelsQuery
>;
export const getIncomesModel = /* GraphQL */ `query GetIncomesModel($id: ID!) {
  getIncomesModel(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIncomesModelQueryVariables,
  APITypes.GetIncomesModelQuery
>;
export const listIncomesModels = /* GraphQL */ `query ListIncomesModels(
  $filter: ModelIncomesModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listIncomesModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIncomesModelsQueryVariables,
  APITypes.ListIncomesModelsQuery
>;
export const getEducationModel = /* GraphQL */ `query GetEducationModel($id: ID!) {
  getEducationModel(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEducationModelQueryVariables,
  APITypes.GetEducationModelQuery
>;
export const listEducationModels = /* GraphQL */ `query ListEducationModels(
  $filter: ModelEducationModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationModelsQueryVariables,
  APITypes.ListEducationModelsQuery
>;
export const getSeniorityModel = /* GraphQL */ `query GetSeniorityModel($id: ID!) {
  getSeniorityModel(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSeniorityModelQueryVariables,
  APITypes.GetSeniorityModelQuery
>;
export const listSeniorityModels = /* GraphQL */ `query ListSeniorityModels(
  $filter: ModelSeniorityModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeniorityModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSeniorityModelsQueryVariables,
  APITypes.ListSeniorityModelsQuery
>;
export const getMembershipModel = /* GraphQL */ `query GetMembershipModel($id: ID!) {
  getMembershipModel(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMembershipModelQueryVariables,
  APITypes.GetMembershipModelQuery
>;
export const listMembershipModels = /* GraphQL */ `query ListMembershipModels(
  $filter: ModelMembershipModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembershipModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembershipModelsQueryVariables,
  APITypes.ListMembershipModelsQuery
>;
export const getEconomicSimulator = /* GraphQL */ `query GetEconomicSimulator($id: ID!) {
  getEconomicSimulator(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEconomicSimulatorQueryVariables,
  APITypes.GetEconomicSimulatorQuery
>;
export const listEconomicSimulators = /* GraphQL */ `query ListEconomicSimulators(
  $filter: ModelEconomicSimulatorFilterInput
  $limit: Int
  $nextToken: String
) {
  listEconomicSimulators(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEconomicSimulatorsQueryVariables,
  APITypes.ListEconomicSimulatorsQuery
>;
export const getSocialSimulator = /* GraphQL */ `query GetSocialSimulator($id: ID!) {
  getSocialSimulator(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSocialSimulatorQueryVariables,
  APITypes.GetSocialSimulatorQuery
>;
export const listSocialSimulators = /* GraphQL */ `query ListSocialSimulators(
  $filter: ModelSocialSimulatorFilterInput
  $limit: Int
  $nextToken: String
) {
  listSocialSimulators(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSocialSimulatorsQueryVariables,
  APITypes.ListSocialSimulatorsQuery
>;
