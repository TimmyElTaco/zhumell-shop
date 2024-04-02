import Accessories from "../models/Accessories.js";
import Binoculars from "../models/Binoculars.js";
import Telescope from "../models/Telescope.js";

export const getCatalog = async (req, res) => {
    const telescopes = await Telescope.find().limit(3);
    const binoculars = await Binoculars.find().limit(3);
    const accessories = await Accessories.find().limit(3);
    
    res.json({ telescopes, binoculars, accessories });
}