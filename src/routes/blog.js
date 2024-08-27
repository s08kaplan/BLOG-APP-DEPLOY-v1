"use strict"

const router = require("express").Router()
const blog = require("../controllers/blog")

router.route("/")
.get(blog.list)
.post(blog.create)

router.route("/:blogId")
.get(blog.read)
.put(blog.update)
.patch(blog.update)
.delete(blog.delete)

module.exports = router