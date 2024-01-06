// server/index.js


const express = require("express");
const path = require('path');
const https = require('https');
const fs = require('fs');
//const mongoose = require('mongoose');

const app = express();
const PORT = 3001;


//mongoose.connect('mongodb://localhost:27017/keepSafeDB', {
//	useNewUrlParser: true,
//	useUnifiedTopology: true,
//});

//const db = mongoose.connection;

//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//db.once('open', () => {
//  console.log('MongoDB connected successfully');
//});

app.use(express.static(path.join(__dirname, 'src')));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const options = {
	key: fs.readFileSync('private-key.pem'),
	cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, app);


server.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on port ${PORT}`);
});
