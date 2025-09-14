import { Router } from "express";

const authRouter = Router();


authRouter.post("/signup", (req,res) => {res.send("Sign-UP")} );


authRouter.post("/signin", (req,res) => {res.send("Sign-In")} );


authRouter.post("/signout", (req,res) => {res.send("Sign-Out")} );


authRouter.get("/users", (req,res) => res.send("Fetch all users"));


authRouter.get('/:id', (req,res) => res.send("Fetch user details"));


authRouter.put("/:id", (req,res) => res.send("Update user details"));



authRouter.delete("/:id", (req,res) => res.send("Delete a User"));


export default authRouter ;

