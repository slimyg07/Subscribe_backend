import { type } from "express/lib/response";
import timespan from "jsonwebtoken/lib/timespan";
import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    price : {
        type: Number,
        required : true,
    },
    currency : {
        type : String,
        enum : ["USD", "ISD", "EUR", "GBP"],
        required : true,
        default : "ISD"
    },
    

    
}, {timestamp : true})






export const Subscription = mongoose.model("Subscription", subscriptionSchema);

