import express from "express";
import { getUserById, getUserByResumes, loginUser, registerUser } from "../controllers/UserController.js";
import protect from "../middleware/AuthMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/data", protect, getUserById)
userRouter.get("/resumes", protect, getUserByResumes)

export default userRouter;