const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")

/* {
             "_id": "string", // server generated
             "headLine": "string",
             "subHead": "string",
             "content": "string",
             "category": "string",
             "author": {
                 "name": "string",
                 "img": "string"
             },
             "cover": "string",
             "createdAt": Date, // server generated
             "updatedAt": Date // server generated
         } */

const ArticleSchema = new Schema(
    {
        headLine: String,
        subHead: String,
        content: String,
        category: String,
        author: {
                name: String,
                img: String
                },
        cover: String,
    }
)

module.exports = mongoose.model("Article", ArticleSchema)