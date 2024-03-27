/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWashTeam = /* GraphQL */ `
  mutation CreateWashTeam(
    $input: CreateWashTeamInput!
    $condition: ModelWashTeamConditionInput
  ) {
    createWashTeam(input: $input, condition: $condition) {
      id
      washer_id
      accumulated_order
      accumulated_sales
      completed_order_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWashTeam = /* GraphQL */ `
  mutation UpdateWashTeam(
    $input: UpdateWashTeamInput!
    $condition: ModelWashTeamConditionInput
  ) {
    updateWashTeam(input: $input, condition: $condition) {
      id
      washer_id
      accumulated_order
      accumulated_sales
      completed_order_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWashTeam = /* GraphQL */ `
  mutation DeleteWashTeam(
    $input: DeleteWashTeamInput!
    $condition: ModelWashTeamConditionInput
  ) {
    deleteWashTeam(input: $input, condition: $condition) {
      id
      washer_id
      accumulated_order
      accumulated_sales
      completed_order_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      order_id
      payment_method
      amount
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      order_id
      payment_method
      amount
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      order_id
      payment_method
      amount
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWasher = /* GraphQL */ `
  mutation CreateWasher(
    $input: CreateWasherInput!
    $condition: ModelWasherConditionInput
  ) {
    createWasher(input: $input, condition: $condition) {
      id
      name
      phone
      email
      password
      payrollAccount {
        Washer_id
        account_number
        bank
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWasher = /* GraphQL */ `
  mutation UpdateWasher(
    $input: UpdateWasherInput!
    $condition: ModelWasherConditionInput
  ) {
    updateWasher(input: $input, condition: $condition) {
      id
      name
      phone
      email
      password
      payrollAccount {
        Washer_id
        account_number
        bank
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWasher = /* GraphQL */ `
  mutation DeleteWasher(
    $input: DeleteWasherInput!
    $condition: ModelWasherConditionInput
  ) {
    deleteWasher(input: $input, condition: $condition) {
      id
      name
      phone
      email
      password
      payrollAccount {
        Washer_id
        account_number
        bank
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWashOrder = /* GraphQL */ `
  mutation CreateWashOrder(
    $input: CreateWashOrderInput!
    $condition: ModelWashOrderConditionInput
  ) {
    createWashOrder(input: $input, condition: $condition) {
      id
      user_id
      wash_team_id
      status
      location
      order_placed_time
      order_start_time
      order_end_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWashOrder = /* GraphQL */ `
  mutation UpdateWashOrder(
    $input: UpdateWashOrderInput!
    $condition: ModelWashOrderConditionInput
  ) {
    updateWashOrder(input: $input, condition: $condition) {
      id
      user_id
      wash_team_id
      status
      location
      order_placed_time
      order_start_time
      order_end_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWashOrder = /* GraphQL */ `
  mutation DeleteWashOrder(
    $input: DeleteWashOrderInput!
    $condition: ModelWashOrderConditionInput
  ) {
    deleteWashOrder(input: $input, condition: $condition) {
      id
      user_id
      wash_team_id
      status
      location
      order_placed_time
      order_start_time
      order_end_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      phone_number
      balance
      card {
        cardType
        cardNo
        cardExpiredDate
        cardCVV
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      phone_number
      balance
      card {
        cardType
        cardNo
        cardExpiredDate
        cardCVV
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      phone_number
      balance
      card {
        cardType
        cardNo
        cardExpiredDate
        cardCVV
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
