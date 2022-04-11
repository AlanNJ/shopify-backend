const User = require("../models/user");
const removeFromCart = async (req, res) => {
	const id = req.params._id;
	console.log(typeof id);

	//console.log(req.headers.id);
	const user = await User.findOne({ _id: req.headers.id });
	//console.log(user.newCart);

	// user.newCart.forEach((item) => {
	// 	if (item.post._id == id._id) {
	// 		const itemToDelete = item;
	// 	}
	// });

	User.updateOne(
		{ _id: "6252d87e010b3f94adcf4e41" },
		{
			$pull: {
				"newCart.post": {
					_id: "6249e216c1e3b6ae2d4aa273",
				},
			},
		},
		{ new: true }
	).then((res) => console.log(res, user));
};
module.exports = removeFromCart;
