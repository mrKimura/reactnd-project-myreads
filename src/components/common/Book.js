import React from 'react'
import PropTypes from 'prop-types'
import Changer from './Changer'

const Book = ({ changeShelf, book, book: { imageLinks, title, authors, shelf } }) => {
  const imageURL =
    imageLinks && imageLinks.smallThumbnail ? imageLinks.smallThumbnail : ''
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${imageURL})` }} />
          <Changer defaultShelf={shelf} thisBook={book} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors
            ? authors.map(author => (
                <span key={author} className="book-authors__author">
                  {author}
                </span>
              ))
            : null}
        </div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  changeShelf: PropTypes.func.isRequired,
}

export default Book
