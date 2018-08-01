import React, {Component} from 'react'

export default function Book (props) {
  const {imageUrl} = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">To Kill a Mockingbird</div>
      <div className="book-authors">Harper Lee</div>
    </div>
  )
}
