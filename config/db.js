// Do not expose your credentials in your code.
//karishma
//1ephGVbPfhnpTJpm

let atlasDB = "mongodb+srv://Karishma:1ephGVbPfhnpTJpm@cluster0.nfi8v.mongodb.net/test";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}