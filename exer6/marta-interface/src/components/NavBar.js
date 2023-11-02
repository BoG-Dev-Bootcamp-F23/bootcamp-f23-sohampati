import "./NavBar.css"
import React, { useState, useEffect } from 'react';
import stations from '../server/stationData.js';
import Station from './Station.js';

export default function NavBar(props) {
  const [selectedStation, setSelectedStation] = useState('All Stations');
  const color = props.color.toLowerCase();
  const [filteredTrains, setFilteredTrains] = useState([]);
  const allTrains = []; 
  useEffect(() => {
    // Filter trains based on the selected station
    if (selectedStation === 'All Stations') {
      setFilteredTrains(allTrains);
    } else {
      const filtered = allTrains.filter((train) => train.STATION === selectedStation);
      setFilteredTrains(filtered);
    }
  }, [selectedStation, allTrains]);

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
