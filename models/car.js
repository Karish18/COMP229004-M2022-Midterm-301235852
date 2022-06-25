// Import
let mongoose = require('mongoose');

// Create a model class
let carModel = mongoose.Schema(
    {
        make: String,
        model: String,
        year: String,
        kilometers: String,
        doors: String,
        seats: String,
        color: String,
        price: String       
    },
    {
        collection: "cars"
    }
);

module.exports = mongoose.model("Car", carModel);