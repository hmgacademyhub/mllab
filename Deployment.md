# ML LAB — Deployment Guide

**Project:** ML Lab — Free Offline scikit-learn & statsmodels Learning Platform  
**Visioner / Author:** Adewale Samson Adeagbo  
**Role:** Data Scientist · STEM Educator · AI-Augmented Solutions Developer · Founder/Visioner, HMG Concepts  
**Location:** Lagos / Ogun State, Nigeria  
**Portfolio:** https://cssadewale.pages.dev  
**HMG Concepts:** https://hmgconcepts.pages.dev  
**GitHub:** https://github.com/cssadewale  
**LinkedIn:** https://linkedin.com/in/adewalesamsonadeagbo  
**YouTube:** https://youtube.com/@hmgconcepts  
**WhatsApp:** https://wa.me/2348100866322  
**Emails:** hmgconcepts@gmail.com · hismarvellousgrace@gmail.com · buildingmyictcareer@gmail.com

---

## 1. Deployment Philosophy

This platform is deliberately built with **free tools only**:

- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage
- GitHub Pages / Cloudflare Pages / Netlify

It does **not** require:

- npm install
- build command
- paid hosting
- backend server
- database
- AI API
- OpenAI / Gemini / Claude API keys

The Local Mentor feature is rule-based and runs inside the browser. This keeps the platform cost-effective for Nigerian learners, schools and EdTech deployments.

---

## 2. Files Required for GitHub Repository

Upload the following files to the root of the GitHub repository:

```text
index.html
README.md
Deployment.md
package.json
LICENSE
.nojekyll
manifest.webmanifest
sw.js
icon.svg
SECURITY.md
SUPPORT.md
DATA_GOVERNANCE.md
.github/workflows/deploy-pages.yml
```

Optional but recommended:

```text
ABOUT_ADEWALE_HMG.md
CURRICULUM.md
CHANGELOG.md
```

`index.html` must remain at the repository root. Do not put it inside `src/`, `public/`, `dist/` or another folder.

---

## 3. Local Testing Before Upload

### Option A — Double-click

1. Open the `ML LAB` folder.
2. Double-click `index.html`.
3. The app should open in your browser.

### Option B — Local server

Use this if browser localStorage does not save correctly under `file://`.

```bash
cd "ML LAB"
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

---

## 4. GitHub Pages Deployment — Recommended Free Option

### Step 1 — Create a GitHub repository

1. Visit https://github.com/new
2. Repository name example:

```text
ml-lab
```

3. Visibility: **Public**
4. Do not add another README if you already have the prepared files.
5. Click **Create repository**.

---

### Step 2 — Push the ML LAB folder

Open terminal in the `ML LAB` folder and run:

```bash
git init
git add .
git commit -m "Initial deployment of ML Lab by Adewale Samson Adeagbo"
git branch -M main
git remote add origin https://github.com/cssadewale/ml-lab.git
git push -u origin main
```

Replace `cssadewale` and `ml-lab` with your GitHub username and repository name if different.

---

### Step 3 — Enable GitHub Pages

1. Open the repository on GitHub.
2. Click **Settings**.
3. Click **Pages** in the left sidebar.
4. Under **Source**, choose **Deploy from a branch**.
5. Branch: **main**.
6. Folder: **/ (root)**.
7. Click **Save**.

---

### Step 4 — Wait for deployment

Wait 1–2 minutes. The live URL should look like:

```text
https://cssadewale.github.io/ml-lab/
```

---

### Step 5 — Future updates

After editing any file:

```bash
git add .
git commit -m "Update ML Lab features and documentation"
git push
```

GitHub Pages will redeploy automatically.


---

## 4B. Enterprise Static Deployment Option — GitHub Actions

The `ML LAB/.github/workflows/deploy-pages.yml` file provides an optional automated deployment workflow. This is still free on GitHub public repositories.

To use it:

1. Push the `ML LAB` folder contents to the repository root.
2. Go to repository **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to the `main` branch.
5. The workflow will package the static files and deploy to GitHub Pages.

No npm install or build command is required.

---

## 4C. PWA / Offline Deployment Notes

The project includes:

```text
manifest.webmanifest
sw.js
icon.svg
```

When deployed over HTTPS, supported browsers can cache the app for offline use. Service workers do not run from direct `file://` opening, so test offline behaviour on GitHub Pages, Cloudflare Pages, Netlify or a local server.

---

## 5. Cloudflare Pages Deployment — Free Alternative

1. Push the `ML LAB` folder to GitHub.
2. Go to https://dash.cloudflare.com
3. Open **Workers & Pages**.
4. Click **Create application**.
5. Choose **Pages**.
6. Connect the GitHub repository.
7. Build settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
```

8. Click **Save and Deploy**.
9. Cloudflare will provide a free `.pages.dev` URL.

---

## 6. Netlify Drop Deployment — Fast Demo Option

1. Go to https://app.netlify.com/drop
2. Drag the entire `ML LAB` folder into the drop area.
3. Netlify uploads the files and creates a free URL.
4. Rename the site in Site Settings if desired.

This is suitable for quick demonstrations. GitHub Pages or Cloudflare Pages is better for long-term updates.

---

## 7. Troubleshooting

| Problem | Likely Cause | Fix |
|---|---|---|
| 404 after deployment | GitHub Pages not ready or wrong branch | Wait 2 minutes, confirm branch is `main` and folder is `/root` |
| White screen | `index.html` not at root or JavaScript syntax issue | Confirm root file location and open browser console |
| Old version still showing | Browser cache | Hard refresh with Ctrl+Shift+R |
| Notes/progress not saving | Browser restriction under `file://` | Use `python -m http.server 8080` |
| Git push fails | Wrong remote URL | Run `git remote -v`, then correct the remote |
| Fonts not loading offline | Google Fonts needs internet | App still works with fallback fonts |

---

## 8. Data Privacy

All learner data is stored in browser localStorage:

- Progress
- Notes
- Scratchpad
- Bookmarks
- Quiz leaderboard
- Timer history
- Flashcard stats
- Metric calculator inputs
- Workflow checklist status

No data is sent to a server.

---

## 9. Final Deployment Checklist

Before sharing the live link, confirm:

- [ ] `index.html` is in repository root
- [ ] `README.md` includes Adewale/HMG details
- [ ] `Deployment.md` includes deployment steps
- [ ] `package.json` author field is correct
- [ ] `LICENSE` includes Adewale Samson Adeagbo
- [ ] App opens locally
- [ ] `manifest.webmanifest`, `sw.js` and `icon.svg` are present
- [ ] `SECURITY.md`, `SUPPORT.md` and `DATA_GOVERNANCE.md` are present
- [ ] Enterprise Center, Cohort Manager, Governance Center and Audit Log open correctly
- [ ] GitHub Pages or Cloudflare Pages link works
- [ ] Visioner Profile is visible inside the app
- [ ] Feature Guide explains every module
- [ ] Deployment Guide is visible inside the app

---

**Built by Adewale Samson Adeagbo for HMG Concepts — Learning deliberately. Teaching authentically. Building useful technology with free tools.**
