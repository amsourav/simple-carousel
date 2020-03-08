import React from "react";

function getUnit(value) {
    if (typeof value === 'number') {
      return 'px';
    }
    return '';
  }

export default ({ size, horizontal }) => {
    const spacerStyles = {
      minHeight: !horizontal && size,
      minWidth: horizontal && size,
      flex: `0 0 ${size}${getUnit(size)}`,
    };
    return <div style={spacerStyles} />;
  };