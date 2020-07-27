const { gql } = require("@apollo/client");

export const USER_INFO = gql`
fragment userInfo on User {
  _id
  name
  username
  email
  about
  images {
    url,
    public_id
  }
}
`
export const POST_DATA = gql`
fragment postData on Post {
  _id,
  title,
  content,
  postedBy {
    _id
    username,
    name
  },
  image {
    url
    public_id
  }
}
`