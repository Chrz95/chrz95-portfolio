import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { SubpageHeader } from './SubpageHeader';
import { projectDetails, type ProjectDetail } from '@/config/projectDetails';
import { portfolio } from '@/config/portfolio';
import type { ColorMode } from '@/hooks/useColorMode';
import styles from './productPages.module.css';

interface ProductProjectProps {
  projectId: ProjectDetail['id'];
  mode: ColorMode;
  onToggleMode: () => void;
}

export function ProductProject({ projectId, mode, onToggleMode }: ProductProjectProps) {
  const project = projectDetails[projectId];
  const githubUrl = portfolio.projects.find((item) => item.id === projectId)?.githubUrl;
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <SubpageHeader
        mode={mode}
        onToggleMode={onToggleMode}
        backHref="/#projects"
        backLabel="← All projects"
      />
      <main id="main">
        <section
          className={`${styles.hero} ${project.gallery ? styles.desktopAppHero : ''}`}
          aria-labelledby="product-title"
        >
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>{project.category}</span>
                <h1 id="product-title">
                  {project.title}
                  <span aria-hidden="true">.</span>
                </h1>
                <p className={styles.lead}>{project.lead}</p>
                <p className={styles.overview}>{project.overview}</p>
                <div className={styles.tags} aria-label="Project technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <a className={styles.textLink} href="#project-details">
                  Explore the project <span aria-hidden="true">↘</span>
                </a>
              </div>
              <figure
                className={`${styles.heroVisual} ${project.logo ? styles.withLogo : ''} ${project.gallery ? styles.appScreenshot : ''}`}
              >
                <img className={styles.heroImage} src={project.image} alt={project.imageAlt} />
                {project.logo && (
                  <img className={styles.productLogo} src={project.logo} alt="DayTandem logo" />
                )}
                <figcaption>{project.imageCaption}</figcaption>
              </figure>
            </div>
          </Container>
        </section>
        <section
          id="project-details"
          className={styles.factsSection}
          aria-label={`${project.title} at a glance`}
        >
          <Container>
            <div className={styles.factsGrid}>
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.featuresSection} aria-labelledby="features-title">
          <Container>
            <div className={styles.sectionIntro}>
              <span className={styles.eyebrow}>INSIDE THE PRODUCT</span>
              <h2 id="features-title">What {project.title} brings together.</h2>
            </div>
            <div className={styles.featureGrid}>
              {project.features.map((feature, index) => (
                <Reveal key={feature.title}>
                  <article className={styles.featureCard}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        {project.gallery && (
          <section className={styles.gallerySection} aria-labelledby="gallery-title">
            <Container>
              <div className={styles.sectionIntro}>
                <span className={styles.eyebrow}>A CLOSER LOOK</span>
                <h2 id="gallery-title">Inside the workspace.</h2>
              </div>
              <div className={styles.galleryGrid}>
                {project.gallery.map((item) => (
                  <figure className={styles.galleryFigure} key={item.image}>
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>
        )}
        <section className={styles.closingSection} aria-labelledby="closing-title">
          <Container>
            <div className={styles.closingInner}>
              <span className={styles.eyebrow}>
                {project.liveUrl || githubUrl ? 'EXPLORE FURTHER' : 'ABOUT THE APP'}
              </span>
              <h2 id="closing-title">{project.closingTitle}</h2>
              <p>{project.closingText}</p>
              {project.liveUrl && project.liveLabel && (
                <a
                  className={styles.visitLink}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveLabel} <span aria-hidden="true">↗</span>
                  <span className="srOnly"> (opens in new tab)</span>
                </a>
              )}
              {githubUrl && (
                <a
                  className={styles.visitLink}
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source on GitHub <span aria-hidden="true">↗</span>
                  <span className="srOnly"> (opens in new tab)</span>
                </a>
              )}
              {project.linkNote && <small>{project.linkNote}</small>}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
