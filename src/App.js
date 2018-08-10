import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import sortBy from 'sort-by'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Bookshelf from './components/Bookshelf'
import SearchBooks from './components/SearchBooks'

class App extends Component {
  state = {
    books: [],
    shelf: 'currentlyReading',
    query: '',
    searchedBooks: [],
    loading: true
  }

  componentDidMount() {
    this.fetchBooks(true)
  }

  componentDidUpdate = (prevProps, prevState) =>
    this.state.books !== prevState.books &&
    this.syncBookState(this.state.searchedBooks)

  fetchBooks = loading => {
    this.setState({ loading })
    BooksAPI.getAll()
      .then(books => this.setState({ books, loading: false }))
      .then(() => console.log('BOOKSHELF', this.state.books))
  }

  fetchSearchBooks = query => {
    this.setState({ loading: true })
    BooksAPI.search(query)
      .then(
        searchedBooks =>
          query === this.state.query.trim() && this.syncBookState(searchedBooks)
      )
      .then(() =>
        console.log('BOOKS SEARCHED', query, this.state.searchedBooks)
      )
  }

  updateBookShelf = (bookId, shelf) =>
    BooksAPI.update(bookId, shelf).then(() => this.fetchBooks(false))

  syncBookState = searchedBooks =>
    this.setState({
      searchedBooks:
        (searchedBooks.error && searchedBooks) ||
        searchedBooks.map(searchedBook => {
          const match = this.state.books.filter(
            book => book.id === searchedBook.id
          )
          return match.length ? match[0] : { ...searchedBook, shelf: 'none' }
        }),
      loading: false
    })

  updateQuery = query => {
    query = this.formatQuery(query)
    this.setState({ query })
    if (query) {
      this.fetchSearchBooks(query.trim())
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  formatQuery = query => query.trimStart().replace(/\s+/g, ' ')

  showShelf = shelf => this.setState({ shelf })

  render() {
    const { books, shelf, query, searchedBooks, loading } = this.state

    books.sort(sortBy('title'))
    if (!searchedBooks.error) searchedBooks.sort(sortBy('title'))

    return (
      <div className="books-app">
        <Route
          exact
          path="/"
          render={() => (
            <Bookshelf
              books={books}
              shelf={shelf}
              onShowShelf={this.showShelf}
              onUpdateBookShelf={this.updateBookShelf}
              onUpdateQuery={this.updateQuery}
              loading={loading}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              query={query}
              searchedBooks={searchedBooks}
              onUpdateQuery={this.updateQuery}
              onUpdateBookShelf={this.updateBookShelf}
              loading={loading}
            />
          )}
        />
      </div>
    )
  }
}

export default App
