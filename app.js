import express from "express";
import { NODE_ENV, PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import mongoose from "mongoose";
import dbConnect from "./config/mongodb.js";



const app = express();


app.use('/api/v1/users', authRouter);

app.use('/api/v1/subscriptions', subscriptionRouter);

app.get("/", async (req,res) => {
   
   
    res.send("<h1>Harshvardhan</h1>");
        

});



app.listen(PORT, ()=>{
    dbConnect();
    console.log(`App running at http://localhost:${PORT} in ${NODE_ENV} mode  `);
   

}
)


export default app;
