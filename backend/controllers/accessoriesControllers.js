import mongoose from 'mongoose';
import Accessories from '../models/Accessories.js';
import getComments from '../helpers/getComments.js';

export async function getAccessories(req, res) {
    const accessories = await Accessories.find();
    res.json(accessories);
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

    const comments = await getComments(product_id);

    return res.json({ accessory, comments });
}