import React, { Component } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

class SearchTopBar extends Component {
  static propTypes = {
    toggleSearch: PropTypes.func.isRequired,
    searchEngine: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  handleChange = event => {
    event.preventDefault();
    const { searchEngine } = this.props;
    const value = event.target.value.trim();
    this.setState(() => ({
      query: value
    }));
    searchEngine(value);
  };

  render() {
    const { query } = this.state;
    return (
      <div className="search-books-bar">
        <Link className="close-search" to='/'>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            autoFocus
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
export default SearchTopBar;
