import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'product_model'
    },
    product_model: {
        type: String,
        enum: ['Telescopes', 'Binoculars', 'Accessories']
    },
    comment: {
        type: String,
        require: true
    }
});

const Comments = mongoose.model('Comments', commentsSchema);

export default Comments;
