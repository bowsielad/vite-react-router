# Vite with Basic Routing

## Vite Setup (with Routing) and Easy Publish to Git Pages

This is a clone of ["vite-react-router" (Github repo) by Erick Kuwahara](https://github.com/ErickKS/vite-react-router/tree/main) with the following differences:

- I converted `.tsx` (typescript) files to `.jsx`.
- VS Code was complaining about it, so in `main.tsx` (which I renamed `main.jsx`) I removed `as HTMLElement` from:
  `ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(...`
- I extracted the `nav` to its own component (`components/Nav.js`).
- I created a custom 404 page (`/src/pages/NotFoundPage.jsx`).
- I created a 'Profiles' page (`/src/pages/Profiles.jsx`) with sub-routes (`/src/pages/Profile.jsx`).

## Installation and configuring the Git Repo

For all installation and configuration instructions see Erick's Github repo (link above).

You can also watch his step-by-step YouTube tutorial: [Vite React App with Routes Deployed on Github | Reload error resolved!](https://youtu.be/uEEj2c3_ydg).

> [!IMPORTANT]
> The installation and configuration options omit a key step: Once you've finished following the instructions, go to `settings/pages`. Under 'Build and Deployment > Branch' select 'gh-pages' as the branch. Then click 'Save'.
