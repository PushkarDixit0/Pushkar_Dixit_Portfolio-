import { Code2, ExternalLink, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card reveal ${project.featured ? 'is-featured' : ''}`}>
      <div className="project-visual" data-theme={project.image} aria-hidden="true">
        <div className="project-window">
          <span />
          <span />
          <span />
        </div>
        <strong>{project.title.split(' ')[0]}</strong>
        {project.featured && (
          <span className="featured-badge">
            <Sparkles size={14} /> Featured
          </span>
        )}
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.githubUrl && (
            <a className="button button-small" href={project.githubUrl} target="_blank" rel="noreferrer">
              <Code2 size={16} /> View Code
            </a>
          )}
          {project.deployedUrl && (
            <a className="button button-small secondary" href={project.deployedUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
