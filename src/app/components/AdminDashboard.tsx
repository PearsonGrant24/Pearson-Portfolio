import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", image: "" });

  const load = async () => {
    const res = await fetch("/projects.json");
    const data = await res.json();
    setProjects(data);
  };

  const save = async (updatedData: any) => {
    await fetch("http://localhost:3000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    load();
  };

  const addProject = () => {
    if (!newProject.title) return alert("Project title required!");
    save([...projects, newProject]);
    setNewProject({ title: "", description: "", image: "" });
  };

  const deleteProject = (index: number) => {
    if (!window.confirm("Delete this project?")) return;
    save(projects.filter((_, i) => i !== index));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      {/* CREATE FORM */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Create New Project</h2>

        <input
          style={styles.input}
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />

        <textarea
          style={{ ...styles.input, height: 80 }}
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />

        <input
          style={styles.input}
          placeholder="Image URL"
          value={newProject.image}
          onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
        />

        <button style={styles.buttonPrimary} onClick={addProject}>
          ➕ Add Project
        </button>
      </div>

      {/* PROJECT LIST */}
      <h2 style={styles.sectionTitle}>Manage Projects</h2>

      <div>
        {projects.map((project: any, index: number) => (
          <div key={index} style={styles.projectRow}>
            <div>
              <strong>{project.title}</strong>
              <p style={{ margin: 0, opacity: 0.6 }}>{project.description}</p>
            </div>

            <button style={styles.buttonDanger} onClick={() => deleteProject(index)}>
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 30,
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    border: "1px solid #ddd",
  },
  buttonPrimary: {
    background: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  projectRow: {
    background: "#fafafa",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDanger: {
    background: "#ff4444",
    color: "white",
    padding: "8px 15px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
  },
};
