import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'
import './SearchBar.css'

const SearchBar = ({ query, onUpdateQuery }) => {
  const searchInput = React.createRef()

  const clearSearch = () => {
    searchInput.current.focus()
    onUpdateQuery('')
  }

  return (
    <div className="search-bar">
      <Link to="/" className="close-search" />
      <DebounceInput
        inputRef={searchInput}
        className="search-input"
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={e => onUpdateQuery(e.target.value)}
        debounceTimeout={300}
        autoFocus
      />
      <button
        disabled={!query}
        className={query ? 'clear-search' : 'clear-search hidden'}
        onClick={clearSearch}
      />
    </div>
  )
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
}

export default SearchBar
