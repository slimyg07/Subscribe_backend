import { Router } from "express";
import { signIn,signout,signup,getSingleuser,getUser } from "../controllers/user.controller";

const authRouter = Router();


authRouter.post("/signup", signup );


authRouter.post("/signin", signIn );


authRouter.post("/signout", signout );


authRouter.get("/users", getUser);


authRouter.get('/:id', getSingleuser);


authRouter.put("/:id", (req,res) => res.send("Update user details"));



authRouter.delete("/:id", (req,res) => res.send("Delete a User"));


export default authRouter ;

