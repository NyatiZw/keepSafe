// src/Map.js

import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
//import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoibnlhdGl6dyIsImEiOiJjbGx1bG9pdHkxOGFoM21vaDB3dTdleWdjIn0.1zwNUchW1TjY3eWK8Ygvcw';

		const map = new mapboxgl.Map({
			container: 'map',
			//style: 'mapbox://styles/mapbox/navigation-day-v1'
			center: [27.9, -26],
			zoom: 9,
		});

		map.on('style.load', () => {
			    map.setConfigProperty('basemap', 'lightPreset', 'dusk', 'showPointsOfInterestLabels', true, 'showTransitLabels', true);
		});

		return () => map.remove();
	}, []);

	return <div id="map" style={{ width: '100%', height: '100vh' }} />;
};


export default Map;
