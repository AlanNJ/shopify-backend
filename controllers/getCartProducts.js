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
		//console.log(user);

		user.forEach((item) => {
			item.cart.forEach((i) => {
				//console.log(i.post._id);
				if (i.post._id == req.body.post._id) {
					return res.json({ message: "sorry,Item is already in cart" });
					//console.log("hello");
				} else {
					console.log("hellooo");
					const user = User.findByIdAndUpdate(
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
						// (err, doc) => {
						// 	if (err) return res.status(400).send("failed");
						// 	return console.log(doc);
						// }
					).then((doc) => {
						return res.json(doc);
					});
					console.log(user);
				}
			});
		});
	} catch (err) {
		console.log(err, "jjj");
	}
};
module.exports = getCartProducts;

////.then((result, err) => {
//	return res.status(200).send("successfull", result);
//});
