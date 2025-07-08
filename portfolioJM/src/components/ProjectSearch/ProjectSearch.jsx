import React, { useState } from 'react';
import './ProjectSearch.css';

const ProjectSearch = () => {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!search.trim()) return;

    fetch(`https://java-app-blqt.onrender.com/api/project/search?search=${encodeURIComponent(search)}`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        console.log('Projects from API:', json);
        setFiltered(json);
        setError(null);
      })
      .catch((err) => {
        console.error('Search failed:', err);
        setError('Failed to load projects. Please try again.');
        setFiltered([]);
      });
  };

  return (
  <div className="project-search-container">
    <div className="search-container">
      <h1 className="search-header">🔍 Project Search</h1>

      <div className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          placeholder="Search by name or framework"
          className="search-input"
        />

        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {error && <p className="error-text">{error}</p>}

      <div className="project-grid">
        {filtered.map((project) => (
          <div key={project.projectId} className="project-card">
            <div className="folder-tab" />
            <h2>{project.projectName || 'Unnamed Project'}</h2>
            <p><strong>Framework:</strong> {project.projectFramework || 'Unknown'}</p>
            <p>
              <strong>Languages:</strong>{' '}
              {Array.isArray(project.projectLanguages)
                ? project.projectLanguages.join(', ')
                : project.projectLanguages || 'Unknown'}
            </p>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default ProjectSearch;
