import React from "react"
import "../css/ErrorMessage.css"

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <span className="error-text">
        {message}
      </span>
    </div>
  )
}

export default ErrorMessage
