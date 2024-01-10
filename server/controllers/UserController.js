// server/controllers/UserController.js

const User = require('../models/User');

const UserController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find();
			res.json(users);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	createUser: async (req, res) => {
		const { username, email } = req.body;
		try {
			const newUser = new User({ username, email });
			await newUser.save();
			res.json(newUser);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = UserController;
