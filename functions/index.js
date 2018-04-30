!function(n,t){for(var e in t)n[e]=t[e]}(this,function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e.w={},e(e.s=14)}([function(n,t){n.exports=require("firebase-functions")},function(n,t){n.exports="\ninput OrgProfileInput  {\n  about : String\n  name : String\n}\n\ntype OrgProfile  {\n  about : String\n  name : String\n}\n\ninput OrganizationInput {\n  id: String!\n  created_at : String\n  members : String\n  profile : OrgProfileInput\n  slug : String\n  streams : String\n}\n\ninput OrganizationCreateInput {\n  created_at : String\n  members : String\n  profile : OrgProfileInput\n  slug : String\n  streams : String\n}\n\ninput OrganizationDeleteInput {\n  id: String!\n}\ntype Organization {\n  id: String!\n  created_at : String\n  members : String\n  profile : OrgProfile\n  slug : String\n  streams : String\n}"},function(n,t){n.exports="\ninput GroupInput {\n  id: String!\n  created_at : String\n  created_by :String\n  description : String\n  members :String\n  name : String\n  oid : String\n  updated_at : String\n  updated_by : String\n}\n\ninput GroupCreateInput {\n  created_at : String\n  created_by :String\n  description : String\n  members :String\n  name : String\n  oid : String\n  updated_at : String\n  updated_by : String\n}\n\ninput GroupDeleteInput {\n  id: String!\n}\ntype Group {\n  id: String!\n  created_at : String\n  created_by :String\n  description : String\n  members :String\n  name : String\n  oid : String\n  updated_at : String\n  updated_by : String\n}"},function(n,t){n.exports="\n\ninput auth_input {\n  firebase_id : String\n  provider : String\n}\n\ntype auth {\n  firebase_id : String\n  provider : String\n}\n\n\ninput ProfileRawInput {\n  emailAddress : String\n  firstName : String\n  headline :String\n  id : String\n  lastName : String\n  pictureUrl :String\n  publicProfileUrl :String\n}\n\ntype ProfileRaw {\n  emailAddress : String\n  firstName : String\n  headline :String\n  id : String\n  lastName : String\n  pictureUrl :String\n  publicProfileUrl :String\n}\n\ninput Profile_input  {\n  avatar : String\n  bio :String\n  email : String\n  firstname : String\n  id : String\n  lastname :String\n  name : String\n  raw : ProfileRawInput\n  url :String\n}\n\ntype Profile  {\n  avatar : String\n  bio :String\n  email : String\n  firstname : String\n  id : String\n  lastname :String\n  name : String\n  raw : ProfileRaw\n  url :String\n}\n\n\ninput TimeInput {\n  daypart : String\n  hour : String\n  minute : String\n}\n\ntype Time {\n  daypart : String\n  hour : String\n  minute : String\n}\n\n\n\ninput Default_SchedulesInput {\n  opt_in : Boolean\n  timezone : String\n  posting_times : [TimeInput]\n}\n\ntype Default_Schedules {\n  opt_in : Boolean\n  timezone : String\n  posting_times : [Time]\n}\n\ninput SchedulesInput {\n  default : Default_SchedulesInput\n\n}\n\ntype Schedules {\n  default : Default_Schedules\n}\n\ninput ConnectionPubishSettingsInput {\n  schedules : SchedulesInput\n}\n\ntype  ConnectionPubishSettings {\n  schedules : Schedules\n}\n\ninput ConnectionPublishInput {\n  settings : ConnectionPubishSettingsInput\n}\n\ntype ConnectionPublish {\n  settings : ConnectionPubishSettings\n}\n\n\ninput ConnectionCreateInput {\n  auth: auth_input\n  created_at : String\n  created_by : String\n  ignore : Boolean\n  name : String\n  oid : String\n  profile : Profile_input\n  publish: ConnectionPublishInput\n  source : String\n  source_type : String\n  status : String\n  type : String\n  uid : String\n  version : String\n}\n\ninput ConnectionInput {\n  id: String\n  auth: auth_input\n  created_at : String\n  created_by : String\n  ignore : Boolean\n  name : String\n  oid : String\n  profile : Profile_input\n  publish: ConnectionPublishInput\n  source : String\n  source_type : String\n  status : String\n  type : String\n  uid : String\n  version : String\n}\n\ninput ConnectionDeleteInput {\n  id: String!\n}\n\ntype Connection {\n  id: String!\n  auth: auth\n  created_at : String\n  created_by : String\n  ignore : Boolean\n  name : String\n  oid : String\n  profile : Profile\n  publish: ConnectionPublish\n  source : String\n  source_type : String\n  status : String\n  type : String\n  uid : String\n  version : String\n}"},function(n,t){n.exports="\n\ninput DeviceCreateInput {\n  endpointId: String\n}\n\ninput DeviceInput {\n  id: String\n  endpointId: String\n}\n\ninput DeviceDeleteInput {\n  id: String!\n}\ntype Device {\n  id: String!\n  endpointId : String\n}"},function(n,t){n.exports="\ntype Settings {\n  opt_in : Boolean,\n  timezone : String\n}\ntype Publish {\n  settings : Settings \n  status : String,\n  updated_at : String\n}\n\ninput ApprovalCreateInput {\n  category : String\n  connection_id : String\n  content : String\n  created_at : Int,\n  created_by : String\n  edited_by : String\n  image : String\n  oid : String\n  original_content : String\n  source : String\n  status : String\n  uid : String\n  updated_at : String\n  updated_by : String\n}\n\ninput ApprovalInput {\n  id: String\n  category : String\n  connection_id : String\n  content : String\n  created_at : Int,\n  created_by : String\n  edited_by : String\n  image : String\n  oid : String\n  original_content : String\n  source : String\n  status : String\n  uid : String\n  updated_at : String\n  updated_by : String\n}\ninput ApprovalDeleteInput {\n  id: String!\n}\ntype Approval {\n  id: String!\n  category : String\n  connection_id : String\n  content : String\n  created_at : Int,\n  created_by : String\n  edited_by : String\n  image : String\n  oid : String\n  original_content : String\n  publish :  Publish \n  publish_at : String\n  publish_at_str : String\n  publish_date : String\n  publish_status : String\n  source : String\n  status : String\n  uid : String\n  updated_at : String\n  updated_by : String\n}"},function(n,t){n.exports=require("firebase-admin")},function(n,t,e){const i=e(6);e(0);i.initializeApp();const r=i.database().ref("approvals"),o=i.database().ref("devices"),a=i.database().ref("connections"),u=i.database().ref("groups"),s=i.database().ref("organizations");n.exports={Query:{approvals:()=>r.once("value").then(n=>{const t=n.val();return null===t?[]:Object.keys(t).map(n=>Object.assign({id:n},t[n]))}),approval:(n,{id:t})=>i.database().ref(`approvals/${t}`).once("value").then(n=>{const e=n.val();return Object.assign({id:t},e)}),devices:()=>o.once("value").then(n=>{const t=n.val();return null===t?[]:Object.keys(t).map(n=>Object.assign({id:n},t[n]))}),device:(n,{id:t})=>i.database().ref(`devices/${t}`).once("value").then(n=>{const e=n.val();return Object.assign({id:t},e)}),connections:()=>a.once("value").then(n=>{const t=n.val();return null===t?[]:Object.keys(t).map(n=>Object.assign({id:n},t[n]))}),connection:(n,{id:t})=>i.database().ref(`connections/${t}`).once("value").then(n=>{const e=n.val();return Object.assign({id:t},e)}),groups:()=>u.once("value").then(n=>{const t=n.val();return null===t?[]:Object.keys(t).map(n=>Object.assign({id:n},t[n]))}),group:(n,{id:t})=>i.database().ref(`groups/${t}`).once("value").then(n=>{const e=n.val();return Object.assign({id:t},e)}),organizations:()=>s.once("value").then(n=>{const t=n.val();return null===t?[]:Object.keys(t).map(n=>Object.assign({id:n},t[n]))}),organization:(n,{id:t})=>i.database().ref(`oraganizations/${t}`).once("value").then(n=>{const e=n.val();return Object.assign({id:t},e)})},Mutation:{createApproval:(n,{input:t})=>new Promise(n=>{const e=r.push(t,()=>{n(Object.assign({id:e.key},t))})}),updateApproval(n,{input:t}){const e=r.child(t.id);return e.once("value").then(n=>{const t=n.val();if(null===t)throw new Error("404");return t}).then(n=>{const i=Object.assign(n,t);return delete i.id,e.set(i).then(()=>Object.assign({id:t.id},i))})},deleteApproval(n,{input:t}){const e=r.child(t.id);return e.once("value").then(n=>{const e=n.val();if(null===e)throw new Error("404");return Object.assign({id:t.id},e)}).then(n=>e.remove().then(()=>n))},createDevice:(n,{input:t})=>new Promise(n=>{const e=o.push(t,()=>{n(Object.assign({id:e.key},t))})}),updateDevice(n,{input:t}){const e=o.child(t.id);return e.once("value").then(n=>{const t=n.val();if(null===t)throw new Error("404");return t}).then(n=>{const i=Object.assign(n,t);return delete i.id,e.set(i).then(()=>Object.assign({id:t.id},i))})},deleteDevice(n,{input:t}){const e=o.child(t.id);return e.once("value").then(n=>{const e=n.val();if(null===e)throw new Error("404");return Object.assign({id:t.id},e)}).then(n=>e.remove().then(()=>n))},createConnection:(n,{input:t})=>new Promise(n=>{const e=a.push(t,()=>{n(Object.assign({id:e.key},t))})}),updateConnection(n,{input:t}){const e=a.child(t.id);return e.once("value").then(n=>{const t=n.val();if(null===t)throw new Error("404");return t}).then(n=>{const i=Object.assign(n,t);return delete i.id,e.set(i).then(()=>Object.assign({id:t.id},i))})},deleteConnection(n,{input:t}){const e=a.child(t.id);return e.once("value").then(n=>{const e=n.val();if(null===e)throw new Error("404");return Object.assign({id:t.id},e)}).then(n=>e.remove().then(()=>n))},createGroup:(n,{input:t})=>new Promise(n=>{const e=u.push(t,()=>{n(Object.assign({id:e.key},t))})}),updateGroup(n,{input:t}){const e=u.child(t.id);return e.once("value").then(n=>{const t=n.val();if(null===t)throw new Error("404");return t}).then(n=>{const i=Object.assign(n,t);return delete i.id,e.set(i).then(()=>Object.assign({id:t.id},i))})},deleteGroup(n,{input:t}){const e=u.child(t.id);return e.once("value").then(n=>{const e=n.val();if(null===e)throw new Error("404");return Object.assign({id:t.id},e)}).then(n=>e.remove().then(()=>group))},createOrganization:(n,{input:t})=>new Promise(n=>{const e=s.push(t,()=>{n(Object.assign({id:e.key},t))})}),updateOrganization(n,{input:t}){const e=s.child(t.id);return e.once("value").then(n=>{const t=n.val();if(null===t)throw new Error("404");return t}).then(n=>{const i=Object.assign(n,t);return delete i.id,e.set(i).then(()=>Object.assign({id:t.id},i))})},deleteOrganization(n,{input:t}){const e=u.child(t.id);return e.once("value").then(n=>{const e=n.val();if(null===e)throw new Error("404");return Object.assign({id:t.id},e)}).then(n=>e.remove().then(()=>n))}}}},function(n,t){n.exports=require("graphql-tools")},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=e(8),r=e(7),o=e(5),a=e(4),u=e(3),s=e(2),p=e(1);n.exports=i.makeExecutableSchema({typeDefs:["\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n","\n  type Query {\n    approvals: [Approval]\n    approval(id: String!): Approval\n\n    devices: [Device]\n    device(id: String!): Device\n\n    connections: [Connection]\n    connection(id: String!): Connection\n\n    groups: [Group]\n    group(id: String!): Group\n\n    organizations: [Organization]\n    organization(id: String!): Organization\n  }\n","\n  type Mutation {\n    createApproval(input: ApprovalCreateInput!): Approval\n    updateApproval(input: ApprovalInput): Approval\n    deleteApproval(input: ApprovalDeleteInput): Approval\n\n    createDevice(input: DeviceCreateInput!): Device\n    updateDevice(input: DeviceInput): Device\n    deleteDevice(input: DeviceDeleteInput): Device\n\n    createConnection(input: ConnectionCreateInput!): Connection\n    updateConnection(input: ConnectionInput): Connection\n    deleteConnection(input: ConnectionDeleteInput): Connection\n\n    createGroup(input: GroupCreateInput!): Group\n    updateGroup(input: GroupInput): Group\n    deleteGroup(input: GroupDeleteInput): Group\n\n    createOrganization(input: OrganizationCreateInput!): Organization\n    updateOrganization(input: OrganizationInput): Organization\n    deleteOrganization(input: OrganizationDeleteInput):Organization\n\n  }\n",o,a,u,s,p],resolvers:r})},function(n,t){n.exports=require("graphql/utilities/schemaPrinter")},function(n,t){n.exports=require("apollo-server-express")},function(n,t){n.exports=require("cors")},function(n,t){n.exports=require("express")},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=e(13),r=e(12),o=e(0),a=e(11),u=e(10),s=e(9),p=i();p.use(r()),p.options("*",r()),p.use((n,t,e)=>(t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),e())),p.use("/graphql",a.graphqlExpress({schema:s})),p.use("/graphiql",a.graphiqlExpress({endpointURL:"/api/graphql"})),p.use("/schema",(n,t)=>{t.set("Content-Type","text/plain"),t.send(u.printSchema(s))}),t.api=o.https.onRequest(p)}]));