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

    password:{
        type: String,
        required: true,
        minlength : 6
    }

},{timestamps: true})


userSchema.pre("save", async function name(next) {
    if(!this.modified("password")){
        return next();
    }

    const salt = bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password,salt);
    next();
    
    
}

)

const User = mongoose.model("User", userSchema);

export default User;