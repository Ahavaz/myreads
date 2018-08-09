import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import * as BooksAPI from '../utils/BooksAPI'
import './SearchBooks.css'
import Bookshelf from './Bookshelf'
import SearchBar from './SearchBar'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks: []
  }

  fetchSearchBooks = query => {
    BooksAPI.search(query)
      .then(
        searchedBooks =>
          query === this.state.query.trim() &&
          this.setState({
            searchedBooks:
              (!searchedBooks.error &&
                searchedBooks.map(searchedBook => {
                  if (
                    this.props.books.filter(book => book.id === searchedBook.id)
                      .length !== 0
                  )
                    return this.props.books.filter(
                      book => book.id === searchedBook.id
                    )[0]

                  return searchedBook
                })) ||
              searchedBooks
          })
      )
      .then(() =>
        console.log('BOOKS SEARCHED', query, this.state.searchedBooks)
      )
  }

  // updateBookState = searchedBooks => {
  //   searchedBooks.map(searchedBook => {
  //     if (
  //       this.props.books.filter(book => book.id === searchedBook.id).length !==
  //       0
  //     )
  //       return this.props.books.filter(book => book.id === searchedBook.id)[0]

  //     return searchedBook
  //   })
  // }

  formatQuery = query => query.trimStart().replace(/\s+/g, ' ')

  updateQuery = query => {
    query = this.formatQuery(query)
    this.setState({ query })
    if (query) {
      this.fetchSearchBooks(query.trim())
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  render() {
    const { query, searchedBooks } = this.state
    const { onUpdateBookShelf } = this.props

    return (
      <div className="search-books">
        <SearchBar query={query} onUpdateQuery={this.updateQuery} />
        {searchedBooks.error ? (
          <div className="search-books-empty">
            <h1>Sorry, no matches found :|</h1>
          </div>
        ) : query ? (
          <Bookshelf
            books={searchedBooks.sort(sortBy('title'))}
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
