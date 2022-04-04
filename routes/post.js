const express = require("express");
const getAllPosts = require("../controllers/getAllPosts");
const uploadPost = require("../controllers/uploadPost");

const router = express.Router();
router.get("/get-post", getAllPosts);
router.post("/upload-post", uploadPost);

module.exports = router;
