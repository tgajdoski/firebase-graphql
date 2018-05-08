const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

const approvalsRef = admin.database().ref('approvals');
const devicesRef = admin.database().ref('devices');
const connectionsRef = admin.database().ref('connections');
const groupsRef = admin.database().ref('groups');
const orgsRef = admin.database().ref('organizations');

// function verifyToken(idToken){
//   // if uid is null user is not authenticated
//   admin.auth().verifyIdToken(idToken)
//   .then(function(decodedToken) {
//     return decodedToken.uid;
//   }).catch(function(error) {
//     console.log(error)
//     return null;
//   });

// }


module.exports = {
  Query: {
    // approvals 
    async  approvals(_, { }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return approvalsRef.once('value')
        .then(snapshot => {
          const approvals = snapshot.val();
          if (approvals === null) return [];
          return Object.keys(approvals).map(o => Object.assign({ id: o }, approvals[o]));
        });
    },
    async approval(_, { id }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return admin.database().ref(`approvals/${id}`).once('value')
        .then(snapshot => {
          const approval = snapshot.val();
          return Object.assign({ id: id }, approval)
          // console.log('approval' , approval);
        });
    },
    // devices
    async devices(_, { }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return devicesRef.once('value')
        .then(snapshot => {
          const devices = snapshot.val();
          if (devices === null) return [];
          return Object.keys(devices).map(o => Object.assign({ id: o }, devices[o]));
        });
    },
    async device(_, { id }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return admin.database().ref(`devices/${id}`).once('value')
        .then(snapshot => {
          const device = snapshot.val();
          return Object.assign({ id: id }, device)
          // console.log('approval' , approval);
        });
    },

    // connection
    async  connections(_, { }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return connectionsRef.once('value')
        .then(snapshot => {
          const connections = snapshot.val();
          if (connections === null) return [];
          return Object.keys(connections).map(o => Object.assign({ id: o }, connections[o]));
        });
    },
    async connection(_, { id }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return admin.database().ref(`connections/${id}`).once('value')
        .then(snapshot => {
          const connection = snapshot.val();
          return Object.assign({ id: id }, connection)
          // console.log('approval' , approval);
        });
    },

    // group
    async  groups(_, { }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return groupsRef.once('value')
        .then(snapshot => {
          const groups = snapshot.val();
          if (groups === null) return [];
          return Object.keys(groups).map(o => Object.assign({ id: o }, groups[o]));
        });
    },
    async group(_, { id }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return admin.database().ref(`groups/${id}`).once('value')
        .then(snapshot => {
          const group = snapshot.val();
          return Object.assign({ id: id }, group)
          // console.log('approval' , approval);
        });
    },

    // group
   async organizations(_, { }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return orgsRef.once('value')
        .then(snapshot => {
          const orgs = snapshot.val();
          if (orgs === null) return [];
          return Object.keys(orgs).map(o => Object.assign({ id: o }, orgs[o]));
        });
    },
    async organization(_, { id }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return admin.database().ref(`oraganizations/${id}`).once('value')
        .then(snapshot => {
          const org = snapshot.val();
          return Object.assign({ id: id }, org)
          // console.log('approval' , approval);
        });
    },


  },
  Mutation: {
    // approvals
    async createApproval(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return (
        new Promise((resolve) => {
          const approval = approvalsRef.push(input, () => {
            resolve(Object.assign({ id: approval.key }, input)
            );
          });
        })
      );
    },
    async updateApproval(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const approvalRef = approvalsRef.child(input.id);
      return approvalRef.once('value')
        .then(snapshot => {
          const approval = snapshot.val();
          if (approval === null) throw new Error('404');
          return approval;
        })
        .then((approval) => {
          const update = Object.assign(approval, input);
          delete update.id;
          return approvalRef.set(update).then(() => (Object.assign({ id: input.id }, update)));
        });
    },
    async deleteApproval(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const approvalRef = approvalsRef.child(input.id);
      return approvalRef.once('value')
        .then((snapshot) => {
          const approval = snapshot.val();
          if (approval === null) throw new Error('404');
          return Object.assign({ id: input.id }, approval);
        })
        .then(approval => approvalRef.remove().then(() => (approval)));
    },


    // devices
    async createDevice(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return (
        new Promise((resolve) => {
          const device = devicesRef.push(input, () => {
            resolve(Object.assign({ id: device.key }, input)
            );
          });
        })
      );
    },
    async updateDevice(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const deviceRef = devicesRef.child(input.id);
      return deviceRef.once('value')
        .then(snapshot => {
          const device = snapshot.val();
          if (device === null) throw new Error('404');
          return device;
        })
        .then((device) => {
          const update = Object.assign(device, input);
          delete update.id;
          return deviceRef.set(update).then(() => (Object.assign({ id: input.id }, update)));
        });
    },
    async deleteDevice(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const deviceRef = devicesRef.child(input.id);
      return deviceRef.once('value')
        .then((snapshot) => {
          const device = snapshot.val();
          if (device === null) throw new Error('404');
          return Object.assign({ id: input.id }, device);
        })
        .then(device => deviceRef.remove().then(() => (device)));
    },

    // connections
    async createConnection(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return (
        new Promise((resolve) => {
          const connection = connectionsRef.push(input, () => {
            resolve(Object.assign({ id: connection.key }, input)
            );
          });
        })
      );
    },
    async updateConnection(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const connRef = connectionsRef.child(input.id);
      return connRef.once('value')
        .then(snapshot => {
          const conn = snapshot.val();
          if (conn === null) throw new Error('404');
          return conn;
        })
        .then((conn) => {
          const update = Object.assign(conn, input);
          delete update.id;
          return connRef.set(update).then(() => (Object.assign({ id: input.id }, update)));
        });
    },
    async deleteConnection(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const connRef = connectionsRef.child(input.id);
      return connRef.once('value')
        .then((snapshot) => {
          const conn = snapshot.val();
          if (conn === null) throw new Error('404');
          return Object.assign({ id: input.id }, conn);
        })
        .then(conn => connRef.remove().then(() => (conn)));
    },

    // group
    async createGroup(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return (
        new Promise((resolve) => {
          const group = groupsRef.push(input, () => {
            resolve(Object.assign({ id: group.key }, input)
            );
          });
        })
      );
    },
    async updateGroup(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const groupRef = groupsRef.child(input.id);
      return groupRef.once('value')
        .then(snapshot => {
          const group = snapshot.val();
          if (group === null) throw new Error('404');
          return group;
        })
        .then((group) => {
          const update = Object.assign(group, input);
          delete update.id;
          return groupRef.set(update).then(() => (Object.assign({ id: input.id }, update)));
        });
    },
    async deleteGroup(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const groupRef = groupsRef.child(input.id);
      return groupRef.once('value')
        .then((snapshot) => {
          const group = snapshot.val();
          if (group === null) throw new Error('404');
          return Object.assign({ id: input.id }, group);
        })
        .then(conn => groupRef.remove().then(() => (group)));
    },

    // Organization
    async createOrganization(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      return (
        new Promise((resolve) => {
          const org = orgsRef.push(input, () => {
            resolve(Object.assign({ id: org.key }, input)
            );
          });
        })
      );
    },
    async updateOrganization(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const orgRef = orgsRef.child(input.id);
      return orgRef.once('value')
        .then(snapshot => {
          const org = snapshot.val();
          if (org === null) throw new Error('404');
          return org;
        })
        .then((org) => {
          const update = Object.assign(org, input);
          delete update.id;
          return orgRef.set(update).then(() => (Object.assign({ id: input.id }, update)));
        });
    },
    async deleteOrganization(_, { input }, { token }) {
      let uid = await admin.auth().verifyIdToken(token);
      const orgRef = groupsRef.child(input.id);
      return orgRef.once('value')
        .then((snapshot) => {
          const org = snapshot.val();
          if (org === null) throw new Error('404');
          return Object.assign({ id: input.id }, org);
        })
        .then(org => orgRef.remove().then(() => (org)));
    },


  }
};
