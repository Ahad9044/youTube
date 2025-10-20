
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  const response = await fetch(
    `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(4000, () => console.log("Server running on port 4000"));
