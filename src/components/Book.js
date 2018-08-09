import React from 'react'
import PropTypes from 'prop-types'
import './Book.css'
import brokenImageIcon from '../icons/broken-img.svg'
import BookRating from './BookRating'

const Book = props => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          background: `var(--primary-light-color) url(${props.image.thumbnail ||
            props.image}) no-repeat center`,
          backgroundSize: `${props.image.thumbnail ? 'cover' : 'contain'}`
        }}
      />
      <div className="book-shelf-changer">
        <select
          value={props.shelf}
          onChange={e => props.onUpdateBookShelf(props, e.target.value)}
        >
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <BookRating rating={props.rating} />
    <div className="book-title">{props.title}</div>
    <div className="book-authors">{props.authors.join(', ')}</div>
  </div>
)

Book.defaultProps = {
  shelf: 'none',
  image: brokenImageIcon,
  authors: [],
  rating: 0
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  image: PropTypes.object,
  authors: PropTypes.array,
  rating: PropTypes.number,
  onUpdateBookShelf: PropTypes.func.isRequired
}

export default Book
