import mongoose from 'mongoose';
const model_name = 'Garden';
const { Schema } = mongoose;
import PlantIF from '../lib/plant';

const gardenSchema = new Schema({
    user: {
        type: String
    },
    cols: {
        type: Number,
    },
    rows: {
        type: Number
    },
    plants: {
        //i is the gridbox ind for location
        type: [{ PlantIF }],
        default: []
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