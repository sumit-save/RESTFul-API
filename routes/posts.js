const express = require("express");
const controller = require("../controllers/postsController");


const router = new express.Router();


// Add a new post
router.post("/", (req, res) => {
    controller.Add(req, res);
});


// Get all posts
router.get("/", (req, res) => {
    controller.All(req, res);
});


// Remove specific post
router.get("/:id", (req, res) => {
    controller.Show(req, res);
});


// Update specific post
router.put("/:id", (req, res) => {
    controller.Update(req, res);
});


// Remove specific post
router.delete("/:id", (req, res) => {
    controller.Remove(req, res);
});


module.exports = router;