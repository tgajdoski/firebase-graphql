
const group = `
input GroupInput {
  id: String!
  created_at : String
  created_by :String
  description : String
  members :String
  name : String
  oid : String
  updated_at : String
  updated_by : String
}

input GroupCreateInput {
  created_at : String
  created_by :String
  description : String
  members :String
  name : String
  oid : String
  updated_at : String
  updated_by : String
}

input GroupDeleteInput {
  id: String!
}
type Group {
  id: String!
  created_at : String
  created_by :String
  description : String
  members :String
  name : String
  oid : String
  updated_at : String
  updated_by : String
}`;

module.exports = group;
