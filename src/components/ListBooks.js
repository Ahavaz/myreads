import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ListBooks.css'
import Bookshelf from './Bookshelf'
import ChangeShelf from './ChangeShelf'

const ListBooks = ({ books, shelf, onShowShelf, onUpdateBookShelf }) => (
  <div className="list-books">
    <header className="list-books-title">
      <h1>MyReads</h1>
    </header>
    <Bookshelf
      books={books.filter(book => book.shelf === shelf)}
      onUpdateBookShelf={onUpdateBookShelf}
    />
    <ChangeShelf shelf={shelf} onShowShelf={onShowShelf} />
    <Link to="/search" className="open-search" />
  </div>
)

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  onShowShelf: PropTypes.func.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default ListBooks
