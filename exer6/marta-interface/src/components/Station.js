import "./Station.css"
import React from 'react';

export default function Station({ stationName, onSelect, isSelected }) {
    const c = isSelected ? 'station selected' : 'station';
  return (
    <div className="station" onClick={() => onSelect(stationName)}>
      {stationName}
    </div>
  );
}
