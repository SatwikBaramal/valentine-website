// import React from 'react'
import '../App.css'

// eslint-disable-next-line react/prop-types
function ThankYou({ onGoBack }) {
  return (
    <div className="thank-you-container">
      <img
        src="/mypic.jpg"
        alt="My Photo"
        className="thank-you-image"
      />
      <p className="thank-you-text">
        Thank youuuuuuu (I knew you would say yes, but I still had fun making this)
      </p>
      <button onClick={onGoBack}>Back</button>
    </div>
  )
}

export default ThankYou