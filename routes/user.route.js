import express from "express";
import {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/users", createUser);
userRouter.get("/users/:id", getUser);
userRouter.get("/users", getAllUsers);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
