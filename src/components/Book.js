import React from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import './Book.css'
import brokenImageIcon from '../icons/broken-img.svg'
import BookRating from './BookRating'

const Book = ({
  id,
  title,
  shelf,
  image,
  authors,
  rating,
  onUpdateBookShelf
}) => {
  const handleChange = (shelfValue, shelfText) => {
    onUpdateBookShelf(id, shelfValue)
    toast.info(
      shelfValue !== 'none'
        ? `Moving book to "${shelfText}"...`
        : `Removing book from bookshelf...`,
      {
        className:
          shelfValue !== 'none' ? 'toast-move-book' : 'toast-remove-book'
      }
    )
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            background: `var(--primary-light-color) url(${image.thumbnail ||
              image}) no-repeat center`,
            backgroundSize: `${image.thumbnail ? 'cover' : 'contain'}`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={e =>
              handleChange(
                e.target.value,
                e.target.options[e.target.selectedIndex].text
              )
            }
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <BookRating rating={rating} />
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(', ')}</div>
    </div>
  )
}

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
