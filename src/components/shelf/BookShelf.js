import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../common/BooksGrid'

class BookShelf extends Component {
  shouldComponentUpdate(nextProps) {
    const { shelfBooks } = this.props
    return !(
      nextProps.shelfBooks.every(el => shelfBooks.includes(el)) &&
      nextProps.shelfBooks.length === shelfBooks.length
    )
  }

  render() {
    const { shelfName, shelfBooks, changeShelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <BooksGrid
          thisClassName="bookshelf-books"
          shelfBooks={shelfBooks}
          changeShelf={changeShelf}
        />
      </div>
    )
  }
}

BookShelf.propTypes = {
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
  shelfName: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
}

export default BookShelf
