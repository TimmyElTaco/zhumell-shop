import mongoose from "mongoose";

const telescopesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    aperture: {
        type: Number,
    },
    type: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
    },
    focalLength: {
        type: Number,
        field: 'focal_length'
    },
    focalRadio: {
        type: Number,
        field: 'focal_radio'
    },
    weight: {
        type: Number,
    },
    images: {
        type: [String],
    }
});

const Telescope = mongoose.model('Telescope', telescopesSchema);

export default Telescope;