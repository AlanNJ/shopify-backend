const User = require("../models/user");
const removeFromCart = async (req, res) => {
	const id = req.params._id;
	const user_id = req.body.headers.id;

	//console.log(req.headers.id);
	const user = await User.findOne({ _id: req.body.headers.id });
	//console.log(user);

	//  user.newCart.forEach((item) => {
	//  	if (item.post._id == id) {
	//  		user.newCart.pop();
	//  	}
	//  });

	User.findOneAndUpdate(
		{ _id: user_id },
		{
			$pull: { newCart: { "post.date": 1650554968730 } },
		},
		{ new: true },
		(err, userInfo) => {
			console.log(userInfo);
			let cart = userInfo.cart;
			let array = cart.map((item) => {
				console.log(item.id);
			});
		}
	);
};

module.exports = removeFromCart;
