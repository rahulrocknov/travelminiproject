import React from 'react'
import PropTypes from 'prop-types'
import './error-404.css'

const Error404 = (props) => {
  return (
    <div className="error-404-container">
      <h3>{props.heading}</h3>
      <div className="error-404-container1">
        <h1 className="error-404-text1">{props.heading1}</h1>
      </div>
      <div className="error-404-container2">
        <h2 className="error-404-text2">{props.heading2}</h2>
      </div>
    </div>
  )
}

Error404.defaultProps = {
  heading: 'OOPS! PAGE NOT FOUND',
  heading1: '404',
  heading2: 'WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND',
}

Error404.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
}

export default Error404
