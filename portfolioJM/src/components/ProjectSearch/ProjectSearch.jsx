import React, { useState } from 'react';
import './ProjectSearch.css';

//next step is to start to gather data on searching and then do data analytics on most frequent searches

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
      <h1 className="search-header">Project Search</h1>

      <div className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          placeholder="Search by language or framework"
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
            
            <a
              href={project.projectURL}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>

          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default ProjectSearch;
