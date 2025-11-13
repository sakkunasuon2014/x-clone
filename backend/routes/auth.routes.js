import express from "express";
import {
  getMe,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);

router.get("/signup", signup);
router.post("/signup", signup);

router.get("/login", login);
router.post("/login", login);

router.get("/logout", logout);
router.post("/logout", logout);

export default router;
