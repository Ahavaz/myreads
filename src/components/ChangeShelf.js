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

const ChangeShelf = props => (
  <div className="change-shelf">
    {buttons.map(button => (
      <button
        key={button.value}
        value={button.value}
        className={button.value === props.shelf ? 'selected' : ''}
        onClick={e => props.onShowShelf(e.target.value)}
      >
        {button.text}
      </button>
    ))}
  </div>
)

ChangeShelf.propTypes = {
  onShowShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
}

export default ChangeShelf
