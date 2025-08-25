// server/routes/userRoutes.js
import express from "express";
import { checkAuth, login, signup, updateProfile, getUsers } from "../controllers/userController.js";
import { protectRoute } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkAuth);

// ✅ add this route for fetching all users except the logged-in one
userRouter.get("/", protectRoute, getUsers);

export default userRouter;
