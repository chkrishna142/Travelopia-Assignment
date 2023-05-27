const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({

    name: String,
    emailid: String,
    place: String,
    travellers: Number,
    budget: Number,
    total: Number,


})


const formModel = mongoose.model("formdata", formSchema);

module.exports = { formModel };