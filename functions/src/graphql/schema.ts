import * as graphqlTools from 'graphql-tools';
const resolvers = require('./resolvers');

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

const schema = `
type Settings {
  opt_in : Boolean,
  timezone : String
}
type Publish {
  settings : Settings 
  status : String,
  updated_at : String
}

input ApprovalCreateInput {
  name: String
}

input ApprovalInput {
  id: String
  category : String
  connection_id : String
  content : String
  created_at : Int,
  created_by : String
  edited_by : String
  image : String
  oid : String
  original_content : String
  source : String
  status : String
  uid : String
  updated_at : String
  updated_by : String
}
input ApprovalDeleteInput {
  id: String!
}
type Approval {
  id: String!
  category : String
  connection_id : String
  content : String
  created_at : Int,
  created_by : String
  edited_by : String
  image : String
  oid : String
  original_content : String
  publish :  Publish 
  publish_at : String
  publish_at_str : String
  publish_date : String
  publish_status : String
  source : String
  status : String
  uid : String
  updated_at : String
  updated_by : String
}
type Query {
  approvals: [Approval]
  approval(id: String!): Approval
}
type Mutation {
  createApproval(input: ApprovalCreateInput!): Approval
  updateApproval(input: ApprovalInput): Approval
  deleteApproval(input: ApprovalDeleteInput): Approval
}
`;


module.exports = graphqlTools.makeExecutableSchema({
  typeDefs: schema,
  resolvers
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



 