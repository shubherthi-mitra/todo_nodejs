import express from "express";
import { deleteUser, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile);

router.get("/deluser", isAuthenticated, deleteUser);

export default router;
