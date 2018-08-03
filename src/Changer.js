import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Changer extends PureComponent {
  static propTypes = {
    changerOptions: PropTypes.array.isRequired,
    thisBook: PropTypes.object.isRequired,
    defaultShelf: PropTypes.string.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
  };

  state = {
    value: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.defaultShelf !== prevState.value) {
      return {
        value: nextProps.defaultShelf
      };
    }
    return null;
  }

  getChangerOptions = () => {
    const noneValue = {
      value: "none",
      content: "None"
    };
    const { changerOptions, thisBook } = this.props;
    const allChangerOptions = [...changerOptions, noneValue];
    return allChangerOptions.map(item => (
      <option value={item.value} key={item.value + thisBook}>
        {item.content}
      </option>
    ));
  };

  handleChange = event => {
    const { thisBook, handleChangeShelf } = this.props;
    thisBook.shelf = event.target.value;
    handleChangeShelf(thisBook)
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {this.getChangerOptions()}
        </select>
      </div>
    );
  }
}

export default Changer;
