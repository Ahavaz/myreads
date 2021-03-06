import React from 'react'
import PropTypes from 'prop-types'
import './ListBooks.css'
import Book from './Book'
import Loader from './Loader'

const ListBooks = ({ books, loading, onUpdateBookShelf }) => (
  <div className="list-books">
    {loading ? (
      <Loader />
    ) : !books.length ? (
      <div className="shelf-empty">
        <h1>This shelf is empty</h1>
      </div>
    ) : (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              id={book.id}
              title={book.title}
              shelf={book.shelf || 'none'}
              image={
                (book.imageLinks &&
                  book.imageLinks.thumbnail.replace(
                    /^http:\/\//i,
                    'https://'
                  )) ||
                undefined
              }
              authors={book.authors || []}
              rating={book.averageRating || 0}
              onUpdateBookShelf={onUpdateBookShelf}
            />
          </li>
        ))}
      </ol>
    )}
  </div>
)

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default ListBooks
