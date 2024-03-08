import Telescope from "../models/Telescope.js";

export async function obtenerTelescopes(req, res) {
    const telescopes = await Telescope.find();
    
    res.json({ msg: telescopes });
} 