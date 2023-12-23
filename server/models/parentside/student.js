// models/student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	school: String,
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
	driver: {
		registrationNumber: {
			type: String,
			unique: true,
		},
	},
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
