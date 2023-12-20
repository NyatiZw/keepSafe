// server/index.js


const express = require("express");
const path = require('path');
const mongoose = require('mongoose');

const app = express();


const PORT = 3001;

mongoose.connect('mongodb://localhost/keepSafeDB', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'src/')));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'public/', 'index.html'));;
});

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on port ${PORT}`);
});
