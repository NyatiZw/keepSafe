// server/models/geocoords.js

const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
	longitude: { type: Number, required: true },
	latitude: { type: Number, required: true }
});

const GeoCoords = mongoose.model('GeoCoords', geoSchema);

module.exports = GeoCoords;
