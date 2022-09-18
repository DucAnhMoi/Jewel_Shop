import routerExpress from "express";
import { authController } from "../controllers/auth.js";

const router = routerExpress.Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.post("/resetpassword", authController.resetPasswordUser);

export default router;
