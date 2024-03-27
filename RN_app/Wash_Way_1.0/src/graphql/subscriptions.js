/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWashTeam = /* GraphQL */ `
  subscription OnCreateWashTeam($filter: ModelSubscriptionWashTeamFilterInput) {
    onCreateWashTeam(filter: $filter) {
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
export const onUpdateWashTeam = /* GraphQL */ `
  subscription OnUpdateWashTeam($filter: ModelSubscriptionWashTeamFilterInput) {
    onUpdateWashTeam(filter: $filter) {
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
export const onDeleteWashTeam = /* GraphQL */ `
  subscription OnDeleteWashTeam($filter: ModelSubscriptionWashTeamFilterInput) {
    onDeleteWashTeam(filter: $filter) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
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
export const onCreateWasher = /* GraphQL */ `
  subscription OnCreateWasher($filter: ModelSubscriptionWasherFilterInput) {
    onCreateWasher(filter: $filter) {
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
export const onUpdateWasher = /* GraphQL */ `
  subscription OnUpdateWasher($filter: ModelSubscriptionWasherFilterInput) {
    onUpdateWasher(filter: $filter) {
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
export const onDeleteWasher = /* GraphQL */ `
  subscription OnDeleteWasher($filter: ModelSubscriptionWasherFilterInput) {
    onDeleteWasher(filter: $filter) {
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
export const onCreateWashOrder = /* GraphQL */ `
  subscription OnCreateWashOrder(
    $filter: ModelSubscriptionWashOrderFilterInput
  ) {
    onCreateWashOrder(filter: $filter) {
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
export const onUpdateWashOrder = /* GraphQL */ `
  subscription OnUpdateWashOrder(
    $filter: ModelSubscriptionWashOrderFilterInput
  ) {
    onUpdateWashOrder(filter: $filter) {
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
export const onDeleteWashOrder = /* GraphQL */ `
  subscription OnDeleteWashOrder(
    $filter: ModelSubscriptionWashOrderFilterInput
  ) {
    onDeleteWashOrder(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
