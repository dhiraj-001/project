import express from "express";
import cors from "cors";

import developerRoutes from "./routes/developerRoutes.js";
import metricRoutes from "./routes/matricRoutes.js";
import insightRoutes from "./routes/insightRoutes.js";

const app = express();

app.use(cors());

app.use("/developers", developerRoutes);
app.use("/metrics", metricRoutes);
app.use("/insights", insightRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});