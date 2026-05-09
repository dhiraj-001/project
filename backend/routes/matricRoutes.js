import express from "express";
import { calculateMetrics } from "../services/metricService.js";

const router = express.Router();

router.get("/:developerId", (req, res) => {
  const { developerId } = req.params;

  const metrics = calculateMetrics(developerId);

  res.json(metrics);
});

export default router;