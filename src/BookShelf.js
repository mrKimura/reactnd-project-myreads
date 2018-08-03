import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    changerOptions: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return !(
      nextProps.shelfBooks.every(el => this.props.shelfBooks.includes(el)) &&
      nextProps.shelfBooks.length === this.props.shelfBooks.length
    );
  }

  getShelfBooks = () => {
    const { shelfBooks, changerOptions, handleChangeShelf } = this.props;
    return shelfBooks.map(book => (
      <Book
        key={book.id}
        changerOptions={changerOptions}
        book={book}
        handleChangeShelf={handleChangeShelf}
      />
    ));
  };

  render() {
    const { shelfName } = this.props;
    console.log(`Rendering ${shelfName}`);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{this.getShelfBooks()}</ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
