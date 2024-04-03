import mongoose from 'mongoose';
import Accessories from '../models/Accessories.js';
import getComments from '../helpers/getComments.js';

export async function getAccessories(req, res) {
    const accessories = await Accessories.find();
    res.json(accessories);
}

export async function getAccessory(req, res) {
    const { product_id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(product_id)) {
        return res.status(404).json({ msg: 'Accessory not found!' })
    }

    const accessories = await Accessories.findById(product_id);
    
    if(!accessories) {
        return res.status(404).json({ msg: 'Accessory not found!' })
    }

    const comments = await getComments(product_id);

    return res.json({ accessories, comments });
}