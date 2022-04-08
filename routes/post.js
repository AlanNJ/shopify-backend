const express = require("express");

const getAllPosts = require("../controllers/getAllPosts");
const getSinglePost = require("../controllers/getSinglePost");
const uploadPost = require("../controllers/uploadPost");
const getCartProducts = require("../controllers/getCartProducts");

const router = express.Router();
router.get("/get-post", getAllPosts);
router.post("/upload-post", uploadPost);
router.get("/get-single-post/:_id", getSinglePost);
router.post("/add-to-cart", getCartProducts);

module.exports = router;
