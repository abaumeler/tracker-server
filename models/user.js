const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        requred: true
    }
});

// Create a model
const User = mongoose.model('user', userShema);

// Export the model
module.exports = User;
