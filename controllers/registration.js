const req = require("express/lib/request");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
	try {
		const { name, email, phone, password } = req.body;
		if (!name || !email || !password || !phone) {
			res.status(400).send(res.json("Invalid attempt"));
		} else {
			const user = await new User({ name, email, password, phone });
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(user.password, salt);
			user.save().then(() => (user.password = undefined));
			//user.password = undefined;

			res.json({
				ok: true,
				user: user,
				message: "registration successfull",
			});
		}
	} catch (err) {
		() => console.log(err);
	}
};
module.exports = register;
