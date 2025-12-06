import { useState } from "react";

export default function ProjectForm({ project, onSaved }: any) {
  const [form, setForm] = useState(project || {});
  const [file, setFile] = useState<File | null>(null);
  const token = localStorage.getItem("adminToken");

  async function submit() {
    const formData = new FormData();
    formData.append("data", JSON.stringify(form));
    if (file) formData.append("coverImage", file);

    const method = project ? "PUT" : "POST";
    const url = project
      ? `http://localhost:5000/projects/${project.id}`
      : `http://localhost:5000/projects`;

    await fetch(url, {
      method,
      headers: { Authorization: token ?? "" },
      body: formData
    });

    onSaved();
  }

  return (
    <div className="project-form">
      <input
        placeholder="Title"
        value={form.title || ""}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Description"
        value={form.description || ""}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />

      <button onClick={submit}>{project ? "Update" : "Create"}</button>
    </div>
  );
}
