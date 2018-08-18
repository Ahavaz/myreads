import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import sortBy from 'sort-by'
import './App.css'
import { GET_BOOKS, UPDATE_BOOKS } from '../utils/Queries.graphql'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'

class App extends Component {
  static getDerivedStateFromProps(
    {
      getBooks: { data, loading }
    },
    state
  ) {
    if (data && data.books) {
      if (data.books !== state.books) {
        return {
          books: [...data.books].sort(sortBy('title')),
          loading
        }
      }
    }
    return null
  }

  state = {
    books: [],
    loading: true
  }

  componentDidUpdate = (prevProps, prevState) =>
    this.state.books !== prevState.books && this.props.getBooks.refetch()

  updateBookShelf = (bookId, shelf) =>
    this.props
      .updateBooks({
        variables: { id: bookId, input: { shelf } }
      })
      .then(() => this.props.getBooks.refetch())

  render() {
    const { books, loading } = this.state

    return (
      <div className="books-app">
        <Route
          exact
          path="/"
          render={() => (
            <Bookshelf
              books={books}
              onUpdateBookShelf={this.updateBookShelf}
              loading={loading}
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
        <ToastContainer autoClose={3500} newestOnTop pauseOnHover={false} />
      </div>
    )
  }
}

export default compose(
  graphql(GET_BOOKS, { name: 'getBooks' }),
  graphql(UPDATE_BOOKS, { name: 'updateBooks' })
)(App)
