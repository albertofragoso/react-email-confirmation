import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const Spinner = ({ spinning, size }) => (
  <div className={`fadeIn ${spinning}`}>
    <FontAwesomeIcon icon={faSync} size={size} />
  </div>
)

export default Spinner