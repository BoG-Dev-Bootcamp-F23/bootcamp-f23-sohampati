import "./NavBar.css"
import React, { useState } from 'react';
import stations from '../server/stationData.js';
import Station from './Station.js';

export default function NavBar(props) {
  const [selectedStation, setSelectedStation] = useState('All Stations');
  const color = props.color.toLowerCase();

  const handleStationSelect = (stationName) => {
    setSelectedStation(stationName);
    
  };

  return (
    <div className="bar">
      <div className="selectStation">Select your starting station</div>
      <div className="stat">
        <Station stationName="All Stations" onSelect={handleStationSelect} isSelected={selectedStation === 'All Stations'} />
        {stations[color].map((station) => (
          <Station
            key = {station}
            stationName = {station}
            onSelect = {handleStationSelect}
            isSelected = {station === selectedStation}
          />
        ))}
      </div>
      
    </div>
  );
}
