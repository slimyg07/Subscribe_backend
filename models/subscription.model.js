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
    frequency : {
        type: String,
        enum : ["WEEKLY", "DAILY", "MONTHLY", "YEARLY"],
        required : true,
        default : "MONTHLY"
    },
    status : {
        type: String,
        enum : ["ACTIVE", "EXPIRED", "CANCELLED"],
        default : "ACTIVE"
    },
     startDate : {
        type : Date,
        required : true,
        validate : {
            validator : (value) => value <= new Date(),
            message : 'Start date must be in the past',
        }

    },

     renewalDate : {
        type : Date,
        validate : {
            validator : function(value){
                return value > this.startDate;
            },
            message : 'Start date must be in the past',
        },

    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
        index : true,
    }
    
}, {timestamp : true})


subscriptionSchema.pre("save", async function(next){
    if(!this.renewalDate){
        renewalPeriod = {
            "DAILY" : 1,
            "WEEKLY" : 7,
            "MONTHLY" : 30,
            "YEARLY" : 365
        }
    }

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate + renewalPeriod)[this.frequency];

    if(this.renewalDate < new Date()){
        this.status = "EXPIRY";
    }

    next();
})


const Subscription = mongoose.model("Subscription", subscriptionSchema);



export default Subscription;

