import { Router } from "express";
import { validateJobInput } from "../middlewares/validationMiddleware.js";
const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getOneJob,
  updateJob,
} from "../controllers/jobController.js";

router.get("/", getAllJobs);
router.get("/:id", getOneJob);
router.post("/", validateJobInput, createJob);
router.patch("/:id", validateJobInput, updateJob);
router.delete("/:id", deleteJob);

export default router;
