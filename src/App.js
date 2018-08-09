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
    shelf: 'currentlyReading'
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .then(() => console.log('BOOKS', this.state.books))
  }

  updateBookShelf = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then(() => this.fetchBooks())
  }

  showShelf = shelf => {
    this.setState({ shelf })
  }

  render() {
    const { books, shelf } = this.state

    books.sort(sortBy('title'))

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
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={books}
              onUpdateBookShelf={this.updateBookShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default App
