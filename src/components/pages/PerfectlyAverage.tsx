import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { SubpageHeader } from './SubpageHeader';
import type { ColorMode } from '@/hooks/useColorMode';
import styles from './subpages.module.css';

interface PageProps {
  mode: ColorMode;
  onToggleMode: () => void;
}

const screenshots = [
  {
    file: '01-home.png',
    title: 'Welcome to the balance',
    alt: 'Perfectly Average home screen with three number tiles and the Play button',
  },
  {
    file: '02-campaign-puzzle.png',
    title: 'Make each move count',
    alt: 'A puzzle board with target average, three tiles and available operations',
  },
  {
    file: '03-campaign-chapters.png',
    title: 'Explore the chapters',
    alt: 'Campaign chapter selection with progress stars and puzzle levels',
  },
  {
    file: '04-deep-mastery.png',
    title: 'Go deeper',
    alt: 'Deep Mastery challenge list with exact tile and move goals',
  },
  {
    file: '05-puzzle-lab.png',
    title: 'Create a puzzle',
    alt: 'Puzzle Lab editor for creating a number puzzle and checking its solution',
  },
  {
    file: '06-chapter-artwork.png',
    title: 'Celebrate progress',
    alt: 'Campaign chapter artwork and unlocked colour palettes',
  },
] as const;

const features = [
  {
    number: '01',
    title: '100 levels, 20 chapters',
    text: 'Start with approachable puzzles and progress to harder combinations of fractions, fixed tiles, limited operations and exact tile arrangements. Earn stars, improve your best moves and revisit your favourite boards.',
  },
  {
    number: '02',
    title: 'More ways to play',
    text: 'Take on 30 Mastery challenges and 16 linked-tile puzzles. Return for a daily challenge, tackle a five-puzzle course or keep exploring in Endless mode. Share the device for a friendly two-player, pass-and-play match.',
  },
  {
    number: '03',
    title: 'Make your own puzzles',
    text: 'Experiment in Puzzle Lab, check whether your creation has a solution and share it using a puzzle code. Save custom boards and challenge yourself to find a better route.',
  },
  {
    number: '04',
    title: 'Celebrate your progress',
    text: 'Complete chapters to reveal distinctive artwork and unlock new colour palettes. Collect cosmetics and give the game a look that feels like yours.',
  },
  {
    number: '05',
    title: 'Play at your pace',
    text: 'Keep the level timer on for extra pressure or turn it off in Settings. Use undo and progressive hints when you need a fresh perspective, and replay a winning solution to understand how it worked.',
  },
  {
    number: '06',
    title: 'A calm place to think',
    text: 'Enjoy clean visuals, gentle music and satisfying sounds. Adjust audio, haptics and motion to suit your preferences.',
  },
] as const;

export function PerfectlyAverage({ mode, onToggleMode }: PageProps) {
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
        <section className={styles.gameHero} aria-labelledby="game-title">
          <Container>
            <div className={styles.gameHeroGrid}>
              <div className={styles.gameHeroCopy}>
                <span className={styles.eyebrow}>INDEPENDENT PROJECT / NUMBER PUZZLE GAME</span>
                <h1 id="game-title">
                  Perfectly
                  <br />
                  <em>Average.</em>
                </h1>
                <p className={styles.lead}>
                  A few numbers. One target. A surprisingly satisfying puzzle.
                </p>
                <p>
                  Turn numbers into the perfect average. Add, subtract, double and halve your tiles,
                  then discover new twists as you work toward the target. Simple rules lead to
                  clever solutions—and that lovely moment when everything clicks.
                </p>
                <a className={styles.textLink} href="#screenshots">
                  Explore the game <span aria-hidden="true">↘</span>
                </a>
              </div>
              <div
                className={styles.heroScreens}
                aria-label="Perfectly Average gameplay screenshots"
              >
                <img
                  src="/images/perfectly-average/01-home.png"
                  alt="Perfectly Average home screen"
                />
                <img
                  src="/images/perfectly-average/02-campaign-puzzle.png"
                  alt="A Perfectly Average number puzzle in progress"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.pageSection} aria-labelledby="features-title">
          <Container>
            <div className={styles.sectionIntro}>
              <span className={styles.eyebrow}>THINK / EXPLORE / CREATE</span>
              <h2 id="features-title">A little number play, a lot to discover.</h2>
            </div>
            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <Reveal key={feature.number}>
                  <article className={styles.featureCard}>
                    <span>{feature.number}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        <section
          id="screenshots"
          className={`${styles.pageSection} ${styles.tinted}`}
          aria-labelledby="screenshots-title"
        >
          <Container>
            <div className={styles.sectionIntro}>
              <span className={styles.eyebrow}>A CLOSER LOOK</span>
              <h2 id="screenshots-title">Inside the game.</h2>
            </div>
            <div className={styles.screenshotGrid}>
              {screenshots.map((shot) => (
                <figure key={shot.file} className={styles.screenshotCard}>
                  <img
                    src={`/images/perfectly-average/${shot.file}`}
                    alt={shot.alt}
                    loading="lazy"
                  />
                  <figcaption>{shot.title}</figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.gameClosing} aria-labelledby="closing-title">
          <Container>
            <div>
              <span className={styles.eyebrow}>PLAY YOUR WAY</span>
              <h2 id="closing-title">
                Find the balance.
                <br />
                Make every move count.
              </h2>
              <p>
                Play puzzles offline. Optional rewarded ads can offer an extra chance when
                available; there are no banner ads or automatic interstitial breaks. No account is
                required.
              </p>
              <a className={styles.textLink} href="/projects/perfectly-average/privacy-policy/">
                Read the privacy policy <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
