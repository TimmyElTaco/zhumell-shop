import getComments from "../helpers/getComments.js";
import Telescope from "../models/Telescope.js";
import mongoose from "mongoose";

export async function getTelescopes(req, res) {
    const telescopes = await Telescope.find();
    
    res.json(telescopes);
}

export async function getTelescope(req, res) {
    const { product_id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(product_id)) {
        return res.status(404).json({ msg: 'Telescope not found' });
    }

    const telescopes = await Telescope.findById(product_id);

    if(!telescopes) {
        return res.status(404).json({ msg: 'Telescope not found' });
    }

    const comments = await getComments(product_id);

    return res.json({ telescopes, comments });
}
