import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/dashboard", (_req, res) => {
  res.json({
    users: 1250,
    revenue: 45200,
    orders: 340,
    growth: 12.5,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
