/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWashTeam = /* GraphQL */ `
  query GetWashTeam($id: ID!) {
    getWashTeam(id: $id) {
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
export const listWashTeams = /* GraphQL */ `
  query ListWashTeams(
    $filter: ModelWashTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWashTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        washer_id
        accumulated_order
        accumulated_sales
        completed_order_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order_id
        payment_method
        amount
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWasher = /* GraphQL */ `
  query GetWasher($id: ID!) {
    getWasher(id: $id) {
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
export const listWashers = /* GraphQL */ `
  query ListWashers(
    $filter: ModelWasherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWashers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWashOrder = /* GraphQL */ `
  query GetWashOrder($id: ID!) {
    getWashOrder(id: $id) {
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
export const listWashOrders = /* GraphQL */ `
  query ListWashOrders(
    $filter: ModelWashOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWashOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        phone_number
        balance
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
