import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import './SearchBooks.css'
import { SEARCH_BOOKS } from '../utils/Queries.graphql'
import ListBooks from './ListBooks'
import SearchBar from './SearchBar'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks: [],
    loading: true
  }

  componentDidUpdate = prevProps =>
    this.props.books !== prevProps.books &&
    this.syncBookState(this.state.searchedBooks)

  formatQuery = query => query.trimStart().replace(/\s+/g, ' ')

  updateQuery = query => {
    query = this.formatQuery(query)
    this.setState({ query, loading: true })
    if (query) {
      this.searchBooks(query.trim())
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  searchBooks = query => {
    this.props
      .searchBooks({
        variables: { input: { query } }
      })
      .then(
        ({
          data: {
            data: { books }
          }
        }) => query === this.state.query.trim() && this.syncBookState(books)
      )
  }

  syncBookState = searchedBooks => {
    this.setState({
      searchedBooks:
        searchedBooks.id === null
          ? null
          : searchedBooks
              .map(searchedBook => {
                const match = this.props.books.filter(
                  book => book.id === searchedBook.id
                )
                return match.length
                  ? match[0]
                  : { ...searchedBook, shelf: 'none' }
              })
              .sort(sortBy('title'))
    })
    setTimeout(() => this.setState({ loading: false }), 1000)
  }

  render() {
    const { query, searchedBooks, loading } = this.state
    const { onUpdateBookShelf } = this.props

    return (
      <div className="search-books">
        <SearchBar query={query} onUpdateQuery={this.updateQuery} />
        {searchedBooks === null ? (
          <div className="search-books-empty">
            <h1>Sorry, no matches found :|</h1>
          </div>
        ) : query ? (
          <ListBooks
            books={searchedBooks}
            onUpdateBookShelf={onUpdateBookShelf}
            loading={loading}
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

export default graphql(SEARCH_BOOKS, { name: 'searchBooks' })(SearchBooks)
