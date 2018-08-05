import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "../common/BooksGrid";

export default function SearchResults (props) {
  const { shelfBooks, changeShelf } = props;
  return (
    <BooksGrid
      thisClassName="search-books-results"
      shelfBooks={shelfBooks}
      changeShelf={changeShelf}
    />
  )
}

SearchResults.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};
