import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BooksGrid extends Component {
  static propTypes = {
    thisClassName: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  setGridBooks = () => {
    const { shelfBooks, changeShelf } = this.props;
    return shelfBooks.map(book => (
      <Book
        key={book.id}
        book={book}
        changeShelf={changeShelf}
      />
    ));
  };

  render() {
    const { thisClassName } = this.props;
    return (
      <div className={thisClassName}>
        <ol className="books-grid">{this.setGridBooks()}</ol>
      </div>
    );
  }
}

export default BooksGrid;
