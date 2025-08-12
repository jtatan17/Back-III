import { Router } from "express";
import { generatePetMocks } from "../controllers/petsMock.controller.js";
import { generateUserMocks } from "../controllers/usersMock.controller.js";
import { generateData } from "../controllers/generateData.controller.js";

const router = Router();

router.get("/mockingpets", generatePetMocks);
router.get("/mockingusers", generateUserMocks);
router.post("/generateData", generateData);

export default router;
