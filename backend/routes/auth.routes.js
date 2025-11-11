import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);

router.get("/login", (req, res) => {
  res.json({
    data: "You hit the login endpoint",
  });
});

router.get("/logout", (req, res) => {
  res.json({
    data: "You hit the logout endpoint",
  });
});
export default router;
