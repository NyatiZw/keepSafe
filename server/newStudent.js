const Student = require('./models/student');

const newStudent = new Student({
	name: 'Naya',
	age: 5,
	address: {
		coordinates: [latitude, longitude],
	},
	driver: {
		registrationNumber: 'ABC123',
	},
});

newStudent.save((err, saveStudent) => {
	if (err) {
		console.error(err);
	} else {
		console.log)'Student saved:', savedStudent);
	}
});
