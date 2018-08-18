import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Bookshelf.css'
import ListBooks from './ListBooks'
import ChangeShelf from './ChangeShelf'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    shelf: 'currentlyReading'
  }

  showShelf = shelf => this.setState({ shelf })

  render() {
    const { shelf } = this.state
    const { books, loading, onUpdateBookShelf } = this.props

    return (
      <div className="bookshelf">
        <header className="bookshelf-title">
          <h1>MyReads</h1>
        </header>
        <ListBooks
          books={books.filter(book => book.shelf === shelf)}
          loading={loading}
          onUpdateBookShelf={onUpdateBookShelf}
        />
        <ChangeShelf shelf={shelf} onShowShelf={this.showShelf} />
        <Link to="/search" className="open-search" />
      </div>
    )
  }
}

export default Bookshelf
