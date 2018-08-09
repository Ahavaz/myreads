import React from 'react'
import PropTypes from 'prop-types'
import './Bookshelf.css'
import Book from './Book'

const Bookshelf = ({ books, onUpdateBookShelf }) => (
  <div className="bookshelf">
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book
            id={book.id}
            title={book.title}
            shelf={book.shelf}
            image={book.imageLinks}
            authors={book.authors}
            rating={book.averageRating}
            onUpdateBookShelf={onUpdateBookShelf}
          />
        </li>
      ))}
    </ol>
  </div>
)

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default Bookshelf
