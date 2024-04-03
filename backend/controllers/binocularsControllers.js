import mongoose from "mongoose";
import Binoculars from "../models/Binoculars.js";
import getComments from "../helpers/getComments.js";

export async function getBinoculars(req, res) {
    const binoculars = await Binoculars.find();
    res.json(binoculars);
}

export async function getBinocular(req, res) {
    const { product_id } = req.params;
  
    if(!mongoose.Types.ObjectId.isValid(product_id)) {
        return res.status(404).json({ msg: 'Binocular not found' });
    }
    
    const binoculars = await Binoculars.findById(product_id);

    if(!binoculars) {
        return res.status(404).json({ msg: 'Binocular not found' });
    }

    const comments = await getComments(product_id);
  
    return res.json({ binoculars, comments });
}