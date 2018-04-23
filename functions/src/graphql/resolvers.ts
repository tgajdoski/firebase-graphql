const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

const approvalsRef = admin.database().ref('approvals');
module.exports = {
  Query: {
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
  },
  Mutation: {
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
    }
  }
};
