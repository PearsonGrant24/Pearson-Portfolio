import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const SECRET = process.env.ADMIN_SECRET || "dev-secret";
const upload = multer({ dest: "public/uploads/" });
const PROJECTS_FILE = "./projects.json";

function saveProjects(data) {
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(data, null, 2));
}

// ---- AUTH ----
app.post("/login", (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    return res.json({ token: jwt.sign({ admin: true }, SECRET, { expiresIn: "2h" }) });
  }
  return res.status(401).json({ error: "Invalid password" });
});

function auth(req, res, next) {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).json({ error: "Unauthorized" });
  }
}

// ---- CRUD ----
app.get("/projects", (req, res) => {
  const data = JSON.parse(fs.readFileSync(PROJECTS_FILE));
  res.json(data);
});

app.post("/projects", auth, upload.single("coverImage"), (req, res) => {
  const projects = JSON.parse(fs.readFileSync(PROJECTS_FILE));
  const body = JSON.parse(req.body.data);

  const newProject = {
    ...body,
    id: Date.now().toString(),
    coverImage: req.file ? `/uploads/${req.file.filename}` : body.coverImage
  };

  projects.push(newProject);
  saveProjects(projects);
  res.json(newProject);
});

app.put("/projects/:id", auth, upload.single("coverImage"), (req, res) => {
  const projects = JSON.parse(fs.readFileSync(PROJECTS_FILE));
  const index = projects.findIndex((p) => p.id === req.params.id);

  if (index === -1) return res.status(404).send("Not found");

  const body = JSON.parse(req.body.data);

  projects[index] = {
    ...projects[index],
    ...body,
    coverImage: req.file ? `/uploads/${req.file.filename}` : projects[index].coverImage
  };

  saveProjects(projects);
  res.json(projects[index]);
});

app.delete("/projects/:id", auth, (req, res) => {
  let projects = JSON.parse(fs.readFileSync(PROJECTS_FILE));
  projects = projects.filter((p) => p.id !== req.params.id);
  saveProjects(projects);
  res.json({ message: "Project deleted" });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
