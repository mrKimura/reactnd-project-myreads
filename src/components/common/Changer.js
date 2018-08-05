import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as Globals from "../../global_vars";

class Changer extends PureComponent {
  static propTypes = {
    thisBook: PropTypes.object.isRequired,
    defaultShelf: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
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
    const { thisBook } = this.props;
    const allChangerOptions = [...Globals.bookSections, noneValue];
    return allChangerOptions.map(item => (
      <option value={item.value} key={item.value + thisBook.id}>
        {item.content}
      </option>
    ));
  };

  handleChange = event => {
    const { thisBook, changeShelf } = this.props;
    thisBook.shelf = event.target.value;
    changeShelf(thisBook);
  };

  getChangerColor = () => {
    const { value } = this.state;
    return value === "none"
      ? "book-shelf-changer book-shelf-changer--unselected"
      : "book-shelf-changer book-shelf-changer--selected";
  };

  render() {
    return (
      <div className={this.getChangerColor()}>
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
