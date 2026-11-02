# Portfolio (Spanish, React)

Spanish-language version of my portfolio, built with React 19, Vite and Tailwind CSS, with a generated topographic background. Live at [eduardmilitarug.github.io/Portfolio](https://eduardmilitarug.github.io/Portfolio/).

My main portfolio is [eduardmilitarug.github.io](https://eduardmilitarug.github.io) ([repo](https://github.com/EduardMilitaruG/EduardMilitaruG.github.io)).

## End-to-end tests

The Playwright suite that used to live here moved to [EduardMilitaruG.github.io](https://github.com/EduardMilitaruG/EduardMilitaruG.github.io). It had always navigated to the domain root, so it was testing that site rather than this one; it now runs next to the page it tests.

## Development

```bash
npm ci
npm run dev       # http://localhost:5173/Portfolio/
npm run build     # outputs to dist/
npm run lint
```

GitHub Pages serves the `docs/` folder on `main`.
