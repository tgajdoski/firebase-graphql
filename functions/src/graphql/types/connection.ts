
const connection = `

input auth_input {
  firebase_id : String
  provider : String
}

type auth {
  firebase_id : String
  provider : String
}


input ProfileRawInput {
  emailAddress : String
  firstName : String
  headline :String
  id : String
  lastName : String
  pictureUrl :String
  publicProfileUrl :String
}

type ProfileRaw {
  emailAddress : String
  firstName : String
  headline :String
  id : String
  lastName : String
  pictureUrl :String
  publicProfileUrl :String
}

input Profile_input  {
  avatar : String
  bio :String
  email : String
  firstname : String
  id : String
  lastname :String
  name : String
  raw : ProfileRawInput
  url :String
}

type Profile  {
  avatar : String
  bio :String
  email : String
  firstname : String
  id : String
  lastname :String
  name : String
  raw : ProfileRaw
  url :String
}


input TimeInput {
  daypart : String
  hour : String
  minute : String
}

type Time {
  daypart : String
  hour : String
  minute : String
}



input Default_SchedulesInput {
  opt_in : Boolean
  timezone : String
  posting_times : [TimeInput]
}

type Default_Schedules {
  opt_in : Boolean
  timezone : String
  posting_times : [Time]
}

input SchedulesInput {
  default : Default_SchedulesInput

}

type Schedules {
  default : Default_Schedules
}

input ConnectionPubishSettingsInput {
  schedules : SchedulesInput
}

type  ConnectionPubishSettings {
  schedules : Schedules
}

input ConnectionPublishInput {
  settings : ConnectionPubishSettingsInput
}

type ConnectionPublish {
  settings : ConnectionPubishSettings
}


input ConnectionCreateInput {
  auth: auth_input
  created_at : String
  created_by : String
  ignore : Boolean
  name : String
  oid : String
  profile : Profile_input
  publish: ConnectionPublishInput
  source : String
  source_type : String
  status : String
  type : String
  uid : String
  version : String
}

input ConnectionInput {
  id: String
  auth: auth_input
  created_at : String
  created_by : String
  ignore : Boolean
  name : String
  oid : String
  profile : Profile_input
  publish: ConnectionPublishInput
  source : String
  source_type : String
  status : String
  type : String
  uid : String
  version : String
}

input ConnectionDeleteInput {
  id: String!
}

type Connection {
  id: String!
  auth: auth
  created_at : String
  created_by : String
  ignore : Boolean
  name : String
  oid : String
  profile : Profile
  publish: ConnectionPublish
  source : String
  source_type : String
  status : String
  type : String
  uid : String
  version : String
}`;

module.exports = connection;
