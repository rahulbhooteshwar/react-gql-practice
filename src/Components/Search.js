import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${keyword}`)
  }
  return (
    <Fragment>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          value={keyword}
          onChange={(e)=>setKeyword(e.target.value)}
          className="form-control mr-sm-2 bg-light" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    </Fragment>
  )
}

export default Search
