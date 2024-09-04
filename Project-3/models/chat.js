const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    content : {
        type : String
    },

    sender : {
        type : String
    },

    roomid : {
        type : mongoose.Schema.Types.ObjectId
    }
});

const chat = mongoose.model('user', UserSchema);

module.exports = chat;