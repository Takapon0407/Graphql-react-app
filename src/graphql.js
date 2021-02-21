import gql from "graphql-tag";
export const ME = gql`
  query me {
    user(login: "Takapon0407") {
      name
      avatarUrl
    }
  }
`;
