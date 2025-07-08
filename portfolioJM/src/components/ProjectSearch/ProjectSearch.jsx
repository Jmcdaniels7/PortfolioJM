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
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          🔍 Project Search
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="Search by name or framework"
            className="w-full sm:w-2/3 px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}

        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((project) => (
              <div
                key={project.projectId}
                className="bg-yellow-100 border border-yellow-300 rounded-t-3xl rounded-b-xl shadow-md p-6 relative group hover:shadow-xl transition duration-300"
              >
                {/* Folder Tab */}
                <div className="absolute top-0 left-0 w-20 h-6 bg-yellow-300 rounded-br-lg rounded-tl-3xl"></div>

                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📁</div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {project.projectName || 'Unnamed Project'}
                  </h2>
                </div>

                <p className="text-sm text-gray-800 mb-2">
                  <span className="font-semibold">Framework:</span>{' '}
                  {project.projectFramework || 'Unknown'}
                </p>

                <p className="text-sm text-gray-800 mb-4">
                  <span className="font-semibold">Languages:</span>{' '}
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

