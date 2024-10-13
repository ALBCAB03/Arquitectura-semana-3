const Post = require("../models/post.model")

module.exports.create = (req, res) => {
    Post.create(req.body)
        .then((post)=>{
            res.status(201).json(post);
        })
        .catch((error)=> {
            res.status(400).json(error);
        })
};

module.exports.list = (req, res) => {
    Post.find()
        .then((post)=>{
            res.status(200).json(post);
        })
        .catch((error)=> {
            res.status(500).json(error);
        })
};

module.exports.detail = (req, res) => {
    Post.findById(req.params.id)
        .then((post)=>{
            if (!post){
                return res.status(404).json({message:"Post not found"});
            }
            res.status(200).json(post);
        })
        .catch((error)=> {
            res.status(500).json(error);
        })
};

module.exports.update = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((post)=>{
            if (!post){
                return res.status(404).json({message:"Post not found"});
            }
            res.status(200).json(post);
        })
        .catch((error)=> {
            res.status(400).json(error);
        })
};

module.exports.delete = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then((post)=>{
            if (!post){
                return res.status(404).json({message:"Post not found"});
            }
            res.status(204).json(post);
        })
        .catch((error)=> {
            res.status(500).json(error);
        })
};