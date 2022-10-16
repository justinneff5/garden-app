import mongoose from 'mongoose';
const model_name = 'Plant';
const { Schema } = mongoose;

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    exposure: {
        type: String
    },
    exposure_level: {
        type: Number
    },
    moisture: {
        type: String
    },
    moisture_level: {
        type: Number
    },
    image_link: {
        type: String
    },
    mature_size: {
        type: String
    },
    bloom: {
        type: String
    },
    comments: {
        type: String
    }
});

let Plant;
if (!modelAlreadyDeclared()) {
    Plant = mongoose.model(model_name, plantSchema, 'PlantsRecommendation');
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

module.exports = Plant;