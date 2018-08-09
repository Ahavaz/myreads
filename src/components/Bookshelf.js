import React from 'react'
import PropTypes from 'prop-types'
import './Bookshelf.css'

const Bookshelf = props => (
  <div className="bookshelf">
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={e => props.onUpdateBookShelf(e.target.value, book.id)}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default Bookshelf