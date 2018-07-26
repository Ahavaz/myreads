import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegEx from 'escape-string-regexp'
import sortBy from 'sort-by'
import './SearchBooks.css'
import Bookshelf from './Bookshelf'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = query => {
    this.setState({ query: query.trim() })
  }

  render() {
    let showingBooks = this.props.books

    if (this.state.query) {
      const match = new RegExp(escapeRegEx(this.state.query), 'i')
      showingBooks = this.props.books.filter(
        book => match.test(book.title) || book.authors.filter(author => match.test(author)).length !== 0
      )
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.props.onChangePage}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <Bookshelf books={showingBooks} onUpdateBookShelf={this.props.onUpdateBookShelf} />
      </div>
    )
  }
}

export default SearchBooks
