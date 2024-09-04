const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
   
    name : {
        type : String
    },

    isPersonal : {
        type : Boolean,
        default : false
    }
});

const chat = mongoose.model('Group', GroupSchema);

module.exports = chat;