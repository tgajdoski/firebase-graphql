import * as graphqlTools from 'graphql-tools';
const resolvers = require('./resolvers/resolvers');

// import * as approval from './types/approval';
const approval = require('./types/approval');
const device = require('./types/device');
const connection = require('./types/connection');
const group = require('./types/group');
const organization = require('./types/organization');

import * as _ from 'lodash';


const Query = `
  type Query {
    approvals: [Approval]
    usrerapprovals(oid: String!, uid: String!, status: String): [Approval]
    approval(id: String!): Approval

    devices: [Device]
    device(id: String!): Device

    connections: [Connection]
    connection(id: String!): Connection

    groups: [Group]
    group(id: String!): Group

    organizations: [Organization]
    organization(id: String!): Organization
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

    createGroup(input: GroupCreateInput!): Group
    updateGroup(input: GroupInput): Group
    deleteGroup(input: GroupDeleteInput): Group

    createOrganization(input: OrganizationCreateInput!): Organization
    updateOrganization(input: OrganizationInput): Organization
    deleteOrganization(input: OrganizationDeleteInput):Organization

  }
`;


const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;


module.exports = graphqlTools.makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, approval, device, connection, group, organization],
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


