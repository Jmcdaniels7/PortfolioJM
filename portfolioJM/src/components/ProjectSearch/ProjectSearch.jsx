import React, { useEffect, useState } from 'react';
import './ProjectSearch.css';

const ProjectSearch = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}projects_export.json`)
      .then((response) => response.json())
      .then((json) => setData(json.projects))
      .catch((error) => console.error("Failed to load JSON:", error));
  }, []);

  const handleSearch = () => {
    const lower = search.toLowerCase();
    const result = data.filter((project) =>
      project.project_name.toLowerCase().includes(lower) ||
      project.project_framework.toLowerCase().includes(lower)
    );
    setFiltered(result);
  };

  return (
    <div className="p-6">
  <div className="search-container">
    <h1 className="search-header">Search Projects</h1>

    <div className="search-form">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
          placeholder="Search by name or framework"
          className="search-input"
        />
      </div>

      <button
        onClick={handleSearch}
        className="search-button"
      >
        Search
      </button>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filtered.map((project) => (
      <div
        key={project.project_id}
        className="project-card"
      >
        <h2 className="text-lg font-semibold mb-1">{project.project_name}</h2>
        <p className="text-sm text-gray-700 mb-2">Framework: {project.project_framework}</p>
        <a
          href={project.projecturl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View Project
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default ProjectSearch;



