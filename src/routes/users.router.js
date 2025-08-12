import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

router.get("/", usersController.getAllUsers);
router.post("/create", usersController.createUser);
router.get("/:uid", usersController.getUser);
router.put("/:uid", usersController.updateUser);
router.delete("/:uid", usersController.deleteUser);

export default router;
