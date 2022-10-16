import connectDB from '../../../lib/mongodb';
require('../../../models/Garden');
import mongoose from 'mongoose';
const Garden = mongoose.model('Garden');
import PlantIF from '../../../lib/plant'

export default async function handler(req, res) {
    console.log('HELP!')
    await connectDB();
    try {
        const data : PlantIF = {
            idx: req.idx, name: req.name, image_link: req.image_link, moisture: req.moisture, exposure: req.exposure
        };
        console.log('good data');
        let temp : PlantIF[] = [];
        if (req.prevPlants && req.prevPlants?.length > 0) temp = [...req.prevPlants];
        temp.push(data);
        console.log('temp??');
        const updateObj = {
            user: 'test',
            cols: 6,
            rows: 6,
            plants: [...temp]
        };
        console.log('update');
        console.log(updateObj)
        let garden : any = await Garden.findOneAndUpdate({ user: 'test' }, updateObj, { overwrite: true });
        console.log(garden);
        garden.save();
        res.status(201).json({success: true, body: garden, message: "goodbye"})
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}