import "./Station.css"
import React from 'react';

export default function Station({ stationName, onSelect, isSelected }) {
  const stationStyle = {
    backgroundColor: isSelected ? 'blue' : '#231f20',
  };

  return (
    <div
      className="station"
      style={stationStyle}
      onClick={() => onSelect(stationName)}
    >
      {stationName}
    </div>
  );
}
