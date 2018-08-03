import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";

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
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(allBooks => {
      this.setState(() => ({
        allBooks
      }));
    });
  }

  changeShelf = bookToChange => {
    const currBooks = this.state.allBooks;
    const newBooks = currBooks
      .filter(book => book.id !== bookToChange.id)
      .concat(bookToChange);
    this.setState(() => ({
      allBooks: newBooks
    }));
    BooksAPI.update(bookToChange, bookToChange.shelf)
  };

  makeShelves = () => {
    return bookSections.map(section => (
      <BookShelf
        key={section.value}
        shelfName={section.content}
        shelfBooks={this.state.allBooks.filter(
          book => book.shelf === section.value
        )}
        changerOptions={bookSections}
        handleChangeShelf={this.changeShelf}
      />
    ));
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">{this.makeShelves()}</div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
