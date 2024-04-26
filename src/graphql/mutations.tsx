/* eslint-disable */
// this is an auto generated file. This will be overwritten

const CreateTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      description
    }
  }
`;

export default CreateTodo;