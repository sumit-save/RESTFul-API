const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
require("dotenv/config");

const PORT = process.env.PORT || 8000;

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
const postsRoutes = require("./routes/posts");
app.use("/api/posts", postsRoutes);


// Create MonogoDB Connection with Atlas
mongoose.connect(process.env.DATABASE_URL, (err) => {
    if (err) throw err;
    console.log("MongoDB Atlas Service Connected Successfully");
})


// Server Started On Localhost:8080
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server Started On Localhost: ${PORT}`);
});