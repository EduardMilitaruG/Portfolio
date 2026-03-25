export const projects = [
  {
    id: 1,
    title: 'JobFy v2',
    description: 'Full-stack job scraper dashboard. TypeScript monorepo with React 19, Node.js, PostgreSQL and Prisma. Features async multi-source scraping, real-time status polling, stats dashboard and CI/CD pipeline with GitHub Actions.',
    image: null,
    tech: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/EduardMilitaruG/JobFy-v2',
    demo: null
  },
  {
    id: 2,
    title: 'JobFy Test Suite',
    description: 'Standalone QA automation suite for JobFy v2. 204 tests across Playwright E2E (4 browsers), Jest unit tests and Supertest integration tests. Covers API contracts, UI flows, responsive design and error handling.',
    image: null,
    tech: ['Playwright', 'Jest', 'Supertest', 'TypeScript', 'QA Automation'],
    github: 'https://github.com/EduardMilitaruG/jobfy-playwright-tests',
    demo: null
  },
  {
    id: 3,
    title: 'FinByt',
    description: 'Full-stack investment portfolio dashboard. Tracks cryptocurrencies, stocks and ETFs with live CoinGecko prices, interactive P/L charts and full CRUD. TypeScript end-to-end.',
    image: null,
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'CoinGecko API'],
    github: 'https://github.com/EduardMilitarug/crypto-portfolio-dashboard',
    demo: null
  },
  {
    id: 4,
    title: 'Archive Scout',
    description: 'Python automation bot that monitors Japanese secondhand marketplaces (Yahoo Auctions via ZenMarket) for underpriced archive fashion. Deal scoring engine, Cloudflare bypass via TLS fingerprint impersonation, and real-time Telegram + Discord alerts.',
    image: null,
    tech: ['Python', 'AsyncIO', 'Telegram Bot', 'Discord Bot', 'SQLite', 'BeautifulSoup'],
    github: 'https://github.com/EduardMilitaruG/archive-scout',
    demo: null
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'PWA mobile-first fitness tracker. Workout logging, nutrition and macro tracking, water intake, progress charts and creatine reminders. Works offline.',
    image: null,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Vite'],
    github: null,
    demo: 'https://fitness-tracker-indol-seven.vercel.app'
  }
]
