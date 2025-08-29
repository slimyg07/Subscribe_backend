import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        trim : true

    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },

},{timestamps: true})


export const User = mongoose.model("User", userSchema);