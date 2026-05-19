const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const leadRoutes = require("./routes/leadRoutes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://ai-auditor-gilt.vercel.app"],
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running",
  });
});

app.use("/api/leads", leadRoutes);
app.use(
  "/uploads",
  express.static("uploads")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});