import { gql } from 'react-apollo';

export const ACTION_PREFIX = 'app/';
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA6qTVu4xEcxidLxcXHCCejf_h8XqsUgvI',
  authDomain: 'folder-qraphql-firebase.firebaseapp.com',
  databaseURL: 'https://folder-qraphql-firebase.firebaseio.com',
  projectId: 'folder-qraphql-firebase',
  storageBucket: 'folder-qraphql-firebase.appspot.com',
  messagingSenderId: '459533231586',
};
export const ENDPOINT = 'https://us-central1-folder-qraphql-firebase.cloudfunctions.net/api/graphql';
export const FOLDERS_GQL = gql`
  query {
    folders {
      id name
    }
  }
`;
export const CREATE_FOLDER_GQL = gql`
  mutation createFolder($name: String!) {
    createFolder(input:{
      name: $name,
    }) {
      id
      name
    }
  }
`;
export const UPDATE_FOLDER_GQL = gql`
  mutation updateFolder($id: String!, $name: String!) {
    updateFolder(input:{
      id: $id,
      name: $name,
    }) {
      id
      name
    }
  }
`;
export const DELETE_FOLDER_GQL = gql`
  mutation deleteFolder($id: String!) {
    deleteFolder(input: {
      id: $id,
    }) {
      id
      name
    }
  }
`;
