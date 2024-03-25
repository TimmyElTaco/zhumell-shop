import mongoose from "mongoose";
import User from "../models/User.js";

export const log = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    
    if(!user) {
        return res.status(404).json({ msg: 'User not found' });
    }

    if(await user.checkPassword(password)) {
        return res.json({ msg: 'Login success' });
    } else {
        return res.status(400).json({ msg: 'The email or the passwords are wrong' });
    }
}

export const register = async (req, res) => {
    const { name, email, password, passwordRepeat } = req.body;
    
    if([name, email, password].includes('')) {
        return res.status(400).json({ msg: 'Please complete all fields' });
    }

    if(password !== passwordRepeat) {
        return res.status(400).json({ msg: 'The passwords are not the same' });
    }

    if(password.length < 6) {
        return res.status(400).json({ msg: 'Password must be at least 6 characters' });
    }

    const user = await User.findOne({ email });

    if(user) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    try {

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.json({ msg: 'User created' });

    } catch (error) {
        res.status(500).json({ msg: 'Error creating user' });
    }
}



/*
    TODO:
    - Add forgot password
    - Add token confirmation
    - Add email confirmation
*/
