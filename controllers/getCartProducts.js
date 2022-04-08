const User = require("../models/user");
const getCartProducts = async (req, res) => {
	const post = req.body;
	console.log(req.user.id);
	const user = new User({ cart: post });
	user.save();
	res.json(user);
};
module.exports = getCartProducts;
