import { Router } from "express";

const userRouter = Router();


userRouter.get("/", (req, res)=> res.send("Get all user details"));


userRouter.get("/users", (req,res) => res.send("Fetch all users"));

userRouter.get('/:id', (req,res) => res.send("Fetch user details"));

userRouter.put("/:id", (req,res) => res.send("Update user details"));

userRouter.post("/", (req,res) => res.send("Create a new User"));

userRouter.delete("/:id", (req,res) => res.send("Delete a User"));


export default userRouter;