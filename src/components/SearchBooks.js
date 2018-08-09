import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import * as BooksAPI from '../utils/BooksAPI'
import './SearchBooks.css'
import Bookshelf from './Bookshelf'
import SearchBar from './SearchBar'

class SearchBooks extends Component {
  static propTypes = {
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  fetchSearchBooks = query => {
    BooksAPI.search(query)
      .then(
        books => query === this.state.query.trim() && this.setState({ books })
      )
      .then(() => console.log('BOOKS SEARCHED', query, this.state.books))
  }

  formatQuery = query => query.trimStart().replace(/\s+/g, ' ')

  updateQuery = query => {
    query = this.formatQuery(query)
    this.setState({ query })
    if (query) {
      this.fetchSearchBooks(query.trim())
    } else {
      this.setState({ books: [] })
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { query, books } = this.state
    const { onUpdateBookShelf } = this.props

    // if (query) {
    //   const match = new RegExp(escapeRegEx(query), 'i')
    //   showingBooks = this.props.books.filter(
    //     book => match.test(book.title) || book.authors.filter(author => match.test(author)).length !== 0
    //   )
    // }

    return (
      <div className="search-books">
        <SearchBar
          query={query}
          onUpdateQuery={this.updateQuery}
          onClearQuery={this.clearQuery}
        />
        {books.error ? (
          <div className="search-books-empty">
            <h1>Sorry, no matches found :|</h1>
          </div>
        ) : query ? (
          <Bookshelf
            books={books.sort(sortBy('title'))}
            onUpdateBookShelf={onUpdateBookShelf}
          />
        ) : (
          <div className="search-books-empty">
            <h1>Type something above to start searching for books</h1>
          </div>
        )}
      </div>
    )
  }
}

export default SearchBooks
