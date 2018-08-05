import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import SearchTopBar from "./search/SearchTopBar";
import SearchResults from "./search/SearchResults";

class SearchBooks extends Component {
  static propTypes = {
    booksFromState: PropTypes.array.isRequired,
    toggleSearch: PropTypes.func.isRequired,
    changerOptions: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    foundBooks: [],
    searchSuccess: true,
    stillLoading: false
  };

  searchBooks = query => {
    this.setState(() => ({
      searchSuccess: true,
      stillLoading: true
    }));
    const maxFoundItems = 20;
    if (query.length < 1) {
      this.setState(() => ({
        foundBooks: [],
        stillLoading: false
      }));
      return;
    }
    BooksAPI.search(query, maxFoundItems).then(foundBooksRaw => {
      if (foundBooksRaw && foundBooksRaw.length) {
        const foundBooks = this.syncShelvesInFoundWithState(foundBooksRaw);
        this.setState(() => ({
          foundBooks,
          searchSuccess: true,
          stillLoading: false
        }));
      } else {
        this.setState(() => ({
          foundBooks: [],
          searchSuccess: false,
          stillLoading: false
        }));
      }
    });
  };

  syncShelvesInFoundWithState = foundBooksRaw =>
    foundBooksRaw.map(book => {
      const bookFromState = this.props.booksFromState.filter(
        stateBook => stateBook.id === book.id
      );
      if (bookFromState.length !== 0) {
        book.shelf = bookFromState[0].shelf;
      } else {
        book.shelf = "none";
      }
      return book;
    });

  changeShelfInSearch = bookToChange => {
    const { changeShelf } = this.props;
    const currBooks = this.state.foundBooks;
    const newBooks = currBooks.map(book => {
      if (book.id === bookToChange.id) {
        book.shelf = bookToChange.shelf;
      }
      return book;
    });
    this.setState(() => ({
      foundBooks: newBooks
    }));
    changeShelf(bookToChange);
  };

  render() {
    const { toggleSearch } = this.props;
    const { foundBooks, searchSuccess, stillLoading } = this.state;
    return (
      <div className="search-books">
        <SearchTopBar
          toggleSearch={toggleSearch}
          searchEngine={this.searchBooks}
        />
        {stillLoading && <div className="message">Loading...</div>}
        {searchSuccess ? (
          <SearchResults
            shelfBooks={foundBooks}
            changeShelf={this.changeShelfInSearch}
          />
        ) : (
          <div className="message message--error">No results</div>
        )}
      </div>
    );
  }
}
export default SearchBooks;
