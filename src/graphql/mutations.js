const { gql } = require("@apollo/client");
const { USER_INFO, POST_DATA } = require("./fragments");

export const USER_CREATE = gql`
mutation {
  userCreate {
    username
  }
}
`;

export const PROFILE_UPDATE = gql`
mutation userUpdate($input:UserUpdateInput!){
  userUpdate(input: $input){
    # using GQL fragment instead of directly specifying fields
    ...userInfo
  }
}
  ${USER_INFO}
`

export const POST_CREATE = gql`
mutation postCreate($input: PostCreateUpdateInput!) {
  postCreate(input: $input) {
   ...postData
  }
}
${POST_DATA}
`
export const UPDATE_POST = gql`
mutation postUpdate($_id:String!, $input:PostCreateUpdateInput!){
  postUpdate(_id: $_id, input: $input) {
    ...postData
  }
}
${POST_DATA}
`;


export const DELETE_POST = gql`
mutation postDelete($_id: String!){
  postDelete(_id:$_id){
    _id
  }
}

`


