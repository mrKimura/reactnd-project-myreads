import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = ({ thisClassName, shelfBooks, changeShelf }) => (
  <div className={thisClassName}>
    <ol className="books-grid">
      {shelfBooks.map(book => (
        <Book key={book.id} book={book} changeShelf={changeShelf} />
      ))}
    </ol>
  </div>
)

BooksGrid.propTypes = {
  thisClassName: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  shelfBooks: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
}

export default BooksGrid
