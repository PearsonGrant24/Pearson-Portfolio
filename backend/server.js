// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import multer from "multer";

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(process.cwd(), "projects.json");
const UPLOAD_DIR = path.join(process.cwd(), "uploads");

// ensure upload dir exists
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// multer storage (preserve extension)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.random().toString(36).slice(2,8)}${ext}`;
    cb(null, name);
  },
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());

// serve uploaded files
app.use("/uploads", express.static(UPLOAD_DIR));

// safe read helper
function readProjects() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

// safe write helper
function writeProjects(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

/* ---- Routes ---- */

// friendly root
app.get("/", (req, res) => {
  res.send("Portfolio backend running");
});

// list projects
app.get("/projects", (req, res) => {
  const projects = readProjects();
  res.json(projects);
});

// create project (supports multipart/form-data)
app.post("/projects", upload.array("images"), (req, res) => {
  try {
    // Accept either JSON body or a 'data' field (JSON string) in multipart
    let payload = {};
    if (req.body && Object.keys(req.body).length > 0) {
      if (req.body.data) payload = JSON.parse(req.body.data);
      else payload = req.body;
    }

    // images: multer provides req.files
    const files = req.files || [];
    const uploadedPaths = files.map((f) => `/uploads/${f.filename}`);

    // ensure details structure
    const project = {
      id: `${Date.now()}`,
      title: payload.title || "Untitled",
      shortDescription: payload.shortDescription || payload.description || "",
      details: {
        implementation: payload.implementation || "",
        results: payload.results || "",
        images: payload.images || [], // allow passing image URLs in payload
      },
      technologies: payload.technologies || (payload.tools ? payload.tools.split(",").map(s => s.trim()).filter(Boolean) : []),
      github: payload.github || "",
      demo: payload.demo || "",
      coverImage: payload.coverImage || (uploadedPaths[0] || ""),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    // append uploaded file URLs to details.images (if any)
    if (uploadedPaths.length) {
      project.details.images = [...(project.details.images || []), ...uploadedPaths];
    }

    const projects = readProjects();
    projects.unshift(project);
    writeProjects(projects);

    res.json({ ok: true, project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

// update project (multipart allowed)
app.put("/projects/:id", upload.array("images"), (req, res) => {
  try {
    const id = req.params.id;
    let payload = {};
    if (req.body && Object.keys(req.body).length > 0) {
      if (req.body.data) payload = JSON.parse(req.body.data);
      else payload = req.body;
    }
    const files = req.files || [];
    const uploadedPaths = files.map((f) => `/uploads/${f.filename}`);

    const projects = readProjects();
    const idx = projects.findIndex((p) => p.id === id);
    if (idx === -1) return res.status(404).json({ ok: false, error: "Not found" });

    const existing = projects[idx];

    // merge
    const updated = {
      ...existing,
      title: payload.title ?? existing.title,
      shortDescription: payload.shortDescription ?? existing.shortDescription,
      details: {
        implementation: payload.implementation ?? existing.details?.implementation ?? "",
        results: payload.results ?? existing.details?.results ?? "",
        images: Array.isArray(payload.images) ? payload.images : (existing.details?.images ?? []),
      },
      technologies: Array.isArray(payload.technologies) ? payload.technologies : (payload.tools ? payload.tools.split(",").map(s=>s.trim()).filter(Boolean) : existing.technologies),
      github: payload.github ?? existing.github,
      demo: payload.demo ?? existing.demo,
      coverImage: payload.coverImage ?? existing.coverImage,
      updatedAt: Date.now()
    };

    // append newly uploaded paths
    if (uploadedPaths.length) {
      updated.details.images = [...(updated.details.images || []), ...uploadedPaths];
      if (!updated.coverImage) updated.coverImage = uploadedPaths[0];
    }

    projects[idx] = updated;
    writeProjects(projects);

    res.json({ ok: true, project: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

// delete project (and optionally delete uploaded files)
app.delete("/projects/:id", (req, res) => {
  try {
    const id = req.params.id;
    const projects = readProjects();
    const idx = projects.findIndex((p) => p.id === id);
    if (idx === -1) return res.status(404).json({ ok: false, error: "Not found" });
    const [removed] = projects.splice(idx, 1);

    // try remove uploaded images (best-effort)
    try {
      const imgs = removed.details?.images ?? [];
      imgs.forEach((imgPath) => {
        if (typeof imgPath === "string" && imgPath.startsWith("/uploads/")) {
          const filepath = path.join(UPLOAD_DIR, path.basename(imgPath));
          if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        }
      });
    } catch (e) {
      // ignore file delete errors
    }

    writeProjects(projects);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
