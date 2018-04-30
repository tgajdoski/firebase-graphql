
const organization = `
input OrgProfileInput  {
  about : String
  name : String
}

type OrgProfile  {
  about : String
  name : String
}

input OrganizationInput {
  id: String!
  created_at : String
  members : String
  profile : OrgProfileInput
  slug : String
  streams : String
}

input OrganizationCreateInput {
  created_at : String
  members : String
  profile : OrgProfileInput
  slug : String
  streams : String
}

input OrganizationDeleteInput {
  id: String!
}
type Organization {
  id: String!
  created_at : String
  members : String
  profile : OrgProfile
  slug : String
  streams : String
}`;

module.exports = organization;
