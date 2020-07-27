import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

const LoadingWithRedirect = ({ countFrom, path }) => {
  const history = useHistory();
  const [count, setCount] = useState(countFrom)
  useEffect(() => {
    if (count === 0) {
      history.push(path)
    } else {

      setTimeout(() => {
        console.log('executed at', new Date())
        setCount(count - 1)
      }, 1000)
    }

  }, [count, history, path])
  return (
    <div className="p-5">
      Redirecting you in {count} seconds ...
    </div>
  )
}

export default LoadingWithRedirect
