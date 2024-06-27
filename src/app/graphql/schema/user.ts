import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type User {
    email: String
    username: String
  }
  input createUser {
    email: String
    username: String
    password: String
  }
  input loginUserInput {
    username: String
    password: String
  }
  type Query {
    userInfo: String
  }
  type Mutation {
    createUser(input: createUser): User
    loginUser(input: loginUserInput): String
  }
`;
