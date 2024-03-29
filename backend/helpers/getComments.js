import Comments from "../models/Comments.js";
import User from "../models/User.js";

export default async function getComments(product_id) {
    try {
        
        const comments = await Comments.find({ product_id }).limit(5);
        
        const promises = comments.map( async (comment) => {
            const user = await User.findById(comment.customer_id, 'name');
            
            const item = {
                comment: comment.comment,
                name: user.name
            }

            return item
        } );

        const items = await Promise.all(promises);

        return items;

    } catch (e) {
        const error = new Error('Error getting the comments');
        return res.status(500).json({msg: error.message});
    }
}