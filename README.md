# E2E Test Suite — Portfolio

Comprehensive end-to-end testing for a personal portfolio site, covering accessibility, visual regression, performance, SEO, and responsive design across 6 browser configurations.

## About

This project is a fully automated E2E test suite built with Playwright for a React-based portfolio website. It validates functionality, accessibility (WCAG 2.1 AA), visual consistency, performance metrics, and SEO compliance. Built as a QA engineering portfolio piece to demonstrate test architecture, cross-browser coverage, and CI/CD integration.

## Tech Stack

- **Playwright** — Cross-browser E2E testing (Chromium, Firefox, WebKit, mobile & tablet)
- **axe-core** — Automated accessibility auditing (WCAG 2.1 AA)
- **GitHub Actions** — CI/CD pipeline with multi-browser matrix and artifact retention

## Test Coverage Summary

| Category       | File                  | Tests |
| -------------- | --------------------- | ----: |
| Smoke          | `smoke.spec.js`       |     4 |
| Accessibility  | `a11y-audit.spec.js`  |     2 |
| Accessibility  | `aria.spec.js`        |    11 |
| Accessibility  | `keyboard-nav.spec.js`|     6 |
| Performance    | `load-time.spec.js`   |     7 |
| Visual         | `screenshots.spec.js` |     9 |
| Sections       | `header.spec.js`      |     8 |
| Sections       | `hero.spec.js`        |     8 |
| Sections       | `projects.spec.js`    |    11 |
| Sections       | `about.spec.js`       |     7 |
| Sections       | `contact.spec.js`     |     8 |
| Sections       | `footer.spec.js`      |     3 |
| Responsive     | `desktop.spec.js`     |     5 |
| Responsive     | `mobile.spec.js`      |    10 |
| Responsive     | `tablet.spec.js`      |     5 |
| SEO            | `meta-tags.spec.js`   |     5 |
| **Total**      | **14 files**          | **109** |

## Project Structure

```
e2e/
├── fixtures/
│   ├── accessibility.fixture.js   # axe-core integration
│   └── base.fixture.js            # Page-ready and static-page fixtures
├── helpers/
│   ├── constants.js               # Viewports, nav links, project data
│   ├── navigation.js              # Page-ready, scroll, mobile menu helpers
│   ├── selectors.js               # Centralized CSS selectors
│   └── visual.js                  # Screenshot preparation utilities
└── tests/
    ├── accessibility/             # WCAG audit, ARIA, keyboard navigation
    ├── performance/               # Core Web Vitals, load times
    ├── responsive/                # Desktop, mobile, tablet layouts
    ├── sections/                  # Header, hero, projects, about, contact, footer
    ├── seo/                       # Meta tags, Open Graph
    ├── visual/                    # Screenshot comparison tests
    └── smoke.spec.js              # Basic site health checks
```

## Getting Started

```bash
npm install
npx playwright install --with-deps
npm test
```

## Available Scripts

| Command                  | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `npm test`               | Run all tests                                    |
| `npm run test:ui`        | Open Playwright UI mode                          |
| `npm run test:headed`    | Run tests in headed browser                      |
| `npm run test:debug`     | Run tests in debug mode                          |
| `npm run test:chromium`  | Run tests on Chromium only                       |
| `npm run test:firefox`   | Run tests on Firefox only                        |
| `npm run test:webkit`    | Run tests on WebKit only                         |
| `npm run test:mobile`    | Run tests on mobile Chrome and Safari            |
| `npm run test:smoke`     | Run smoke tests only                             |
| `npm run test:a11y`      | Run accessibility tests                          |
| `npm run test:visual`    | Run visual regression tests                      |
| `npm run test:visual:update` | Update visual regression snapshots           |
| `npm run test:perf`      | Run performance tests                            |
| `npm run test:seo`       | Run SEO tests                                    |
| `npm run test:report`    | Open the HTML test report                        |
| `npm run test:local`     | Run tests against local dev server               |

## CI/CD

The GitHub Actions workflow runs on every push and pull request to `main`/`master`. It executes the full test suite across 6 browser projects (Chromium, Firefox, WebKit, mobile Chrome, mobile Safari, and tablet) on Ubuntu with Node 20, plus a separate visual regression job. Test reports and failure artifacts are retained for 14 days.
