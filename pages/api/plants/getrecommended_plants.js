import connectDB from '../../../lib/mongodb';
require('../../../models/Plant');
import mongoose from 'mongoose';
const Plant = mongoose.model('Plant');

export default async function handler(req, res) {
    await connectDB();
    try {
        const data = { moisture_level: req.body.moisture, exposure_level: req.body.exposure };
        const plants = await Plant.find(data);
        if (plants) {
            res.status(201).json({ success: true, body: plants, message: "here are all of the plants satisfied" });
        }
        else {
            res.status(400).json({ success: false, message: "bad" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}