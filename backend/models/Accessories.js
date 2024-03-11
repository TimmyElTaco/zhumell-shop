import mongoose from "mongoose";

const accessoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: Array,
        required: true,
        trim: true,
    }
});

const Accessories = mongoose.model("Accessories", accessoriesSchema);
export default Accessories