import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./shelf/BookShelf";
import * as Globals from "../global_vars"

class ListBooks extends Component {
  static propTypes = {
    allBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    toggleSearch: PropTypes.func.isRequired
  };

  makeShelves = () => {
    const { allBooks, changeShelf } = this.props;
    return Globals.bookSections.map(section => (
      <BookShelf
        key={section.value}
        shelfName={section.content}
        shelfBooks={allBooks.filter(book => book.shelf === section.value)}
        changeShelf={changeShelf}
      />
    ));
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Andrew's Reads</h1>
        </div>
        <div className="list-books-content">{this.makeShelves()}</div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
