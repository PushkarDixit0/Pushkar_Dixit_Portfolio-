import { Briefcase } from 'lucide-react';

export default function Timeline({ items, compact = false }) {
  return (
    <div className={`timeline ${compact ? 'compact' : ''}`}>
      {items.map((item, index) => (
        <article className={`timeline-item ${item.side}`} key={`${item.company}-${item.period}`}>
          <div className="timeline-dot" aria-hidden="true">
            <Briefcase size={16} />
          </div>
          <div className="timeline-content reveal" style={{ '--delay': `${index * 70}ms` }}>
            <p>{item.period}</p>
            <h3>{item.company}</h3>
            <span>{item.title}</span>
            {(item.employmentType || item.location || item.locationType) && (
              <div className="timeline-meta">
                {item.employmentType && <span>{item.employmentType}</span>}
                {item.location && <span>{item.location}</span>}
                {item.locationType && <span>{item.locationType}</span>}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
