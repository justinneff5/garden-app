import mongoose from 'mongoose';
const model_name = 'User';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        default: 0,
    }
});

let User;
if (!modelAlreadyDeclared()) {
    User = mongoose.model(model_name, userSchema, 'users');
}

function modelAlreadyDeclared() {
    try {
        mongoose.model(model_name); //throws err if model not defined
        return true;
    }
    catch (err) {
        return false;
    }
}

module.exports = User;