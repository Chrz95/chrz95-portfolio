export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: 'layovio' | 'daytandem';
  category: string;
  title: string;
  lead: string;
  overview: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  logo?: string;
  technologies: string[];
  facts: { value: string; label: string }[];
  features: ProjectFeature[];
  closingTitle: string;
  closingText: string;
  liveUrl: string;
  liveLabel: string;
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
};
