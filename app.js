import express from "express";
import { NODE_ENV, PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import mongoose from "mongoose";
import dbConnect from "./config/mongodb.js";
import {User} from "./models/user.model.js";


const app = express();


app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get("/", (req,res) => {
   
    res.send("<h1>Harshvardhan</h1>");
});

// const userprint = async () => {

//    const user = await User.find()
//    console.log(user);

// }


app.listen(PORT, ()=>{
    dbConnect();
    console.log(`App running at http://localhost:${PORT} in ${NODE_ENV} mode  `);
    // userprint();

}
)


export default app;
