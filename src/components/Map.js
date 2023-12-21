// src/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoibnlhdGl6dyIsImEiOiJjbGx1bG9pdHkxOGFoM21vaDB3dTdleWdjIn0.1zwNUchW1TjY3eWK8Ygvcw';

		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11'
		});

		return () => map.remove();
	}, []);

	return <div id="map" style={{ width: '100%', height: '400px' }} />;
};


export default Map;
