import express from "express";
import cors from "cors";

const port = 3001;
const server = express();

server.use(cors());
server.use(express.json());

const answers = [];

server.post("/api/create-answer", (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: "Missing 'data' field" });
  }

  answers.push(data);
  res.json({ status: 200 });
});

server.get("/api/answer", (_, res) => {
  const latest = answers[answers.length - 1];
  res.json({ data: latest });
});

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
