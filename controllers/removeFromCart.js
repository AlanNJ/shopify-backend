const User = require("../models/user");
const removeFromCart = async (req, res) => {
	const id = req.params._id;

	//console.log(req.headers.id);
	const user = await User.findOne({ _id: req.body.headers.id });
	//console.log(user);

	//  user.newCart.forEach((item) => {
	//  	if (item.post._id == id) {
	//  		user.newCart.pop();
	//  	}
	//  });

	User.updateOne(
		{ _id: "6252d87e010b3f94adcf4e41" },
		{
			$pull: {
				newCart: {
					"post.id": "6249e216c1e3b6ae2d4aa273",
				},
			},
		},
		{ new: true }
	)
		.exec()
		.then((res) =>
			User.findOne({ _id: "6252d87e010b3f94adcf4e41" }).then((res) =>
				console.log(res)
			)
		);
};
module.exports = removeFromCart;
