import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

const bookSections = [
  {
    value: "currentlyReading",
    content: "Currently Reading"
  },
  {
    value: "wantToRead",
    content: "Want to Read"
  },
  {
    value: "read",
    content: "Read"
  }
];

class BooksApp extends Component {
  state = {
    allBooks: [],
    stillLoading: false
  };

  componentDidMount() {
    this.setState(() => ({
      stillLoading: true
    }));
    BooksAPI.getAll().then(allBooks => {
      this.setState(() => ({
        allBooks,
        stillLoading: false
      }));
    });
  }

  changeShelf = bookToChange => {
    const currBooks = this.state.allBooks;
    const allOtherBooks = currBooks.filter(book => book.id !== bookToChange.id);
    let newBooks = allOtherBooks;
    if (bookToChange.shelf !== "none") {
      newBooks = allOtherBooks.concat(bookToChange);
    }
    this.setState(() => ({
      allBooks: newBooks
    }));
    BooksAPI.update(bookToChange, bookToChange.shelf);
  };

  toggleSearch = () =>
    this.setState({ showSearchPage: !this.state.showSearchPage });

  render() {
    return (
      <div className="app">
        {this.state.stillLoading && <div className="message">Loading...</div>}
        <Route
          path="/"
          exact
          render={() => (
            <ListBooks
              allBooks={this.state.allBooks}
              changeShelf={this.changeShelf}
              toggleSearch={this.toggleSearch}
              changerOptions={bookSections}
            />
          )}
        />
        <Route
          path="/search"
          exact
          render={() => (
            <SearchBooks
              booksFromState={this.state.allBooks}
              toggleSearch={this.toggleSearch}
              changeShelf={this.changeShelf}
              changerOptions={bookSections}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
