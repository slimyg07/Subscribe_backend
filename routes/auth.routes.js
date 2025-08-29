import { Router } from "express";

const authRouter = Router();


authRouter.post("/signup", (req,res) => {res.send("Sign-UP")} );

authRouter.post("/signin", (req,res) => {res.send("Sign-In")} );

authRouter.post("/signout", (req,res) => {res.send("Sign-Out")} );


export default authRouter ;

