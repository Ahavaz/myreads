import React from 'react'
import PropTypes from 'prop-types'
import './SearchBooks.css'
import ListBooks from './ListBooks'
import SearchBar from './SearchBar'

const SearchBooks = ({
  query,
  searchedBooks,
  loading,
  onUpdateQuery,
  onUpdateBookShelf
}) => (
  <div className="search-books">
    <SearchBar query={query} onUpdateQuery={onUpdateQuery} />
    {searchedBooks.error ? (
      <div className="search-books-empty">
        <h1>Sorry, no matches found :|</h1>
      </div>
    ) : query ? (
      <ListBooks
        books={searchedBooks}
        onUpdateBookShelf={onUpdateBookShelf}
        loading={loading}
      />
    ) : (
      <div className="search-books-empty">
        <h1>Type something above to start searching for books</h1>
      </div>
    )}
  </div>
)

SearchBooks.propTypes = {
  query: PropTypes.string.isRequired,
  searchedBooks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default SearchBooks
