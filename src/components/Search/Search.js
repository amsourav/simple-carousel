import React, { PureComponent } from "react";
import "./Search.css";

export default class Search extends PureComponent {
  handleChange = e => {};
  render() {
    return (
      <div className="SearchBox">
        <input
          className="Input"
          style={{
            border: "none"
          }}
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
