const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
 title : {
    type: String,
    required: true,
    minlenght: 6,
 },
 text : {
    type: String,
    minlenght: 6,
 },
 author : {
    type: String,
    required: true,
 },

}, 
{
    timestamps :true,
    toJSON: {
        transform: (doc, ret) =>{
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }

    }
}
);

module.exports = mongoose.model("Post", postSchema)