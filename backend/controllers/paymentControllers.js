import Stripe from 'stripe';
import Telescope from '../models/Telescope.js';
import Binoculars from '../models/Binoculars.js';
import Accessories from '../models/Accessories.js';


export const createSession = async (req, res) => {
    const stripe = new Stripe(process.env.PAYMENT_API_KEY);
    
    if(req.body.length < 1) {
        const error = new Error('Products not found');

        return res.status(404).json({ msg: error.message });
    }

    let line_items = [];

    try {
        
        const promises = req.body.map(async (product) => {
            
            try {
                let item;
                if(product.category === 'telescope') {
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

            line_items.push(item);
        });

    } catch (e) {
        const error = new Error('Error creating session')
        return res.status(500).json({ msg: error.message });
    }

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url:`${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}/`
    })
    return res.json(session.url);
}