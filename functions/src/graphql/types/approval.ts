
const approval = `
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
}`;

module.exports = approval;
