import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client';
import { SEARCH_POSTS } from '../graphql/queries';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';
import Posts from '../Components/Posts';

const SearchResults = () => {
  const { keyword } = useParams();
  const { data, error, loading } = useQuery(SEARCH_POSTS, {
    variables: {
      keyword
    }
  });
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  return (
    <div>
      Search Results for "{keyword}"
      {
        loading
          ? <Loader />
          : data ? <Posts posts={data.searchPosts}></Posts> : ''
      }
    </div>
  )
}

export default SearchResults
