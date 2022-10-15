import connectDB from '../../../lib/mongodb';
require('../../../models/User');
import mongoose from 'mongoose';
const User = mongoose.model('User');

export default async function handler(req, res) {
    const { method } = req;
    await connectDB();
    if (method === 'POST') {
        try {
            const data = {
                username: req.body.username,
                password: req.body.password
            };
            const newUser = new User(data);
            newUser.save();
            res.status(201).json({success: true, message: 'user registered!'})
        }
        catch (err) {
            res.status(400).json({success: false, message: err.message})
        }
    }
}