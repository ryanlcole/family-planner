# Family Planner

Standalone local-first household planner.

## Privacy boundary

- This repository contains only the public app shell.
- Household profile values are imported locally from a private JSON file.
- Planner state is stored in the browser with localStorage.
- Price and recipe buttons open ordinary web searches; search results are never written back automatically.
- No custom domain, shared login, or external application API is configured here.
- The repository intentionally has no CNAME file.

## GitHub Pages

The included Pages workflow publishes the static site from `main` after GitHub Pages is configured to use **GitHub Actions** as its source.
