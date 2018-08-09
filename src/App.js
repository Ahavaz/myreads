import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import sortBy from 'sort-by'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.fetchBooks())
    // if (id) {
    //   this.setState(state => ({
    //     books: state.books.map(book => {
    //       if (book.id === id) {
    //         return { ...book, shelf }
    //       }
    //       return { ...book }
    //     })
    //   }))
    // } else {
    //   this.setState(state => ({
    //     books: state.books.map(book => ({ ...book, shelf }))
    //   }))
    // }
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
            <ListBooks
              books={books}
              shelf={shelf}
              onUpdateBookShelf={this.updateBookShelf}
              onShowShelf={this.showShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              // books={books.filter(book => book.shelf === 'none')}
              onUpdateBookShelf={this.updateBookShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default App
