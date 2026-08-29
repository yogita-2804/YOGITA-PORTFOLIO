# Yogita Sahu Portfolio — Version 2 (Data Driven)

This version keeps the same dark, editorial portfolio design but makes the content easy to manage.

## Main files
- index.html — page structure (normally don't edit for content changes)
- style.css — design/theme
- script.js — website functionality and automatic rendering
- data.js — EDIT THIS FILE when you want to change portfolio content

## How to add a project
Open `data.js` and add another object inside `projects`.
You do NOT need to edit index.html.

Example:
{
  number: "02",
  featured: false,
  title: "My New Project",
  browserText: "myproject.app",
  description: "Short description of the project.",
  technologies: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/yourusername/project",
  live: "https://your-live-demo.com",
  previewType: "default"
}

## How to add another resume
Open `data.js` and add an object inside `resumes`:
{
  number: "02",
  title: "Frontend Resume",
  description: "Resume for frontend roles.",
  file: "assets/frontend-resume.pdf"
}
Then put the PDF inside the `assets` folder.

## Your links
- Email: yogitaa2805@gmail.com
- LinkedIn: https://www.linkedin.com/in/yogita-sahu-352334422
- GitHub: add your GitHub profile URL in `data.js` where it says `github: "#"`.

## Your photo
Put your professional photo at:
assets/profile.jpg

Or change the `photo` value in `data.js`.

## Run
For the easiest local preview in VS Code, install Live Server and open index.html with Live Server.
You can also open index.html directly in a browser for most features.
