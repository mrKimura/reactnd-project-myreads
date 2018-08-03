import React from "react";
import PropTypes from "prop-types";
import Changer from "./Changer";

export default function Book(props) {
  const { imageLinks, title, authors, shelf } = props.book;
  const { changerOptions, handleChangeShelf, book } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${imageLinks.smallThumbnail})` }}
          />
          <Changer
            changerOptions={changerOptions}
            defaultShelf={shelf}
            thisBook={book}
            handleChangeShelf={handleChangeShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(',\n')}</div>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string.isRequired),
    shelf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  changerOptions: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
};
