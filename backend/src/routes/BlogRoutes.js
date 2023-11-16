const express = require("express");
const {
  getAllBlogs,
  createBlog,
  insertManyBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/getAll").get(getAllBlogs);
router.route("/create").post(createBlog);
router.route("/insertMany").post(insertManyBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
