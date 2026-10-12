# Aditya — Resume & Bio-data Website

A static, multi-page website built with HTML, CSS, and jQuery.

## Structure

```
.
├── index.html     Home page
├── biodata.html   Bio-data page
├── resume.html    Resume page
├── style.css      Shared styles (light/dark mode, responsive layout)
├── script.js      Shared behaviour (mobile nav, live age calculation, print button)
└── README.md
```

## Run locally

No build step required. Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploy to GitHub Pages

1. Create a new GitHub repository and push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial commit: resume & bio-data site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to the repository's **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, **Branch** to `main` and folder to `/ (root)`.
4. Save. The site goes live within a minute or two at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

## Notes

- Fonts (Space Grotesk, Inter) load from Google Fonts; jQuery loads from cdnjs. Both require an internet connection.
- The Resume page's "Print / Save as PDF" button uses the browser's native print dialog.
