import mongoose from "mongoose";

const binocularsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: Array,
        required: true,
        trim: true,
    },
    images: {
        type: Array,
        required: true,
        trim: true,
    },
    closeFocusDistance: {
        type: Number,
        required: true,
        field: 'close_focus_distance',
    },
    eyeRelief: {
        type: Number,
        field: 'eye_relief',
    },
    enviromentProtection: {
        type: String,
        field: 'enviroment_protection',
    }
});

const Binoculars = mongoose.model('Binoculars', binocularsSchema);
export default Binoculars