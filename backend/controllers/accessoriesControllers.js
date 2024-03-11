import mongoose from 'mongoose';
import Accessories from '../models/Accessories.js';

export async function getAccessories(req, res) {
    const accessories = await Accessories.find();
    res.json({ msg: accessories });
}

export async function getAccessory(req, res) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: 'Accessory not found!' })
    }

    const accessory = await Accessories.findById(id);
    
    if(!accessory) {
        return res.status(404).json({ msg: 'Accessory not found!' })
    }

    res.json(accessory);
}