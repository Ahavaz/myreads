import React from 'react'
import sortBy from 'sort-by'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import Bookshelf from './components/Bookshelf'
import ChangeShelf from './components/ChangeShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearch: false,
    books: [],
    shelf: 'currentlyReading'
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
      .then(() => this.updateBookShelf('none'))
  }

  updateBookShelf = (shelf, id) => {
    if (id) {
      this.setState(state => ({
        books: state.books.map(book => {
          if (book.id === id) {
            return { ...book, shelf }
          }
          return { ...book }
        })
      }))
    } else {
      this.setState(state => ({
        books: state.books.map(book => ({ ...book, shelf }))
      }))
    }
  }

  changePage = () => {
    this.setState(state => ({
      showSearch: !state.showSearch
    }))
  }

  showShelf = shelf => {
    this.setState({ shelf })
  }

  selectShelf = shelf => {
    let el = document.querySelector('.change-shelf button.selected')
    if (el) el.classList.remove('selected')
    el = document.querySelector(`.change-shelf button[value=${shelf}]`)
    if (el) el.classList.add('selected')
    console.log(el)
  }

  render() {
    const { showSearch, books, shelf } = this.state

    setTimeout(() => {
      this.selectShelf(shelf)
    }, 50)

    books.sort(sortBy('title'))

    return (
      <div className="app">
        {showSearch ? (
          <SearchBooks
            onChangePage={this.changePage}
            books={books.filter(book => book.shelf === 'none')}
            onUpdateBookShelf={this.updateBookShelf}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf books={books.filter(book => book.shelf === shelf)} onUpdateBookShelf={this.updateBookShelf} />
            </div>
            <ChangeShelf onShowShelf={this.showShelf} />
            <div className="open-search">
              <button onClick={this.changePage}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
