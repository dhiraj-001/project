import express from "express";

import { calculateMetrics } from "../services/metricService.js";

import { generateInsights } from "../services/insightService.js";

const router = express.Router();

router.get("/:developerId", (req, res) => {
  const { developerId } = req.params;

  const metrics =
    calculateMetrics(developerId);

  const insights =
    generateInsights(metrics);

  res.json(insights);
});

export default router;