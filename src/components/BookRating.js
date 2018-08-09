import React from 'react'
import PropTypes from 'prop-types'
import './BookRating.css'

const BookRating = ({ rating }) => (
  <div className="book-rating">
    {Array(5)
      .fill()
      .map((e, index) => (
        <span
          key={`star-${index + 1}`}
          className={
            index < Math.floor(rating)
              ? 'book-rating-star'
              : index < rating
                ? 'book-rating-star-half'
                : 'book-rating-star-border'
          }
        />
      ))}
  </div>
)

BookRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default BookRating
