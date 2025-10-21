
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  const response = await fetch(
    `${process.env.SEARCH_API}${query}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
