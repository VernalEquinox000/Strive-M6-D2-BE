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
        headLine: {
            type: String,
            required: true,
        },
        subHead: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        author: {
            name: {
                type: String,
            },
            img: {
                type: String
            },
            cover: {
                type: String,
            }
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Article", ArticleSchema)