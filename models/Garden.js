import mongoose from 'mongoose';
const model_name = 'Garden';
const { Schema } = mongoose;
const plantSchema = require('mongoose').model('Plant').schema;

const gardenSchema = new Schema({
    User: {
        type: String
    },
    Cols: {
        type: Number,
    },
    Rows: {
        type: Number
    },
    Plants: {
        //i is the gridbox ind for location
        type: [plantSchema, i]
    }
    
});

let Garden;
if (!modelAlreadyDeclared()) {
    Garden = mongoose.model(model_name, gardenSchema, 'Garden');
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

module.exports = Garden;