import connectDB from '../../../lib/mongodb';
require('../../../models/User');
import mongoose from 'mongoose';
const User = mongoose.model('User');
import { hashPassword } from '../../../util/credentials';

export default async function handler(req, res) {
    const { method } = req;
    await connectDB();
    if (method === 'POST') {
        try {
            const hash = hashPassword(req.body.password);
            const data = {
                username: req.body.username,
                password: hash
            };
            const newUser = new User(data);
            await newUser.save();
            res.status(201).json({success: true, message: 'user registered!'})
        }
        catch (err) {
            res.status(400).json({success: false, message: err.message})
        }
    }
}