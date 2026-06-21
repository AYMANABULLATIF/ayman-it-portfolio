# Ayman Abdullatif | IT Support Portfolio

Recruiter-friendly personal portfolio for Ayman Abdullatif, focused on entry-level IT Support, Helpdesk, Desktop Support, and Junior IT Operations roles in Japan.

The portfolio is designed to be scanned quickly by hiring teams. It emphasizes practical support projects, Windows/Linux troubleshooting foundations, documentation habits, workplace discipline from Japanese technical environments, and English/Japanese readiness without exaggerating experience.

## Project Overview

- Clean one-page portfolio for Japan-based IT support applications
- Strong hero section with target roles, location, languages, and support focus
- 30-second recruiter summary for quick screening
- Two featured Streamlit projects showing helpdesk and IT operations thinking
- Skills grouped around support work: ticket triage, OS, networking, monitoring, databases, tools, cloud basics, and languages
- Experience timeline with honest transferability notes for non-IT Japan roles
- Education, certifications, contact links, and resume placeholder
- Mobile responsive layout
- Light/dark mode toggle
- English/Japanese language toggle

## Featured Projects

### AI Helpdesk Support Assistant

Simulates Tier-1 helpdesk ticket intake, issue classification, priority/sentiment analysis, resolver team suggestion, first troubleshooting steps, and local knowledge base search.

Live demo: `https://ai-itdesk-assistant.streamlit.app`

### IT Operations Center

Simulates internal support workflows for users, assets, incidents, technician notes, and audit logging.

Live demo: `https://it-operations-center-example.streamlit.app`

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React icons
- JavaScript

## Live Links

Update these after deployment:

- Portfolio: `https://ayman-it-portfolio.vercel.app`
- GitHub repository: `https://github.com/AYMANABULLATIF/your-portfolio-repo`
- AI Helpdesk Support Assistant: `https://ai-itdesk-assistant.streamlit.app`
- IT Operations Center: `https://it-operations-center-example.streamlit.app`

## Local Setup

Windows PowerShell:

```powershell
cd "C:\Users\aeman\OneDrive\ドキュメント\ayman-it-portfolio"
npm.cmd install
npm.cmd run dev
```

Open:

```text
http://127.0.0.1:5173/
```

The npm scripts use `scripts/vite-runner.mjs` so the project runs reliably from the current Japanese OneDrive folder path. On deployment platforms it falls back to the normal Node runtime.

## Build

```powershell
npm.cmd run build
```

Production output:

```text
dist
```

## Resume Placeholder

The resume button points to:

```text
public/resume-ayman-abdullatif.pdf
```

A safe placeholder PDF is included so the download button does not break. Replace it with the final resume PDF before sending job applications.

## Deployment

This is a static Vite site. Netlify is the simplest recommended option, but Vercel also works well.

### Deploy on Netlify

1. Push this project to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/).
3. Choose **Add new site** > **Import an existing project**.
4. Connect the GitHub repository.
5. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy the site.
7. Replace the portfolio placeholder URL in this README.

### Deploy on Vercel

1. Push this project to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Choose **Add New** > **Project**.
4. Import the GitHub repository.
5. Confirm:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy the site.
7. Replace the portfolio placeholder URL in this README.

## Content Updates

Most portfolio content is stored in:

```text
src/data/profile.js
```

Update that file to edit the profile copy, projects, skills, experience, education, links, and contact details.
