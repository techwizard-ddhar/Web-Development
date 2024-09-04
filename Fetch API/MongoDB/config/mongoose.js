const mongoose = require("mongoose");

const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect("mongodb+srv://admin:uj158nUpNmzd6QNN@cluster05.nnhyc7s.mongodb.net/User_Data");

const db = mongoose.connection;

db.on("error", function(err){
    debuglog(err);
});

db.on("open", function(){
    debuglog("connected to the database")
});

module.exports = db;