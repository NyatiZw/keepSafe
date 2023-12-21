// server/index.js


const express = require("express");
const path = require('path');
const https = require('https');
const fs = require('fs');
//const mongoose = require('mongoose');

const app = express();
const PORT = 3001;


//mongoose.connect('mongodb://localhost/keepSafeDB', {
//	useNewUrlParser: true,
//	useUnifiedTopology: true,
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
