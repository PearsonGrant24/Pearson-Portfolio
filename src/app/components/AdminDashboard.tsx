// src/components/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
//import "./AdminDashboard.scss";

type Project = {
  id: string;
  title: string;
  shortDescription?: string;
  details?: {
    implementation?: string;
    results?: string;
    images?: string[];
  };
  technologies?: string[];
  github?: string;
  demo?: string;
  coverImage?: string;
};

const API = "http://localhost:5000";

export default function AdminDashboard(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const defaultForm = {
    id: "",
    title: "",
    shortDescription: "",
    implementation: "",
    results: "",
    techs: "",
    github: "",
    demo: "",
    coverImage: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => loadProjects(), []);

  function loadProjects() {
    setLoading(true);
    fetch(`${API}/projects`)
      .then((r) => r.json())
      .then((data) => setProjects(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }

  // file selection handler
  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = e.target.files ? Array.from(e.target.files) : [];
    setFiles(list);
    setPreviewUrls(list.map((f) => URL.createObjectURL(f)));
  }

  function resetForm() {
    setForm(defaultForm);
    setFiles([]);
    setPreviewUrls([]);
    setEditing(false);
  }

  async function submitForm(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!form.title || !form.shortDescription) {
      alert("Title and short description required");
      return;
    }

    // prepare payload (data field)
    const payload: any = {
      title: form.title,
      shortDescription: form.shortDescription,
      implementation: form.implementation,
      results: form.results,
      technologies: form.techs.split(",").map((s) => s.trim()).filter(Boolean),
      github: form.github,
      demo: form.demo,
      coverImage: form.coverImage,
    };

    try {
      const fd = new FormData();
      fd.append("data", JSON.stringify(payload));
      files.forEach((f) => fd.append("images", f));

      const url = editing ? `${API}/projects/${form.id}` : `${API}/projects`;
      const method = editing ? "PUT" : "POST";

      const res = await fetch(url, { method, body: fd });
      if (!res.ok) throw new Error("Save failed");
      const json = await res.json();
      loadProjects();
      resetForm();
      alert("Saved");
    } catch (err) {
      console.error(err);
      alert("Save failed. Check backend console.");
    }
  }

  async function startEdit(p: Project) {
    setEditing(true);
    setForm({
      id: p.id,
      title: p.title ?? "",
      shortDescription: p.shortDescription ?? "",
      implementation: p.details?.implementation ?? "",
      results: p.details?.results ?? "",
      techs: (p.technologies || []).join(", "),
      github: p.github ?? "",
      demo: p.demo ?? "",
      coverImage: p.coverImage ?? "",
    });
    setPreviewUrls(p.details?.images ?? []);
    setFiles([]);
  }

  async function deleteProject(id: string) {
    if (!window.confirm("Delete this project?")) return;
    try {
      const res = await fetch(`${API}/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      loadProjects();
    } catch (e) {
      console.error(e);
      alert("Delete failed");
    }
  }

  return (
    <div className="admin-wrap">
      <div className="admin-header">
        <h1>Admin — Projects</h1>
        <div className="admin-actions">
          <button className="btn" onClick={() => { resetForm(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            + New Project
          </button>
        </div>
      </div>

      <form className="admin-form card" onSubmit={(e) => submitForm(e)}>
        <div className="form-row">
          <label>Title</label>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>

        <div className="form-row">
          <label>Short description</label>
          <input value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
        </div>

        <div className="form-row">
          <label>Implementation (details)</label>
          <textarea value={form.implementation} onChange={(e) => setForm({ ...form, implementation: e.target.value })} rows={5} />
        </div>

        <div className="form-row">
          <label>Results / Outcome</label>
          <textarea value={form.results} onChange={(e) => setForm({ ...form, results: e.target.value })} rows={3} />
        </div>

        <div className="form-row">
          <label>Technologies (comma separated)</label>
          <input value={form.techs} onChange={(e) => setForm({ ...form, techs: e.target.value })} />
        </div>

        <div className="form-row">
          <label>Github</label>
          <input value={form.github} onChange={(e) => setForm({ ...form, github: e.target.value })} />
        </div>

        <div className="form-row">
          <label>Live demo</label>
          <input value={form.demo} onChange={(e) => setForm({ ...form, demo: e.target.value })} />
        </div>

        <div className="form-row">
          <label>Cover image (URL) — optional</label>
          <input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} />
        </div>

        <div className="form-row">
          <label>Upload images (screenshots) — optional</label>
          <input type="file" onChange={onFilesChange} accept="image/*" multiple />
          <div className="previews">
            {previewUrls.map((u, i) => (
              <div key={i} className="preview">
                <img src={u} alt={`preview-${i}`} />
                {/* if you want an option to remove preview, add a remove button here */}
              </div>
            ))}
          </div>
        </div>

        <div className="form-row row-actions">
          <button type="submit" className="btn btn-primary">{editing ? "Update Project" : "Create Project"}</button>
          <button type="button" className="btn" onClick={() => resetForm()}>Reset</button>
        </div>
      </form>

      <h2 className="section-title">Existing Projects</h2>

      {loading ? <p>Loading…</p> : (
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="card-media">
                <img src={p.coverImage || (p.details && p.details.images && p.details.images[0]) || "/placeholder.png"} alt={p.title} />
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="muted">{p.shortDescription}</p>
                <div className="pills">
                  {(p.technologies || []).map((t) => <span key={t} className="pill">{t}</span>)}
                </div>
                <div className="card-actions">
                  <button className="btn" onClick={() => startEdit(p)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => deleteProject(p.id)}>Delete</button>
                  <a className="btn btn-outline" href={`/projects/${p.id}`}>View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
