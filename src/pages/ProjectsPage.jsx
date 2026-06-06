import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Footer from '../components/Footer.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ScrollTop from '../components/ScrollTop.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)).filter((project) => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const searchable = `${project.title} ${project.description} ${project.technologies.join(' ')} ${project.category}`.toLowerCase();
      return matchesFilter && searchable.includes(query.toLowerCase());
    });
  }, [filter, query]);

  return (
    <>
      <section className="page-hero section-shell">
        <Link className="text-link" to="/#projects"><ArrowLeft size={16} /> Back to Home</Link>
        <SectionHeading eyebrow="Projects" title="Complete Project Gallery" />
        <div className="project-toolbar">
          <div className="search-field">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
          </div>
          <div className="filter-row" role="tablist" aria-label="Project filters">
            {filters.map((item) => (
              <button className={filter === item ? 'active' : ''} type="button" key={item} onClick={() => setFilter(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        {filteredProjects.length ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
          </div>
        ) : (
          <div className="empty-state">No projects match that search yet.</div>
        )}
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
