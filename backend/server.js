import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "./projects.json";

// Get all projects
app.get("/projects", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8") || "[]");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error reading file", error: err });
  }
});

// Add new project
app.post("/projects", (req, res) => {
  try {
    const newProject = req.body;

    let data = fs.readFileSync(filePath, "utf8");
    data = data ? JSON.parse(data) : [];

    if (!Array.isArray(data)) data = [];

    data.push(newProject);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.json({ message: "Project added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving project", error: err });
  }
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
