import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../common/BooksGrid'

const SearchResults = ({ shelfBooks, changeShelf }) => (
  <BooksGrid
    thisClassName="search-books-results"
    shelfBooks={shelfBooks}
    changeShelf={changeShelf}
  />
)

SearchResults.propTypes = {
  shelfBooks: PropTypes.shape({
    book: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      shelf: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  }),
  changeShelf: PropTypes.func.isRequired,
}

export default SearchResults
