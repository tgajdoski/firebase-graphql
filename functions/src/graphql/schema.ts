import * as graphqlTools from 'graphql-tools';
const resolvers = require('./resolvers/resolvers');

// import * as approval from './types/approval';
const approval = require('./types/approval');
const device = require('./types/device');
const connection = require('./types/connection');

import * as _ from 'lodash';


const Query = `
  type Query {
    approvals: [Approval]
    approval(id: String!): Approval

    devices: [Device]
    device(id: String!): Device

    connections: [Connection]
    connection(id: String!): Connection
  }
`;

const Mutation = `
  type Mutation {
    createApproval(input: ApprovalCreateInput!): Approval
    updateApproval(input: ApprovalInput): Approval
    deleteApproval(input: ApprovalDeleteInput): Approval

    createDevice(input: DeviceCreateInput!): Device
    updateDevice(input: DeviceInput): Device
    deleteDevice(input: DeviceDeleteInput): Device

    createConnection(input: ConnectionCreateInput!): Connection
    updateConnection(input: ConnectionInput): Connection
    deleteConnection(input: ConnectionDeleteInput): Connection

  }
`;


const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;


module.exports = graphqlTools.makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, approval, device, connection],
  resolvers: resolvers
});



// // QUERY
// {
//   approvals{
//     id
//     content
//   }
// }
// {
//   approval (id: "KlxgFe7qONXDD-6nkPz") {
//     id
//     content
//   }
// }



// mutation deleteApproval ($input: ApprovalDeleteInput!) {
//   deleteApproval(input: $input ){
//      id
//      content
//    } 
//  }
//  variable 
//  {
//   "input": {
//    "id": "-Klsxxr081pqT7cNyPJd"
//  }
// }



 

// mutation createDevice ($input: DeviceCreateInput!) {
//   createDevice(input: $input ){
//      id
//      endpointId
//    } 
//  }
// variable 
// {
//   "input": {
//    "endpointId": "ALALALALALAL"
//  }
// }






// import {
//   graphql,
//   GraphQLString,
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLBoolean
// } from 'graphql';


// const SettingsType = new GraphQLObjectType({
//   name: 'settings',
//   fields: {
//     opt_in: { type: GraphQLBoolean },
//     timezone: { type: GraphQLString }
//   }
// });

// const PublishType = new GraphQLObjectType({
//   name: 'publish',
//   fields: {
//     settings :{ type: SettingsType },
//     status: { type: GraphQLString },
//     updated_at: { type: GraphQLString }
//   }
// });


