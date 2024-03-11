import Telescope from "../models/Telescope.js";
import mongoose from "mongoose";

export async function getTelescopes(req, res) {
    const telescopes = await Telescope.find();
    
    res.json({ msg: telescopes });
}

export async function getTelescope(req, res) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: 'Telescope not found' });
    }

    const telescope = await Telescope.findById(id);

    if(!telescope) {
        return res.status(404).json({ msg: 'Telescope not found' });
    }

    res.json(telescope);
}
