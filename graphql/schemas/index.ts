import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Task {
    _id: ID!
    taskName: String!
    isDone: Boolean
    priority: Int!
    createdAt: String
    updatedAt: String
  }
  type Query {
    helloQuery: String
    getAllTasks: [Task]
    getDoneTasksLists: [Task]
  }

  type Mutation {
    sayHello(name: String!): String

    AddTask(isDone: Boolean, priority: Int!, taskName: String!): Task

    updateTask(
      id: ID!
      isDone: Boolean
      priority: Int!
      taskName: String!
    ): Task
  }
`;
