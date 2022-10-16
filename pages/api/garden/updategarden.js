import connectDB from '../../../lib/mongodb';
require('../../../models/Garden');
import mongoose from 'mongoose';
const Garden = mongoose.model('Garden');

export default async function handler(req, res) {
    console.log('HELP!')
    await connectDB();
    try {
        // let preGard = await Garden.findOne({ user: 'test' });
        // console.log(preGard);
        // console.log(req.body)
        // //let temp = preGard.image_links;
        // let newlinks = ['']*16;
        // for (let j = 0; j < 16; j++) {
        //     if (req.body.i === j) {
        //         console.log('upd')
        //         newlinks[j] = req.body.image_link
        //     }
        //     else {
        //         newlinks[j] = preGard.image_links[j]
        //     }
        // }
        // const updateObj = {
        //     user: 'test',
        //     cols: 4,
        //     rows: 4,
        //     plants: newlinks
        // // };
        // console.log('update');
        // console.log(updateObj)
        let arrspot = `image_links.${req.body.i}`
        let garden = await Garden.findOneAndUpdate({ user: 'test' }, { $set: {[arrspot] : req.body.image_link} });
        console.log(garden);
        garden.save();
        res.status(201).json({success: true, body: garden, message: "goodbye"})
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}