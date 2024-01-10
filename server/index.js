// server/index.js


const express = require("express");
const path = require('path');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');

const GeoCoords = require('./models/geocoords');

const app = express();
const PORT = 3001;


mongoose.connect('mongodb://localhost:27017/keepSafeDB', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, 'src')));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const options = {
	key: fs.readFileSync('private-key.pem'),
	cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, app);

app.post('/save-coordinates', async (req, res) => {
	try {
		const { latitude, longitude } = req.body;

		const newCoords = new GeoCoords({ latitude, longitude });
		await newCoords.save();

		res.status(200).send('Coordinates saved successfully!');
	} catch (error) {
		console.error('Error saving coordinates:', error.message);
		res.status(500).send('Internal Server Error');
	}
});


server.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on port ${PORT}`);
});
