import connectDB from '../../../lib/mongodb';
require('../../../models/Garden');
import mongoose from 'mongoose';
const Garden = mongoose.model('Garden');

export default async function handler(req, res) {
    await connectDB();
    try {
        const garden = await Garden.findOne({user: 'test'});
        if (garden) {
            res.status(201).json({ success: true, body: garden, message: "here are all of the plants" });
        }
        else {
            res.status(400).json({ success: false, message: "bad" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}