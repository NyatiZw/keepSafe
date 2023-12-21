// server/index.js


const express = require("express");
const path = require('path');
//const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


//mongoose.connect('mongodb://localhost/keepSafeDB', {
//	useNewUrlParser: true,
//	useUnifiedTopology: true,
//});

app.use(express.static(path.join(__dirname, 'build/')));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'build/', 'index.html'));;
});

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on port ${PORT}`);
});
