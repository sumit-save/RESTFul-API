const model = require("../models/postsModel");



const Add = async (req, res) => {

    const { title, description, tags, status, createdBy } = req.body;

    const newPost = new model({
        title: title,
        description: description,
        tags: tags,
        status: status,
        createdBy: createdBy,
        createdAt: new Date()
    });

    try {
        const savedPost = await newPost.save();
        return res.status(200).json({ success: true, message: "New Post Added Successfully" });
    } catch (err) {
        return res.status(400).json({ success: true, message: err.message });
    }

}


const All = async (req, res) => {

    try {
        const allPosts = await model.find({});
        return res.status(200).json({ success: true, data: allPosts });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }

}


const Show = async (req, res) => {

    let _id = req.params.id;

    try {

        const postExists = await model.findOne({ _id: _id });
        if (!postExists) {
            return res.status(400).json({ success: false, message: "Post Not Found"});
        }

        const specificPost = await model.findOne({ _id: _id });
        return res.status(200).json({ success: true, data: specificPost});

    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }

}


const Update = async (req, res) => {

    const { title, description, tags, status, createdBy, editedBy } = req.body;

    let _id = req.params.id;
    let newObject = {
        title: title,
        description: description,
        tags: tags,
        status: status,
        createdBy: createdBy,
        editedBy: editedBy,
        editedAt: new Date()
    };

    try {

        const postExists = await model.findOne({ _id: _id });
        if (!postExists) {
            return res.status(400).json({ success: false, message: "Post Not Found"});
        }

        const updatePost = await model.updateOne({ _id: _id }, { $set: newObject });
        return res.status(200).json({ success: true, message: "Post Updated Successfully"});

    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }

}


const Remove = async (req, res) => {

    let _id = req.params.id;

    try {

        const postExists = await model.findOne({ _id: _id });
        if (!postExists) {
            return res.status(400).json({ success: false, message: "Post Not Found"});
        }

        const removePost = await model.deleteOne({ _id: _id });
        return res.status(200).json({ success: true, message: "Post Removed Successfully"});
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }

}

module.exports = { Add, All, Show, Update, Remove };