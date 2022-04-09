const User = require("../models/user");
const getCartProducts = async (req, res) => {
	const id = req.body.id;
	console.log(id);

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
		User.findOne({ _id: id }, (err, userInfo) => {
			console.log(userInfo.cart);
			userInfo.cart.forEach((item) => {
				if (item._id == req.body.post._id) {
					console.log("Item already in cart");
				} else {
					User.findByIdAndUpdate(
						{ _id: req.body.id },
						{
							$push: {
								cart: req.body.post,
								date: Date.now(),
							},
						},
						{ new: true },
						(err, doc) => {
							if (err) {
								console.log(err);
							} else {
								console.log("item added successfully", doc);
							}
						}
					);
				}
			});
		});

		//  user.forEach((item) => {
		//  	//console.log("ff", item);
		//  	item.cart.forEach((i) => {
		//  		console.log("kk", i.post._id);
		//  		if (i.post._id == req.body.post._id) {
		//  			//res.json({ message: "sorry,Item is already in cart" });
		//  			console.log("hello");
		//  		} else {
		//  			console.log("hellooo");
		//  			const user = User.findOneAndUpdate(
		//  				{ _id: id },
		//  				{
		//  					$push: {
		//  						cart: {
		//  							post: req.body.post,
		//  							date: Date.now(),
		//  						},
		//  					},
		//  				},
		//  				{ new: true },
		//  				function (err, result) {
		//  					if (err) res.status(400).send("Something went wrong");
		//  					res.status(200).send("successfully added item to the cart");
		//  				}
		//  			);
		//  			console.log(user);
		//  		}
		//  	});
		//  });
	} catch (err) {
		console.log(err, "jjj");
	}
};
module.exports = getCartProducts;

////.then((result, err) => {
//	return res.status(200).send("successfull", result);
//});
