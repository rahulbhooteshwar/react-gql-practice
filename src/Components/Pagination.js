import React, { Fragment } from 'react'

const Pagination = ({ page, pageSize, setPage, total }) => {
  const controls = Array(Math.ceil(total / pageSize)).fill(0)
  const lowerLimit = ((page - 1) * pageSize) + 1
  const upperLimit = lowerLimit + pageSize - 1
  return (
    <div>
      {
        controls.length > 1 ?
          <Fragment>
            <div>
              Showing <strong>{lowerLimit} - {upperLimit <= total ? upperLimit : total}</strong> of {total}
            </div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)} className={`mr-2 btn btn-warning btn-raised`}> Previous </button>
            {
              controls.map((_control, index) => {
                return <button onClick={() => setPage(index + 1)} className={`btn ${index + 1 === page ? `btn-raised btn-success` : `btn-outline-success`}`} key={'control' + index}>{index + 1}</button>
              })
            }
            <button disabled={page === controls.length} onClick={() => setPage(page + 1)} className={`ml-2 btn btn-warning btn-raised`}>Next</button>
          </Fragment>
          : ''
      }

    </div>
  )
}

export default Pagination
