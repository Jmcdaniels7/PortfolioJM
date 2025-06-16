import { useState } from 'react';
import './ProjectSearch.css'; 

function ProjectSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    fetch(`http://localhost:8080/api/search?search=${encodeURIComponent(searchTerm)}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    })
    .then(data => setProjects(data))
    .catch(err => console.error('Fetch error:', err));
  };

  return (
    <div className="project-search-container">
      <h2 className="search-heading">Search Projects</h2>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search by framework or language..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.projectName}</h3>
            <p><strong>Framework:</strong> {proj.projectFramework}</p>
            <p><strong>Languages:</strong> {proj.projectLanguages.join(', ')}</p>
            <a
              href={proj.projectURL}
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
  );
}

export default ProjectSearch;

