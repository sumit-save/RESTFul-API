const mongoose= require("mongoose");


const postsSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: [ true, "{PATH} is Required"] },
    description: { type: String, trim: true, required: [ true, "{PATH} is Required"] },
    tags: [ { type: String, trim: true, required: true } ],
    status: { type: String, trim: true, required: [ true, "{PATH} is Required"] },
    createdBy: { type: String, trim: true, required: [ true, "{PATH} is Required"] },
    createdAt: { type: Date, trim: true, required: [ true, "{PATH} is Required"] },
    editedBy: { type: String, trim: true },
    editedAt: { type: Date, trim: true }
}, { strict: true });


module.exports = mongoose.model("posts", postsSchema);