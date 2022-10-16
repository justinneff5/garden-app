import connectDB from '../../../lib/mongodb';
require('../../../models/User');
import mongoose from 'mongoose';
const User = mongoose.model('User');
import {comparePassword} from '../../../util/credentials'

export default async function handler(req, res) {
    const { method } = req;
    await connectDB();
    if (method === 'POST') {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (user) {
                if (comparePassword(req.body.password, user.password)) {
                    process.env.LOGGED_USER = user.username;
                    res.status(201).json({ success: true, status_code: 0, message: 'user logged in!'})
                }
                else {
                    res.status(400).json({success: false, status_code: 1, message: 'Invalid username/password.'})
                }
            }
            else {
                res.status(400).json({success: false, status_code: 2, message: 'Invalid username/password.'})
            }
            
        }
        catch (err) {
            res.status(400).json({success: false, status_code: 3, message: err.message})
        }
    }
}