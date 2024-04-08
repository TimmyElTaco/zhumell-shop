import Comments from "../models/Comments.js";

export default async function addComment(req, res) {
    const { comment, product_id, category, customer_id } = req.body;

    if([comment, product_id, category, customer_id].includes('')) {
        return res.json({ msg: 'Please complete all fields' })
    }

    const result = category[0].toUpperCase();
    const product_model = result + category.substring(1);

    try {
        const newComment = new Comments({ comment, product_id, product_model, customer_id });

        await newComment.save();

        return res.json({ msg: 'Comment send successfully' });
    } catch (e) {
        const error = new Error('Error fetching the comment');
        return res.status(400).json({ msg: error.message });
    }
}