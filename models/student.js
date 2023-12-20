// models/student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	address: {
		type: {
			type: String,
			default: 'Point',
		},
		coordinates: {
			type: [Number],
			default: [0, 0],
		},
	},
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
