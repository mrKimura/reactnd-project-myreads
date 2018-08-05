import React, { Component } from "react";
import PropTypes from "prop-types";
import BooksGrid from "../common/BooksGrid";

class BookShelf extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return !(
      nextProps.shelfBooks.every(el => this.props.shelfBooks.includes(el)) &&
      nextProps.shelfBooks.length === this.props.shelfBooks.length
    );
  }

  render() {
    const { shelfName, shelfBooks, changeShelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <BooksGrid
          thisClassName="bookshelf-books"
          shelfBooks={shelfBooks}
          changeShelf={changeShelf}
        />
      </div>
    );
  }
}

export default BookShelf;
