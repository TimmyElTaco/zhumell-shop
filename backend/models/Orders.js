import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'product_model'
        },
        product_model: {
            type: String,
            enum: ['Telescopes', 'Binoculars', 'Accessories']
        },
        units: {
            type: Number,
            required: true
        }
    }],
    date: {
        type: Date,
        default: Date.now()
    }
});

const Orders = mongoose.model('Orders', ordersSchema);

export default Orders;