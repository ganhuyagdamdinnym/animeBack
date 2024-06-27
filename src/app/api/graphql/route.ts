import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { UserTypeDefs } from "@/app/graphql/schema/user";
import { resolvers } from "@/app/graphql/resolvers";
import { connect } from "@/mongoDb";
connect();

const server = new ApolloServer({
  typeDefs: UserTypeDefs,
  resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
