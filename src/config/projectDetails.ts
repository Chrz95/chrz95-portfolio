export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDetail {
  id:
    | 'layovio'
    | 'daytandem'
    | 'local-llm-literary-translator'
    | 'folio'
    | 'linkdock'
    | 'form-workout-studio'
    | 'resonance';
  category: string;
  title: string;
  lead: string;
  overview: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  logo?: string;
  gallery?: { image: string; alt: string; caption: string }[];
  technologies: string[];
  facts: { value: string; label: string }[];
  features: ProjectFeature[];
  closingTitle: string;
  closingText: string;
  liveUrl?: string;
  liveLabel?: string;
  linkNote?: string;
}

export const projectDetails: Record<ProjectDetail['id'], ProjectDetail> = {
  layovio: {
    id: 'layovio',
    category: 'INDEPENDENT PRODUCT / REUSABLE INTERFACES',
    title: 'Layovio',
    lead: 'A better starting point for ambitious interfaces.',
    overview:
      'Layovio brings reusable React components, live playgrounds, documentation, and complete site templates into one place. It spans everyday form fields, data-heavy workflows, rich editors, visualizations, and scheduling.',
    image: '/images/layovio/home.webp',
    imageAlt: 'Layovio homepage showing component navigation and a workspace preview',
    imageCaption: 'Layovio showcase · workspace interface preview',
    technologies: ['React', 'TypeScript', 'Reusable components', 'Site templates'],
    facts: [
      { value: '132', label: 'individual component APIs' },
      { value: '22', label: 'site templates' },
      { value: 'Live', label: 'playgrounds and documentation' },
    ],
    features: [
      {
        title: 'From fields to workflows',
        description:
          'Inputs, tables, editors, charts, media controls, and conversation interfaces are organized into focused component pages.',
      },
      {
        title: 'Adjust as you build',
        description:
          'Each component has a playground for testing props and behavior alongside examples and API guidance.',
      },
      {
        title: 'Calendar systems',
        description:
          'Resource timelines and connected multi-day views support drag interactions, printing, and PDF or Excel exports.',
      },
      {
        title: 'Complete starting points',
        description:
          'Commerce, publishing, dashboards, portals, and other templates connect multiple pages and flows.',
      },
      {
        title: 'Typed source',
        description:
          'React and TypeScript source is available to customize at the component and theme level.',
      },
      {
        title: 'A coherent visual language',
        description:
          'Components and templates share a deliberate design system across light and dark appearances.',
      },
    ],
    closingTitle: 'Build from a stronger foundation.',
    closingText:
      'Explore the components, try the playgrounds, and browse the site templates in the live showcase.',
    liveUrl: 'https://christos-component-studio-2026.computerchristos.chatgpt.site',
    liveLabel: 'Explore Layovio',
    linkNote: 'The current showcase is privately shared and may require access.',
  },
  daytandem: {
    id: 'daytandem',
    category: 'INDEPENDENT PRODUCT / SCHEDULING & OPERATIONS',
    title: 'DayTandem',
    lead: 'Your day, in sync.',
    overview:
      'DayTandem is a workspace for appointment-based organizations. It connects scheduling, people, rooms, financial records, and team communication in a role-aware interface with Greek and English support.',
    image: '/images/daytandem.webp',
    imageAlt: 'Abstract calendar layers representing DayTandem scheduling',
    imageCaption: 'DayTandem · scheduling and operations concept artwork',
    logo: '/images/daytandem-logo.webp',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    facts: [
      { value: 'One', label: 'workspace for daily operations' },
      { value: 'EN / EL', label: 'interface languages' },
      { value: 'Role-aware', label: 'access and workflows' },
    ],
    features: [
      {
        title: 'A flexible schedule',
        description:
          'Resource timelines, connected day views, recurring and group appointments, drag interactions, and calendar exports support busy teams.',
      },
      {
        title: 'People and places',
        description:
          'Client, guardian, employee, room, and specialty records sit alongside organizational hours and holidays.',
      },
      {
        title: 'Financial follow-through',
        description:
          'Charges, payments, balances, payroll contracts, and salary payments connect to the work that generated them.',
      },
      {
        title: 'Built for different roles',
        description:
          'Administrators, employees, clients, and guardians see the information and actions relevant to their permissions.',
      },
      {
        title: 'Organizations can make it theirs',
        description:
          'Business presets, terminology, appearance settings, data exports, and guided setup help teams configure the workspace.',
      },
      {
        title: 'Assistance with review',
        description:
          'Optional Tandy workflows can prepare scheduling or financial actions for explicit review before saving.',
      },
    ],
    closingTitle: 'A clearer way to run the day.',
    closingText:
      'DayTandem brings the schedule and the operational details around it into a single product.',
    liveUrl: 'https://healschedule-dashboard.computerchristos.chatgpt.site',
    liveLabel: 'View DayTandem site',
    linkNote: 'The linked site uses a sign-in flow.',
  },
  'local-llm-literary-translator': {
    id: 'local-llm-literary-translator',
    category: 'INDEPENDENT APP / LOCAL AI & LITERARY TRANSLATION',
    title: 'Local LLM Literary Translator',
    lead: 'Your books. Your model. An entirely local workflow.',
    overview:
      'Literary Translator is a Python desktop app for translating EPUB, PDF, DOCX, and TXT books with models served locally by LM Studio. A side-by-side workspace brings translation, review, and editing together, one chunk at a time.',
    image: '/images/literary-translator/translation-workspace.png',
    imageAlt:
      'Literary Translator interface with model selection, translation progress, a sortable chunk queue, and original and translated text',
    imageCaption: 'Translation workspace · authored sample book and translations',
    gallery: [
      {
        image: '/images/literary-translator/chunk-editor.png',
        alt: 'Chunk editor with source text beside an editable Greek translation and a Save chunk action',
        caption: 'Chunk editor · compare the source and revise a translation',
      },
    ],
    technologies: ['Python', 'Tkinter', 'LM Studio', 'Local LLMs'],
    facts: [
      { value: '4', label: 'input formats: EPUB, PDF, DOCX, TXT' },
      { value: 'Local', label: 'models served by LM Studio' },
      { value: '4,000', label: 'maximum source characters per chunk' },
    ],
    features: [
      {
        title: 'Keep the book intact',
        description:
          'For EPUB, translated text replaces text nodes while preserving markup, metadata, cover, images, fonts, CSS, spine, and navigation. PDF and DOCX export as TXT.',
      },
      {
        title: 'Continue where you left off',
        description:
          'Translate chunks in parallel, pause or resume the queue, and reopen saved books even when the input file has been renamed.',
      },
      {
        title: 'Choose the right model and prompt',
        description:
          'Discover installed LM Studio models, switch models for selected chunks, and retranslate chunks or ranges with a default or custom literary prompt.',
      },
      {
        title: 'Review every passage',
        description:
          'Compare source and translation side by side, edit individual chunks, and optionally proofread and inspect reported issues.',
      },
      {
        title: 'Find the work that matters',
        description:
          'Search either language, sort the queue, combine status and review filters, and use bookmarks and labels to organize passages.',
      },
      {
        title: 'Make careful changes',
        description:
          'Preview word replacements across translated chunks before applying them, with backups for the changed files.',
      },
    ],
    closingTitle: 'A thoughtful workflow for long-form translation.',
    closingText:
      'The screenshots show the running desktop app with an authored sample book and sample translations. Translation quality depends on the local model you choose; PDF extraction requires a text layer.',
  },
  folio: {
    id: 'folio',
    category: 'INDEPENDENT PRODUCT / PERSONAL FINANCE',
    title: 'Folio',
    lead: 'Your money, your schedule, your own server.',
    overview:
      'Folio is a self-hosted personal budget manager for everyday transactions, recurring bills, spending plans, and reminders. It connects financial history with a calendar and short-term balance forecasts in a responsive, installable app.',
    image: '/images/folio.svg',
    imageAlt: 'Abstract budget dashboard artwork with a balance trend and transaction cards',
    imageCaption: 'Folio · illustrative budget dashboard artwork',
    technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'Drizzle ORM', 'Web Push'],
    facts: [
      { value: '30 / 60 / 90', label: 'day balance forecast windows' },
      { value: 'PWA', label: 'desktop and mobile access' },
      { value: 'SQLite', label: 'self-hosted financial storage' },
    ],
    features: [
      {
        title: 'A complete ledger',
        description:
          'Track income, expenses, and transfers across accounts, organize categories, attach receipts, and export filtered transactions.',
      },
      {
        title: 'Recurring plans',
        description:
          'Schedule bills and paydays weekly, monthly, or yearly, then confirm, skip, restore, or pause individual occurrences.',
      },
      {
        title: 'Calendar and reminders',
        description:
          'See recorded transactions and planned payments together. Web Push reminders and ICS export help keep due dates visible.',
      },
      {
        title: 'Budget and forecast',
        description:
          'Set monthly category budgets and savings goals, compare spending, and inspect 30-, 60-, or 90-day balance forecasts.',
      },
      {
        title: 'Bring existing data',
        description:
          'Review imports from Actual Budget exports or mapped CSV and TSV statements before committing them; reconcile balances against statements.',
      },
      {
        title: 'Own the deployment',
        description:
          'A single-user, self-hosted setup stores data in SQLite and supports Docker deployment, responsive layouts, and light or dark appearance.',
      },
    ],
    closingTitle: 'A clearer picture of what comes next.',
    closingText:
      'Folio records and forecasts the information entered into it. Transfers and automatic confirmation update its ledger; they do not initiate bank payments.',
  },
  linkdock: {
    id: 'linkdock',
    category: 'INDEPENDENT PRODUCT / SELF-HOSTED DOWNLOADS',
    title: 'LinkDock',
    lead: 'Your downloads. Your Raspberry Pi. One place.',
    overview:
      'LinkDock is a self-hosted station for video, audio, galleries, torrents, and direct files. Add a link from a phone or browser, let the server work through the queue, and return to an organized library.',
    image: '/images/linkdock.svg',
    imageAlt: 'Abstract download station artwork with transfer progress and a file library',
    imageCaption: 'LinkDock · illustrative download station artwork',
    technologies: ['React', 'TypeScript', 'Node.js', 'Docker', 'yt-dlp', 'aria2'],
    facts: [
      { value: 'Pi', label: 'Raspberry Pi deployment' },
      { value: 'One', label: 'queue for several source types' },
      { value: 'Server', label: 'transfers continue after the tab closes' },
    ],
    features: [
      {
        title: 'Multiple sources, one queue',
        description:
          'Handle supported video and audio sources, Instagram and DeviantArt collections, torrent and magnet links, and direct HTTP files.',
      },
      {
        title: 'Control every transfer',
        description:
          'Pause, resume, cancel, restart, prioritize, and review jobs; interrupted active work can requeue after a station restart.',
      },
      {
        title: 'A browsable library',
        description:
          'Search, filter, tag, favorite, preview, and export saved files or a multi-file job as a ZIP.',
      },
      {
        title: 'A browser companion',
        description:
          'The optional extension adds a current page or pasted link to a trusted station without returning to the main workspace.',
      },
      {
        title: 'Unattended operation',
        description:
          'Daily windows, speed limits, free-space buffers, automatic placement, retries, and source diagnostics help manage a long-running station.',
      },
      {
        title: 'Built for a home server',
        description:
          'Docker deployment, password-protected access, responsive controls, and light or dark themes make the station practical across devices.',
      },
    ],
    closingTitle: 'Queue once. Pick it up later.',
    closingText:
      'Downloads run on the server after the browser closes. Availability still depends on each source, its access requirements, and the media it offers.',
  },
  'form-workout-studio': {
    id: 'form-workout-studio',
    category: 'INDEPENDENT PRODUCT / FITNESS',
    title: 'Form — Workout Studio',
    lead: 'Discover exercises. Build your routine. Track every set.',
    overview:
      'Form is a self-hosted workout companion for exercise discovery, reusable routines, training sessions, and progress. It connects a visual exercise library with live set logging, a workout calendar, and personal history.',
    image: '/images/form-workout-studio.svg',
    imageAlt: 'Abstract workout plan artwork with exercise rows and a progress chart',
    imageCaption: 'Form · illustrative workout planning artwork',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'PWA'],
    facts: [
      { value: '1,482', label: 'exercises with images' },
      { value: 'Live', label: 'set-by-set training sessions' },
      { value: 'PWA', label: 'phone, tablet, and desktop' },
    ],
    features: [
      {
        title: 'Explore movements',
        description:
          'Search exercises and aliases, filter by muscle, equipment, or difficulty, inspect technique references, and add custom movements.',
      },
      {
        title: 'Build reusable routines',
        description:
          'Plan different repetitions and weights for each set, add notes, duplicate routines, and combine saved workouts into larger plans.',
      },
      {
        title: 'Train in the moment',
        description:
          'Log actual repetitions and weight, mark completed sets, distinguish warm-ups, and use an adjustable rest timer.',
      },
      {
        title: 'Plan and reflect',
        description:
          'Schedule workouts on a monthly calendar, review a session journal, and follow exercise-specific weight, rep, and volume charts.',
      },
      {
        title: 'Keep a portable record',
        description:
          'Export routines and journal entries as CSV or review a Form CSV import before saving.',
      },
      {
        title: 'Use your own server',
        description:
          'A React and Express app stores training data in PostgreSQL, with Docker deployment, mobile layouts, and light and dark themes.',
      },
    ],
    closingTitle: 'From the first exercise to the next personal best.',
    closingText:
      'Form is designed for one owner on a trusted deployment. Its online backend saves training history; the installable interface can reuse cached assets on supported devices.',
  },
  resonance: {
    id: 'resonance',
    category: 'INDEPENDENT APP / MUSIC METADATA',
    title: 'Resonance',
    lead: 'Recognize your music. Complete its tags. Make it yours.',
    overview:
      'Resonance is a Flutter music tagger for Windows and Android. It can identify songs from local audio fingerprints, review candidate releases, and help edit tags, lyrics, and artwork before saving a copy or explicitly updating the original.',
    image: '/images/resonance.svg',
    imageAlt: 'Abstract audio artwork with a waveform, album cover, and metadata panels',
    imageCaption: 'Resonance · illustrative music metadata artwork',
    technologies: ['Flutter', 'Dart', 'C++', 'Chromaprint', 'TagLib', 'Python'],
    facts: [
      { value: '2', label: 'standalone platforms: Windows and Android' },
      { value: '5', label: 'supported audio formats' },
      { value: 'Local', label: 'fingerprinting and tag writing' },
    ],
    features: [
      {
        title: 'Identify and review',
        description:
          'Create a local Chromaprint fingerprint, look up recordings through AcoustID, and inspect release candidates before applying a match.',
      },
      {
        title: 'Edit the details',
        description:
          'Adjust tags, plain or timed lyrics, and cover art manually; export a tagged copy or confirm an overwrite without re-encoding audio.',
      },
      {
        title: 'Find alternatives',
        description:
          'Search additional lyrics and artwork sources, preview results, and explicitly choose what to use in a draft.',
      },
      {
        title: 'Work through a collection',
        description:
          'Import several songs, batch recognition with pause and retry controls, and review and export each song individually.',
      },
      {
        title: 'Resume your workspace',
        description:
          'Saved drafts retain working audio, edits, artwork, candidate results, and batch state across sessions.',
      },
      {
        title: 'Standalone on each device',
        description:
          'Windows and Android handle local audio processing independently. The Windows app offers an optional Python backend mode.',
      },
    ],
    closingTitle: 'Make your music library feel complete.',
    closingText:
      'Manual editing works offline. Online recognition and content lookup depend on the selected service and available matches; the supplied source requires a platform build.',
  },
};
