import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req,res ) => res.send("Get all subscriptions"));


subscriptionRouter.get("/user/:id", (req, res) => res.send("Get all user subscriptions"));


subscriptionRouter.post("/", (req, res) => res.send("Create user subscriptions"));


subscriptionRouter.get("/:subid", (req, res) => res.send("Get subscriptions details"));


subscriptionRouter.put("/:subid", (req, res) => res.send("Update subscriptions details"));

subscriptionRouter.delete("/:id", (req, res) => res.send("Delete a subscription"));


export default subscriptionRouter;

