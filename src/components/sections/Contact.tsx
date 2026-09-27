import { useState, type FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Section } from '@/components/ui/Section';
import { ActionButton } from '@/components/ui/ActionButton';
import { portfolio } from '@/config/portfolio';
import styles from './sections.module.css';

export function Contact() {
  const [status, setStatus] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    setStatus('Your email app will open with the message ready to send.');
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }
  return (
    <Section
      id="contact"
      number="05"
      title="Let’s make something useful."
      description="Have a product, engineering challenge, or idea to discuss? I’d like to hear about it."
    >
      <div className={styles.contactGrid}>
        <div className={styles.contactDetails}>
          <span className={styles.smallLabel}>GET IN TOUCH</span>
          <a className={styles.emailLink} href={`mailto:${portfolio.email}`}>
            {portfolio.email} ↗
          </a>
          <p>Based in Athens, Greece</p>
          <div className={styles.contactRule} />
          <p>
            Use the form to draft an email in your mail app. No message is sent from this website.
          </p>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <TextField
              name="name"
              label="Your name"
              autoComplete="name"
              required
              fullWidth
              inputProps={{ maxLength: 100 }}
            />
            <TextField
              name="email"
              type="email"
              label="Email address"
              autoComplete="email"
              required
              fullWidth
              inputProps={{ maxLength: 254 }}
            />
          </div>
          <TextField
            name="message"
            label="Your message"
            placeholder="Tell me what you’re working on…"
            multiline
            minRows={5}
            required
            fullWidth
            inputProps={{ maxLength: 3000 }}
          />
          <ActionButton type="submit" endIcon={<SendRoundedIcon />}>
            Open email app
          </ActionButton>
          {status && (
            <p className={styles.formStatus} role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
