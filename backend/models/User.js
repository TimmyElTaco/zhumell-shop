import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generateConfirmToken from "../helpers/generateConfirmToken.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: generateConfirmToken()
    },
    confirm: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function (passwordForm) {
    return await bcrypt.compare(passwordForm, this.password )
}

const User = mongoose.model("User", userSchema);
export default User;