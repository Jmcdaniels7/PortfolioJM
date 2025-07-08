import React, { useState } from 'react';
import './ProjectSearch.css';

const ProjectSearch = () => {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    // Prevent empty search calls
    if (!search.trim()) return; 

    //fetching api endpoint from render deployment with error handling
    fetch(`https://java-app-blqt.onrender.com/api/project/search?search=${encodeURIComponent(search)}`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        console.log("Projects from API:", json);
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

          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {filtered.map((project) => (
    <div
      key={project.projectId}
      className="bg-yellow-100 border-2 border-yellow-400 rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-200"
    >
      <div>
        <h2 className="text-xl font-bold text-yellow-900 mb-2">
          📁 {project.projectName || 'Unnamed Project'}
        </h2>

        <p className="text-sm text-yellow-800 mb-1">
          <span className="font-semibold">Framework:</span>{' '}
          {project.projectFramework || 'Unknown'}
        </p>

        <p className="text-sm text-yellow-800 mb-3">
          <span className="font-semibold">Languages:</span>{' '}
          {Array.isArray(project.projectLanguages)
            ? project.projectLanguages.join(', ')
            : project.projectLanguages || 'Unknown'}
        </p>
      </div>

      {project.projectURL && (
        <a
          href={project.projectURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline font-semibold"
        >
          Open Project ↗
        </a>
      )}
    </div>
  ))}
</div>

      )}
    </div>
    </div>
  );
};

export default ProjectSearch;






