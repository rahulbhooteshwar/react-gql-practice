const { gql } = require("@apollo/client");
const { USER_INFO, POST_DATA } = require("./fragments");

export const GET_POSTS_QUERY = gql`
query allPosts($page: Int, $pageSize: Int) {
  allPosts(page: $page, pageSize: $pageSize) {
   ...postData
  }
}
${POST_DATA}
`;
export const TOTAL_POSTS = gql`
query {
  totalPosts
}
`
export const TOTAL_USER_POSTS = gql`
query {
  totalPostsByUser
}
`
export const GET_CURRENT_USER_POSTS_QUERY = gql`
query postsByCurrentUser($page: Int, $pageSize: Int){
  postsByCurrentUser(page: $page, pageSize: $pageSize) {
    ...postData
  }
}
${POST_DATA}
`;

export const SINGLE_POST = gql`
query singlePost($_id: String!){
  singlePost(_id: $_id) {
    ...postData
  }
}
${POST_DATA}
`;

export const SEARCH_POSTS = gql`
query searchPosts($keyword: String!){
  searchPosts(keyword:$keyword) {
    ...postData
  }
}
${POST_DATA}
`;
export const PROFILE_QUERY = gql`
query {
 profile {
   # using GQL fragment instead of directly specifying fields
   ...userInfo
  }
}
  ${USER_INFO}
`

export const ALL_USERS_QUERY = gql`
query {
  allUsers {
    _id
    username
    about
    images {
      url
    }
  }
}
`

export const PUBLIC_PROFILE_QUERY = gql`
query publicProfile($username: String!){
  publicProfile(username: $username) {
    ...userInfo
  }
}
${USER_INFO}`
