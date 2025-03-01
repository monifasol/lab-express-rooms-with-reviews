const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    reviews: [] // TO DO
})

module.exports = model("Room", roomSchema);
