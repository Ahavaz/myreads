import React from 'react'
import PropTypes from 'prop-types'
import './ChangeShelf.css'

const buttons = [
  {
    value: 'read',
    text: 'Read'
  },
  {
    value: 'currentlyReading',
    text: 'Currently Reading'
  },
  {
    value: 'wantToRead',
    text: 'Want To Read'
  }
]

const ChangeShelf = ({ shelf, onShowShelf }) => (
  <div className="change-shelf">
    {buttons.map(button => (
      <button
        key={button.value}
        value={button.value}
        className={button.value === shelf && 'selected'}
        onClick={e => onShowShelf(e.target.value)}
      >
        {button.text}
      </button>
    ))}
  </div>
)

ChangeShelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  onShowShelf: PropTypes.func.isRequired
}

export default ChangeShelf
