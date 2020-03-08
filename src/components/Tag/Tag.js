import React from "react";
import "./Tag.css";

export default ({ message, clearable = false }) => {
  return (
    <div className="Tag">
      <div className="TagText">{message}</div>
      {clearable && (
        <div className="TagClear">
          <i className="fas fa-times"></i>
        </div>
      )}
    </div>
  );
};
