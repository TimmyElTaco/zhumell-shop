import mongoose from "mongoose";
import Binoculars from "../models/Binoculars.js";

export async function getBinoculars(req, res) {
    const binoculars = await Binoculars.find();
    res.json({ msg: binoculars });
}

export async function getBinocular(req, res) {
    const { id } = req.params;
  
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: 'Binocular not found' });
    }
    
    const binocular = await Binoculars.findById(id);

    if(!binocular) {
        return res.status(404).json({ msg: 'Binocular not found' });
    }
  
    res.json(binocular);
}