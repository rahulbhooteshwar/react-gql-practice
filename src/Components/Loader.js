import React from 'react'
import classes from "./Loader.module.css"

const Loader = ({ full, background }) => {
  return (
    <div className={background ? classes.background : ''}>
      <div className={full ? classes.full : ''}>
        <div className={classes.loaderContainer}>
          <div className={classes.yellow}></div>
          <div className={classes.red}></div>
          <div className={classes.blue}></div>
          <div className={classes.violet}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
