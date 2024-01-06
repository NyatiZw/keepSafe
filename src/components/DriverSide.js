// src/components/DriverSide.js

import React from 'react';

function DriverSide() {
	const handleButtonClick = () => {
		async function getRoute(end) {
			const query = await fetch(
				`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
				{ method: 'GET' }
			);
			const json = await query.json();
			const data = json.routes[0];
			const route = data.geometry.coordinates;
			const geojson = {
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'LineString',
					coordinates: route
				}
			};
			if (map.getSource('route')) {
				map.getSource('route').setData(geojson);
			} else {
				map.addLayer({
					id: 'route',
					type: 'line',
					source: {
						type: 'geojson',
						data: geojson
					},
					paint: {
						'line-color': '#3887be',
						'line-width': 5,
						'line-opacity': 0.75
					}
				});
			}
			// add turn instructions here
		}

		map.on('load', () => {
			getRoute(start);

			map.addLayer({
				id: 'point',
				type: 'circle',
				source: {
					type: 'geojson',
					data: {
						type: 'FeatureCollection',
						features: [
							{
								type: 'Feature',
								properties: {},
								geometry: {
									type: 'Point',
									coordinates: start
								}
							}
						]
					}
				},
				paint: {
					'circle-radius': 10,
					'circle-color': '#3887be'
				}
			});

			map.on('click', (event) => {
				const coords = Object.keys(event.lngLat).map((key) =>
					event.lngLat[key]);
				const end = {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								type: 'Point',
								coordinates: coords
							}
						}
					]
				};

				if (map.getLayer('end')) {
					map.getSource('end').setData(end);
				} else {
					map.addLayer({
						id: 'end',
						type: 'circle',
						source: {
							type: 'geojson',
							data: {
								type: 'FeatureCollection',
								features: [
									{
										type: 'Feature',
										properties: {},
										geometry: {
											type: 'Point',
											coordinates: coords
										}
									}
								]
							}
						},
						paint: {
							'circle-radius': 10,
							'circle-color': '#f30'
						}
					});
				}
				getRoute(coords);
			});
	};

	return (
		<div>
		  <button onClick={handleButtonClick}>
		    Driver's Enter Here
		  </button>
		</div>
	);
}
export default DriverSide;
