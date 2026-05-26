# Enterprise Deployment Guide — ML Lab

**Visioner:** Adewale Samson Adeagbo  
**Brand:** HMG Concepts  
**Role:** Data Scientist · STEM Educator · AI-Augmented Solutions Developer  
**Portfolio:** https://cssadewale.pages.dev  
**HMG Concepts:** https://hmgconcepts.pages.dev  
**WhatsApp:** https://wa.me/2348100866322  
**Email:** hmgconcepts@gmail.com

---

## Purpose

This guide explains how to deploy the enterprise-ready ML Lab platform using free tools only.

The platform does not require:

- AI API
- backend server
- paid database
- npm build
- paid LMS
- paid helpdesk
- paid hosting

---

## Required Files

Upload all files in the `enterprise` folder to the root of the GitHub repository.

Critical files:

```text
index.html
README.md
Deployment.md
ENTERPRISE_DEPLOYMENT.md
FEATURE_CATALOG.md
NO_AI_API_POLICY.md
FREE_TOOL_STACK.md
DATA_GOVERNANCE.md
SECURITY.md
SUPPORT.md
CURRICULUM.md
package.json
manifest.webmanifest
sw.js
icon.svg
.nojekyll
.github/workflows/deploy-pages.yml
```

---

## Recommended GitHub Pages Deployment

```bash
cd enterprise
git init
git add .
git commit -m "Deploy ML Lab Enterprise by Adewale Samson Adeagbo"
git branch -M main
git remote add origin https://github.com/cssadewale/ml-lab-enterprise.git
git push -u origin main
```

Then open GitHub:

```text
Repository → Settings → Pages → Build and deployment
```

Choose either:

1. **Deploy from branch**: `main` and `/root`, or
2. **GitHub Actions**: use the included workflow.

---

## Cloudflare Pages Settings

```text
Framework preset: None
Build command: leave blank
Build output directory: /
```

---

## Enterprise Readiness Checks

Before launch:

- [ ] Open Enterprise Center
- [ ] Complete Governance Center
- [ ] Export Backup Center JSON
- [ ] Generate Setup Wizard deployment brief
- [ ] Test Issue Desk ticket creation
- [ ] Export Cohort Manager CSV
- [ ] Review Audit Log
- [ ] Confirm no AI API key is present
- [ ] Confirm `index.html` is at repository root
- [ ] Confirm HTTPS deployment URL works

---

## Support

For deployment support, contact Adewale Samson Adeagbo / HMG Concepts:

- WhatsApp: https://wa.me/2348100866322
- Email: hmgconcepts@gmail.com
