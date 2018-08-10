import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Bookshelf.css'
import ListBooks from './ListBooks'
import ChangeShelf from './ChangeShelf'

const Bookshelf = ({
  books,
  shelf,
  loading,
  onShowShelf,
  onUpdateBookShelf,
  onUpdateQuery
}) => (
  <div className="bookshelf">
    <header className="bookshelf-title">
      <h1>MyReads</h1>
    </header>
    <ListBooks
      books={books.filter(book => book.shelf === shelf)}
      onUpdateBookShelf={onUpdateBookShelf}
      loading={loading}
    />
    <ChangeShelf shelf={shelf} onShowShelf={onShowShelf} />
    <Link
      to="/search"
      onClick={() => onUpdateQuery('')}
      className="open-search"
    />
  </div>
)

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onShowShelf: PropTypes.func.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
}

export default Bookshelf
