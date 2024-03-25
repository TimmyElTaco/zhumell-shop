import mongoose from "mongoose";
import User from "../models/User.js";
import emailConfirmation from "../helpers/emailConfirmation.js";

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

        emailConfirmation({
            name,
            email,
            token: newUser.token
        });

        await newUser.save();
        res.json({ msg: 'User created' });

    } catch (error) {
        res.status(500).json({ msg: 'Error creating user' });
    }
}

export const confirm = async(req, res) => {
    const { token } = req.params;

    const user = await User.findOne({ token });

    if(!user) {
        return res.status(400).json({ msg: 'User not found' });
    }

    try {
        user.token = null;
        user.confirm = true;
        await user.save();

        return res.json({ msg: 'User confirmed!' });
    } catch (error) {
        console.error(error);
    }
}

/*
    TODO:
    - Add forgot password
*/
