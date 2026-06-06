import { describe, expect, it } from 'vitest';
import { experiences, formatExperienceDuration, portfolio, projects, skills } from './portfolio.js';

describe('portfolio content', () => {
  it('keeps core contact and navigation data available', () => {
    expect(portfolio.email).toContain('@');
    expect(portfolio.navItems.map((item) => item.href)).toContain('/#contact');
  });

  it('ships populated projects and skills', () => {
    expect(skills.length).toBeGreaterThan(10);
    expect(
      projects.every(
        (project) =>
          project.title &&
          project.description &&
          project.technologies?.length &&
          project.githubUrl &&
          Object.prototype.hasOwnProperty.call(project, 'deployedUrl') &&
          Object.prototype.hasOwnProperty.call(project, 'featured')
      )
    ).toBe(true);
  });

  it('keeps the full migrated experience timeline', () => {
    expect(experiences).toHaveLength(7);
    expect(experiences[0]).toMatchObject({
      company: 'HeapTrace Technology',
      title: 'Associate Software Engineer',
      employmentType: 'Full-time',
    });
  });

  it('formats live experience duration in years and months', () => {
    expect(formatExperienceDuration(new Date(2025, 2, 1), new Date(2026, 5, 6))).toBe('1 year 3 months');
  });
});
