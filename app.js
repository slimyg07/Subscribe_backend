import express from "express";
import { NODE_ENV, PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";


const app = express();


app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get("/", (req,res) => {
   
    res.send("<h1>Harshvardhan</h1>");
});


app.listen(PORT, ()=>{
    console.log(`App running at http://localhost:${PORT} in ${NODE_ENV} mode  `);

}
)


export default app;
