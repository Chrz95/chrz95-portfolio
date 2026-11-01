import { useMemo, useRef, useState } from 'react';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Section } from '@/components/ui/Section';
import { SurfaceCard } from '@/components/ui/SurfaceCard';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/config/portfolio';
import type { Project } from '@/types/portfolio';
import styles from './sections.module.css';

const PROJECTS_PER_PAGE = 3;

function ProjectCard({ project }: { project: Project }) {
  return (
    <SurfaceCard className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className={styles.projectContent}>
        <span className={styles.smallLabel}>{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectOutcomes}>
          {project.outcomes.map((outcome) => (
            <span key={outcome}>{outcome}</span>
          ))}
        </div>
        <div className={styles.projectBottom}>
          <div className={styles.tagList}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {(project.githubUrl || project.demoUrl) && (
            <div className={styles.projectLinks}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source on GitHub (opens in new tab)`}
                >
                  <GitHubIcon fontSize="small" /> Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo (opens in new tab)`}
                >
                  <OpenInNewRoundedIcon fontSize="small" /> Live demo
                </a>
              )}
            </div>
          )}
          {project.detailsUrl && (
            <a className={styles.projectDetailLink} href={project.detailsUrl}>
              Explore project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </SurfaceCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const filters = useMemo(
    () => ['All', ...Array.from(new Set(portfolio.projects.flatMap((project) => project.tags)))],
    [],
  );
  const visible = useMemo(
    () => portfolio.projects.filter((project) => filter === 'All' || project.tags.includes(filter)),
    [filter],
  );
  const pageCount = Math.ceil(visible.length / PROJECTS_PER_PAGE);
  const firstProject = (page - 1) * PROJECTS_PER_PAGE;
  const currentProjects = visible.slice(firstProject, firstProject + PROJECTS_PER_PAGE);

  function changePage(nextPage: number) {
    setPage(nextPage);
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
      gridRef.current?.focus({ preventScroll: true });
    });
  }

  return (
    <Section
      id="projects"
      number="03"
      title="Selected work."
      description="Products and workflows I’ve helped shape. Some professional work is private, so public source and demo links appear only when available."
    >
      <div className={styles.filters} role="group" aria-label="Filter projects by technology">
        {filters.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            color={filter === tag ? 'primary' : 'default'}
            variant={filter === tag ? 'filled' : 'outlined'}
            onClick={() => {
              setFilter(tag);
              setPage(1);
            }}
            aria-pressed={filter === tag}
            clickable
          />
        ))}
      </div>
      <div className={styles.projectGrid} ref={gridRef} tabIndex={-1}>
        {currentProjects.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <div className={styles.projectPagination}>
        <p aria-live="polite" aria-atomic="true">
          Showing {firstProject + 1}–{Math.min(firstProject + PROJECTS_PER_PAGE, visible.length)} of{' '}
          {visible.length} projects
        </p>
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_event, nextPage) => changePage(nextPage)}
            color="primary"
            shape="rounded"
            aria-label="Project pages"
            getItemAriaLabel={(type, pageNumber) =>
              type === 'page' ? `Go to projects page ${pageNumber}` : `Go to ${type} projects page`
            }
          />
        )}
      </div>
      <p className={styles.projectFootnote}>
        More code on{' '}
        <a href="https://github.com/chrz95" target="_blank" rel="noopener noreferrer">
          GitHub ↗<span className="srOnly"> (opens in new tab)</span>
        </a>
      </p>
    </Section>
  );
}
