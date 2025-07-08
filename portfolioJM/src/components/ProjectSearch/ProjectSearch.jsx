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
    <div className="p-6 font-sans">
      <div className="search-container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔍 Project Search</h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
            placeholder="Search by name or framework"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}

        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filtered.map((project) => (
              <div
                key={project.projectId}
                className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 transition hover:shadow-2xl hover:scale-[1.02]"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.projectName || 'Unnamed Project'}
                </h2>

                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">Framework:</span>{' '}
                  {project.projectFramework || 'Unknown'}
                </p>

                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-medium">Languages:</span>{' '}
                  {Array.isArray(project.projectLanguages)
                    ? project.projectLanguages.join(', ')
                    : project.projectLanguages || 'Unknown'}
                </p>

                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    View Project
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
