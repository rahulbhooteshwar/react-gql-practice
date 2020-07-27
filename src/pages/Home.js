import React, { useEffect, useState } from 'react'
import Posts from '../Components/Posts'
import { GET_POSTS_QUERY, TOTAL_POSTS } from '../graphql/queries'
import { useQuery, useSubscription } from '@apollo/client'
import Loader from '../Components/Loader'
import { toast } from 'react-toastify'
import Pagination from '../Components/Pagination'
import { POST_ADDED } from '../graphql/subscriptions'
const Home = () => {
  const [page, setPage] = useState(1)
  const pageSize = 8
  useSubscription(POST_ADDED, {
    onSubscriptionData: ({ client: { cache }, subscriptionData: { data } }) => {
      // cache.reset()
      refetchTotalPosts()
      refetchPosts({
        variables: page,
        pageSize
      })
      // if (data && data.postAdded) {

      //   toast.info('Update: New Post')
      // }
    }
  })
  const { data: totalPostsQueryData, refetch: refetchTotalPosts } = useQuery(TOTAL_POSTS)
  const { data, error, loading, refetch: refetchPosts } = useQuery(GET_POSTS_QUERY, {
    variables: {
      page,
      pageSize
    }
  });
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  return (
    <div>
      <h1>Home</h1>
      {
        totalPostsQueryData ? <Pagination total={totalPostsQueryData.totalPosts} page={page} pageSize={pageSize} setPage={setPage} /> : ''
      }

      {
        loading
          ? <Loader />
          : data ? <Posts posts={data.allPosts}></Posts> : ''
      }
    </div >
  )
}

export default Home
