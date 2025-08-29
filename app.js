import express from "express";
const app = express();
import { NODE_ENV, PORT } from "./config/env.js";


app.get("/", (req,res) => {
   
    res.send("<h1>Harshvardhan</h1>");
});


app.listen(3000,"0.0.0.0", ()=>{
    console.log(`App running at https://localhost:${PORT} in ${NODE_ENV} mode  `);

}
)


export default app;
