
const device = `

input DeviceCreateInput {
  endpointId: String
}

input DeviceInput {
  id: String
  endpointId: String
}

input DeviceDeleteInput {
  id: String!
}
type Device {
  id: String!
  endpointId : String
}`;

module.exports = device;
