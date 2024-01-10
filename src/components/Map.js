// src/components/Map.js

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
	const mapContainer = useRef(null);
	const mapRef = useRef(null);

	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoibnlhdGl6dyIsImEiOiJjbGx1bG9pdHkxOGFoM21vaDB3dTdleWdjIn0.1zwNUchW1TjY3eWK8Ygvcw';

		const map = new mapboxgl.Map({
			container: mapContainer.current,
			center: [27.925, -26.20],
			zoom: 10
		});
		
		mapRef.current = map;
		
		map.on('style.load', () => {
			console.log('Map Style Loaded');
			map.setConfigProperty('basemap', 'lightPreset', 'dusk', 'showPointsOfInterestLabels', true, 'showTransitLabels', true);
		});

		return () => {
			if (mapRef.current) {
				mapRef.current.remove();
			}
		};
	}, []);

	return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />;
};

Map.onMapLoad = () => {
	console.log('onMapLoad function exposed!');
};

Map.getMap = () => {
	console.log('getMap function exposed!');
};

export default Map;
