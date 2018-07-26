import React from 'react'
import PropTypes from 'prop-types'
import './ChangeShelf.css'

const ChangeShelf = props => (
  <div className="change-shelf">
    <button value="read" onClick={e => props.onShowShelf(e.target.value)}>
      Read
    </button>
    <button value="currentlyReading" onClick={e => props.onShowShelf(e.target.value)}>
      Currently Reading
    </button>
    <button value="wantToRead" onClick={e => props.onShowShelf(e.target.value)}>
      Want To Read
    </button>
  </div>
)

ChangeShelf.propTypes = {
  onShowShelf: PropTypes.func.isRequired
}

export default ChangeShelf
