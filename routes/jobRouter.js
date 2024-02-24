import { Router } from "express";
import {
  validateIdParam,
  validateJobInput,
} from "../middlewares/validationMiddleware.js";
const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getOneJob,
  updateJob,
} from "../controllers/jobController.js";

router.get("/", getAllJobs);
router.get("/:id", validateIdParam, getOneJob);
router.post("/", validateJobInput, createJob);
router.patch("/update/:id", validateJobInput, validateIdParam, updateJob);
router.delete("/delete/:id", validateIdParam, deleteJob);

export default router;
