const User = require("../models/user");
const getCartProducts = async (req, res) => {
	const id = req.body.id;

	//  const user = await User.findOneAndUpdate(
	//  	{ _id: id },
	//  	{
	//  		$push: {
	//  			cart: {
	//  				post: req.body.post,
	//  				date: Date.now(),
	//  			},
	//  		},
	//  	},
	//  	{ new: true }
	//  );
	//  console.log(user);
	//  res.json({ user });
	try {
		const user = await User.find({ _id: id });

		user.forEach((item) => {
			item.cart.forEach((i) => {
				//console.log(i.post._id);
				if (i.post._id == req.body.post._id) {
					res.status(400).send({ message: "sorry,Item is already in cart" });
					console.log("hello");
				} else {
					//console.log("hello");
					User.findByIdAndUpdate(
						{ _id: id },
						{
							$push: {
								cart: {
									post: req.body.post,
									date: Date.now(),
								},
							},
						},
						{ new: true }
					).then((result) => {
						return res.status(200).send({ message: "successfull", result });
					});
				}
			});
		});
	} catch (err) {
		console.log(err, "jjj");
	}
};
module.exports = getCartProducts;
