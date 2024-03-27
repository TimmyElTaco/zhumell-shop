import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export async function checkAuth( req, res, next ) {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.userAuth = await User.findById(decoded.id).select('-password -token -confirm');

            return next();

        } catch (e) {
            const error = new Error('Token no valido');
            res.status(403).json({ msg: error.message });
        }

        next();
    }

    if(!token) {
        const error = new Error("Invalid token or doesn't exist");
        res.status(403).json({ msg: error.message });
    }

    next();

}