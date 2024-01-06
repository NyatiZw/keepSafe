// src/components/DriverSide.js

import React from 'react';
import mapboxgl from 'mapbox-gl';

import Map from "./Map.js";

function DriverSide({ handleAddMarker }) {
  const handleClick = () => {
    // Call function passed as a prop to add markers
    const marker = new mapboxgl.Marker({
      color: "FFFFFF",
      draggable: true
    }).setLngLat([-26.1, 27.9])
      .addTo(Map.map);
    if (handleAddMarker) {
      handleAddMarker();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Drivers Enter Here </button>
    </div>
  );
}

export default DriverSide;
