import React, { useState } from "react";
// import "./AdminDashboard.scss";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toolsUsed, setToolsUsed] = useState<string[]>([]);
  const [github, setGithub] = useState("");
  const [liveDemo, setLiveDemo] = useState("");

  const handleAddTool = (tool: string) => {
    if (!toolsUsed.includes(tool)) {
      setToolsUsed([...toolsUsed, tool]);
    }
  };

  const handleSubmit = async () => {
    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          toolsUsed,
          github,
          liveDemo,
        }),
      });

      if (!response.ok) throw new Error("Failed to save project");

      alert("Project added successfully!");

      setTitle("");
      setDescription("");
      setToolsUsed([]);
      setGithub("");
      setLiveDemo("");
    } catch (err) {
      console.error(err);
      alert("Error adding project");
    }
  };

  return (
    <div className="admin-wrapper">
      <h1>🛠 Admin Dashboard</h1>
      <p>Add new portfolio projects here.</p>

      <div className="admin-card">
        <label>Project Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Tools (click to add)</label>
        <div className="tool-buttons">
          {["React", "Node.js", "Terraform", "AWS", "Ansible", "Docker", "Jenkins"].map((tool) => (
            <button key={tool} onClick={() => handleAddTool(tool)}>
              {tool}
            </button>
          ))}
        </div>

        <div className="selected-tools">
          {toolsUsed.map((tool) => (
            <span key={tool} className="tool-pill">{tool}</span>
          ))}
        </div>

        <label>GitHub Link</label>
        <input value={github} onChange={(e) => setGithub(e.target.value)} />

        <label>Live Demo URL</label>
        <input value={liveDemo} onChange={(e) => setLiveDemo(e.target.value)} />

        <button className="save-btn" onClick={handleSubmit}>Add Project</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
