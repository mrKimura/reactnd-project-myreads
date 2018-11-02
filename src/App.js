import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends Component {
  state = {
    allBooks: [],
    stillLoading: false,
  }

  componentDidMount() {
    this.setState(() => ({
      stillLoading: true,
    }))
    BooksAPI.getAll().then(allBooks => {
      this.setState(() => ({
        allBooks,
        stillLoading: false,
      }))
    })
  }

  changeShelf = bookToChange => {
    const { allBooks } = this.state
    const allOtherBooks = allBooks.filter(book => book.id !== bookToChange.id)
    let newBooks = allOtherBooks
    if (bookToChange.shelf !== 'none') {
      newBooks = allOtherBooks.concat(bookToChange)
    }
    this.setState(() => ({
      allBooks: newBooks,
    }))
    BooksAPI.update(bookToChange, bookToChange.shelf)
  }

  toggleSearch = () => {
    const { showSearchPage } = this.state
    this.setState({ showSearchPage: !showSearchPage })
  }

  renderListBooks = () => {
    const { allBooks } = this.state
    return (
      <ListBooks
        allBooks={allBooks}
        changeShelf={this.changeShelf}
        toggleSearch={this.toggleSearch}
      />
    )
  }

  renderSearchBooks = () => {
    const { allBooks } = this.state
    return (
      <SearchBooks
        booksFromState={allBooks}
        toggleSearch={this.toggleSearch}
        changeShelf={this.changeShelf}
      />
    )
  }

  render() {
    const { stillLoading } = this.state
    return (
      <div className="app">
        {stillLoading && <div className="message">Loading...</div>}
        <Route path="/" exact render={this.renderListBooks} />
        <Route path="/search" exact render={this.renderSearchBooks} />
      </div>
    )
  }
}

export default BooksApp
