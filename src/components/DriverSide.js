// src/components/DriverSide.js

import React, { useEffect, useState } from 'react';
import Map from './Map.js';
import mapboxgl from 'mapbox-gl';

function DriverSide() {
	const [coordinates, setCoordinates] = useState(null);

	useEffect(() => {

		// Call the geolocation function to trigger geolocation
		getLocation();

		const map = new mapboxgl.Map({
			container: 'root',
			center: [27.925, -26.20],
			zoom: 10
		});
		
		const marker1 = new mapboxgl.Marker()
		  .setLngLat([27.9, -26.14])
		  .setPopup(new mapboxgl.Popup().setHTML("<h1>Pupil A!</h1>"))
		  .addTo(map);

		const marker2 = new mapboxgl.Marker({color:'black'})
		  .setLngLat([27.9290, -26.0213])
		  .setPopup(new mapboxgl.Popup().setHTML("<h1>SCHOOL</h1>"))
		  .addTo(map);

		const markerA1 = new mapboxgl.Marker({color: 'blue'})
		  .setLngLat([27.9256, -26.0792])
		  .setPopup(new mapboxgl.Popup().setHTML("<h1>Pupil B!</h1>"))
		  .addTo(map);

		const markerA2 = new mapboxgl.Marker({color: 'blue'})
		  .setLngLat([27.9070, -26.0766])
		  .setPopup(new mapboxgl.Popup().setHTML("<h1>Pupil C!</h1>"))
		  .addTo(map);

		return () => {
			if (map) {
				map.remove();
			}
		};
	}, []);

	function showPosition(position) {
		const latlon = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		};

		console.log('Latitude and Longitude:', latlon);
		setCoordinates(latlon);
	}

	async function saveCoordinates(coordinates) {
		try {
			const response = await fetch('https://keepSafeDB/save-coordinates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(coordinates)
			});

			if (response.ok) {
				console.log('Coordinates saved successfully!');
			} else {
				console.error('Failed to save coordinates:', response.statusText);
			}
		} catch (error) {
			console.error('Error saving coordinates:', error.message);
		}
	}
	
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(showPosition);
		} else {
			console.log('Geolocation is not supported by this browser.')
		}
	}

	return (
		<div>
		  <h2>DriverSide Tracking</h2>
		  <Map />
		</div>
	);
}

export default DriverSide;
