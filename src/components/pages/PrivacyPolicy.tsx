import { Fragment } from 'react';
import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/layout/Footer';
import { SubpageHeader } from './SubpageHeader';
import type { ColorMode } from '@/hooks/useColorMode';
import policySource from '@/content/perfectlyAveragePrivacy.md?raw';
import styles from './subpages.module.css';

interface PageProps {
  mode: ColorMode;
  onToggleMode: () => void;
}

type Block = { type: 'title' | 'heading' | 'paragraph' | 'list'; content: string | string[] };

function parsePolicy(source: string): Block[] {
  return source
    .trim()
    .split(/\n\s*\n/)
    .map((chunk) => {
      const lines = chunk.split('\n').map((line) => line.trim());
      if (lines[0]?.startsWith('# ')) return { type: 'title', content: lines[0].slice(2) };
      if (lines[0]?.startsWith('## ')) return { type: 'heading', content: lines[0].slice(3) };
      if (lines.every((line) => line.startsWith('- ')))
        return { type: 'list', content: lines.map((line) => line.slice(2)) };
      return { type: 'paragraph', content: lines.join(' ') };
    });
}

const blocks = parsePolicy(policySource);
const inlinePattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\))/g;

function renderInline(value: string) {
  return value.split(inlinePattern).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    const link = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/.exec(part);
    if (link)
      return (
        <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">
          {link[1]}
          <span className="srOnly"> (opens in new tab)</span>
        </a>
      );
    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function PrivacyPolicy({ mode, onToggleMode }: PageProps) {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <SubpageHeader
        mode={mode}
        onToggleMode={onToggleMode}
        backHref="/projects/perfectly-average/"
        backLabel="← Perfectly Average"
      />
      <main id="main" className={styles.policyMain}>
        <Container>
          <div className={styles.policyIntro}>
            <span className={styles.eyebrow}>PERFECTLY AVERAGE / LEGAL</span>
            <h1>{String(blocks[0]?.content ?? 'Privacy Policy')}</h1>
          </div>
          <article
            className={styles.policyArticle}
            aria-label="Privacy Policy for Perfectly Average"
          >
            {blocks.slice(1).map((block, index) => {
              if (block.type === 'heading') return <h2 key={index}>{block.content}</h2>;
              if (block.type === 'list')
                return (
                  <ul key={index}>
                    {(block.content as string[]).map((item, itemIndex) => (
                      <li key={itemIndex}>{renderInline(item)}</li>
                    ))}
                  </ul>
                );
              return <p key={index}>{renderInline(String(block.content))}</p>;
            })}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
