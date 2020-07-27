import { POST_DATA } from "./fragments";

const { gql } = require("@apollo/client")

export const POST_ADDED = gql`
subscription {
  postAdded {
   ...postData
  }
}
${POST_DATA}
`;