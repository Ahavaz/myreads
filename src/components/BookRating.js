import React from 'react'
import PropTypes from 'prop-types'
import './BookRating.css'

const BookRating = props => (
  <div className="book-rating">
    {Array(5)
      .fill()
      .map((e, index) => (
        <span
          key={`star-${index + 1}`}
          className={
            index < Math.floor(props.rating)
              ? 'book-rating-star'
              : index < props.rating
                ? 'book-rating-star-half'
                : 'book-rating-star-border'
          }
        />
      ))}
  </div>
  // <div className="book-rating">
  //   {Array(Math.floor(props.rating)).fill(
  //     <span className="book-rating-star" />
  //   )}
  //   {props.rating % 1 ? <span className="book-rating-star-half" /> : null}
  //   {Array(Math.floor(5 - props.rating)).fill(
  //     <span className="book-rating-star-border" />
  //   )}
  // </div>
)

BookRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default BookRating
