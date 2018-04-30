const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

const approvalsRef = admin.database().ref('approvals');
const devicesRef = admin.database().ref('devices');
const connectionsRef = admin.database().ref('connections');
const groupsRef = admin.database().ref('groups');
const orgsRef = admin.database().ref('organizations');




module.exports = {
  Query: {
    // approvals 
    approvals() {
      return approvalsRef.once('value')
        .then(snapshot => {
          const approvals = snapshot.val();
          if (approvals === null) return [];
          return Object.keys(approvals).map(o => Object.assign({ id: o }, approvals[o]));
        });
    },
    approval(_, { id }) {
      return admin.database().ref(`approvals/${id}`).once('value')
        .then(snapshot => {
          const approval = snapshot.val();
          return Object.assign({ id: id }, approval)
          // console.log('approval' , approval);
        });
    },

    // devices
    devices() {
      return devicesRef.once('value')
        .then(snapshot => {
          const devices = snapshot.val();
          if (devices === null) return [];
          return Object.keys(devices).map(o => Object.assign({ id: o }, devices[o]));
        });
    },
    device(_, { id }) {
      return admin.database().ref(`devices/${id}`).once('value')
        .then(snapshot => {
          const device = snapshot.val();
          return Object.assign({ id: id }, device)
          // console.log('approval' , approval);
        });
    },

    // connection
    connections() {
      return connectionsRef.once('value')
        .then(snapshot => {
          const connections = snapshot.val();
          if (connections === null) return [];
          return Object.keys(connections).map(o => Object.assign({ id: o }, connections[o]));
        });
    },
    connection(_, { id }) {
      return admin.database().ref(`connections/${id}`).once('value')
        .then(snapshot => {
          const connection = snapshot.val();
          return Object.assign({ id: id }, connection)
          // console.log('approval' , approval);
        });
    },

    // group
    groups() {
      return groupsRef.once('value')
        .then(snapshot => {
          const groups = snapshot.val();
          if (groups === null) return [];
          return Object.keys(groups).map(o => Object.assign({ id: o }, groups[o]));
        });
    },
    group(_, { id }) {
      return admin.database().ref(`groups/${id}`).once('value')
        .then(snapshot => {
          const group = snapshot.val();
          return Object.assign({ id: id }, group)
          // console.log('approval' , approval);
        });
    },

    // group
    organizations() {
      return orgsRef.once('value')
        .then(snapshot => {
          const orgs = snapshot.val();
          if (orgs === null) return [];
          return Object.keys(orgs).map(o => Object.assign({ id: o }, orgs[o]));
        });
    },
    organization(_, { id }) {
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
    createApproval(_, { input }) {
      return (
        new Promise((resolve) => {
          const approval = approvalsRef.push(input, () => {
            resolve(Object.assign({ id: approval.key }, input)
            );
          });
        })
      );
    },
    updateApproval(_, { input }) {
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
    deleteApproval(_, { input }) {
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
    createDevice(_, { input }) {
      return (
        new Promise((resolve) => {
          const device = devicesRef.push(input, () => {
            resolve(Object.assign({ id: device.key }, input)
            );
          });
        })
      );
    },
    updateDevice(_, { input }) {
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
    deleteDevice(_, { input }) {
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
    createConnection(_, { input }) {
      return (
        new Promise((resolve) => {
          const connection = connectionsRef.push(input, () => {
            resolve(Object.assign({ id: connection.key }, input)
            );
          });
        })
      );
    },
    updateConnection(_, { input }) {
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
    deleteConnection(_, { input }) {
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
    createGroup(_, { input }) {
      return (
        new Promise((resolve) => {
          const group = groupsRef.push(input, () => {
            resolve(Object.assign({ id: group.key }, input)
            );
          });
        })
      );
    },
    updateGroup(_, { input }) {
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
    deleteGroup(_, { input }) {
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
    createOrganization(_, { input }) {
      return (
        new Promise((resolve) => {
          const org = orgsRef.push(input, () => {
            resolve(Object.assign({ id: org.key }, input)
            );
          });
        })
      );
    },
    updateOrganization(_, { input }) {
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
    deleteOrganization(_, { input }) {
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
