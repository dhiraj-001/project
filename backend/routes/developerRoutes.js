import express from "express";
import { getSheetData } from "../services/excelService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const developers = getSheetData("Dim_Developers");

  res.json(developers);
});

export default router;