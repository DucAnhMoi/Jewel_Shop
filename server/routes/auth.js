import routerExpress from "express";
import { login } from "../controllers/auth/login.js";
import { logout } from "../controllers/auth/logout.js";
import { register } from "../controllers/auth/register.js";

const router = routerExpress.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
