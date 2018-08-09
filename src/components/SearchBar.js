import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'
import './SearchBar.css'

const SearchBar = props => (
  <div className="search-bar">
    <Link to="/" className="close-search" />
    <DebounceInput
      className="search-input"
      type="text"
      placeholder="Search by title or author"
      value={props.query}
      onChange={e => props.onUpdateQuery(e.target.value)}
      debounceTimeout={300}
      autoFocus
    />
    <button
      disabled={!props.query}
      className={props.query ? 'clear-search' : 'clear-search hidden'}
      onClick={() => props.onUpdateQuery('')}
    />
  </div>
)

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
}

export default SearchBar
