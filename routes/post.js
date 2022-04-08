const express = require("express");

const getAllPosts = require("../controllers/getAllPosts");
const getSinglePost = require("../controllers/getSinglePost");
const uploadPost = require("../controllers/uploadPost");

const router = express.Router();
router.get("/get-post", getAllPosts);
router.post("/upload-post", uploadPost);
router.get("/get-single-post/:_id", getSinglePost);
router.get("/get-cart-products", getCartProducts);

module.exports = router;
