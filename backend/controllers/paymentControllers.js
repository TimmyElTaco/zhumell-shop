import Stripe from 'stripe';
import Telescope from '../models/Telescope.js';
import Binoculars from '../models/Binoculars.js';
import Accessories from '../models/Accessories.js';
import Orders from '../models/Orders.js';

export const createSession = async (req, res) => {
    const stripe = new Stripe(process.env.PAYMENT_API_KEY);

    const { products, id } = req.body;
    
    if(products.length < 1) {
        const error = new Error('Products not found');

        return res.status(404).json({ msg: error.message });
    }

    let line_items = [];
    let items = [];

    try {
        
        const promises = products.map(async (product) => {
            
            try {
                let item;
                if(product.units < 1) return
                
                if(product.category === 'telescopes') {
                    item = await Telescope.findById(product.id);
                } else if (product.category === 'binoculars') {
                    item = await Binoculars.findById(product.id);
                } else {
                    item = await Accessories.findById(product.id);
                }

                return {...item._doc, units: product.units};

            } catch (error) {
                return res.status(400).json({ msg: 'Error fetching the product' });
            }

        });

        const results = await Promise.all(promises);

        results.forEach(product => {
            const item = {
                price_data: {
                    product_data: {
                        name: product.category,
                        description: product.name
                    },
                    currency: 'usd',
                    unit_amount: ((product.units * product.price) * 100)
                },
                quantity: product.units
            }

            const category = product.category[0].toUpperCase() + product.category.slice(1);

            const itemData = {
                product_id: product._id,
                product_model: category,
                units: product.units
            }

            line_items.push(item);
            items.push(itemData);
        });

    } catch (e) {
        const error = new Error('Error creating session')
        return res.status(500).json({ msg: error.message });
    }

    const itemsJSON = JSON.stringify(items);

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        payment_intent_data: {
            metadata: {
                customer_id: id,
                itemsJSON
            }
        },
        success_url:`${process.env.FRONTEND_URL}/buy/success`,
        cancel_url: `${process.env.FRONTEND_URL}/`
    });
    return res.json(session.url);
}

export const addOrder = async (req, res) => {
    try {
        if (req.body.type === 'payment_intent.succeeded') {
            const paymentIntent = req.body.data.object;
            
            const metadata = paymentIntent.metadata;

            const { customer_id, itemsJSON } = metadata;

            const items = JSON.parse(itemsJSON);

            const newOrder = new Orders({ customer_id, items });

            await newOrder.save();

            res.status(200).end();
        } else {
            res.status(200).end();
        }
    } catch (error) {
        console.error('Error processing webhook event:', error);
        res.status(500).end();
    }
}