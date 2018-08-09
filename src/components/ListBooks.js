import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ListBooks.css'
import Bookshelf from './Bookshelf'
import ChangeShelf from './ChangeShelf'

const ListBooks = props => (
  <div className="list-books">
    <header className="list-books-title">
      <h1>MyReads</h1>
    </header>
    <Bookshelf
      books={props.books.filter(book => book.shelf === props.shelf)}
      onUpdateBookShelf={props.onUpdateBookShelf}
    />
    <ChangeShelf shelf={props.shelf} onShowShelf={props.onShowShelf} />
    <Link to="/search" className="open-search" />
  </div>
)

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired,
  onShowShelf: PropTypes.func.isRequired
}

export default ListBooks
