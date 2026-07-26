# Baimba Conteh — Professional Portfolio

> *IT professional committed to excellence in technology solutions, guided by faith in Jesus Christ — using technology to serve others with integrity and compassion.*

[![Live Site](https://img.shields.io/badge/Live_Site-contehb.github.io-2563eb?logo=githubpages&logoColor=white)](https://contehb.github.io)
[![Status](https://img.shields.io/badge/Status-Live-10b981)](https://contehb.github.io)
[![Class of](https://img.shields.io/badge/Class_of-2027-1e40af)](https://contehb.github.io/about.html)
[![GPA](https://img.shields.io/badge/GPA-4.0-f59e0b)](https://contehb.github.io/about.html)
[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](#)
[![Academic](https://img.shields.io/badge/Course-IT_497_Capstone-6b7280)](#)

This repository holds the complete, hand-built portfolio of **Baimba Conteh** — a final-year Information Technology student at Ensign College (BYU-Pathway Worldwide) and a Central Archives Coordinator at Partners In Health. It is not a template and not a generator output: every page, style rule, and interaction was written by hand to present real work, real certifications, and the principles that shape how that work gets done. The site pairs technical craft (semantic HTML, a responsive custom stylesheet, accessible markup) with a spiritual-professional narrative, treating the two as intertwined strands rather than separate sections.

**🌐 Live website:** [https://contehb.github.io](https://contehb.github.io)

---

## Contents

- [Live Site](#live-site)
- [What This Is](#what-this-is)
- [Repository Structure](#repository-structure)
- [Pages](#pages)
- [Week 4 Additions](#week-4-additions)
- [Tech Stack](#tech-stack)
- [Design & Interaction](#design--interaction)
- [Run It Locally](#run-it-locally)
- [Deployment](#deployment)
- [Connect](#connect)
- [Academic Integrity & AI Use](#academic-integrity--ai-use)
- [Motto](#motto)

---

## Live Site

The portfolio is published through GitHub Pages and is publicly reachable at:

**[https://contehb.github.io](https://contehb.github.io)**

It is served over HTTPS, is mobile-responsive, and degrades gracefully on older browsers. The same files in this repository are what render on that URL — there is no build step between the code you read here and the site you visit.

## What This Is

A multi-page professional portfolio that documents three things at once:

1. **Technical capability** — web development, system administration, database management, and EMR data work, shown through real projects and verified certifications.
2. **Professional record** — a résumé, role history (Partners In Health, Statistics Sierra Leone, Cornerstone Computer Training Institute), and project case studies with measurable outcomes.
3. **Guiding principles** — faith in Jesus Christ, unwavering integrity, and continuous learning as stewardship, woven into the project narratives rather than parked on a separate page.

The intent is a portfolio that reads as one coherent person, not a stack of disconnected sections.

## Repository Structure

```
baimba-ui.github.io/          # local project folder
├── css/
│   └── styles.css            # single hand-written stylesheet (design system + responsive rules)
├── images/
│   └── profile.jpg           # professional headshot
├── js/
│   └── main.js               # mobile nav toggle, active-link sync, scroll-aware navbar
├── index.html                # home — hero, mission, capability overview
├── about.html                # journey, education, life skills, core values, mission
├── skills.html               # technical skills, certifications, spiritual skills
├── projects.html             # three project case studies with outcomes + spiritual integration
├── week4.html                # Week 4 — reflections, refinement report, ethical alternative
├── contact.html              # direct channels + Formspree message form
└── README.md                 # this file
```

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, personal mission, and a four-part capability overview |
| About | `about.html` | Personal journey, education, BYU-Pathway life skills, core values |
| Skills | `skills.html` | Technical skills, certifications & education, spiritual skills |
| Projects | `projects.html` | Three case studies: portfolio site, EMR optimization, database system |
| Week 4 | `week4.html` | Video response, guiding principles, spiritual materials, refinement report, ethical-dilemma alternative, temple reflection |
| Contact | `contact.html` | Email, WhatsApp, location, and a working message form |

Every page shares one navigation bar and one footer, so any page links to every other page in a single click.

## Week 4 Additions

Week 4 expands and deepens the portfolio and integrates a refined project. The new `week4.html` page carries the following, each mapped to the assignment rubric:

- **Video response** — a recorded reflection on the development journey and the three guiding principles (link placed on the page).
- **Three guiding principles** — Faith in Jesus Christ, Unwavering Integrity, Continuous Learning as Sacred Stewardship, each with an in-depth explanation.
- **Compiled spiritual materials (5+)** — 3 Nephi 13:19–22; Elder David A. Bednar, *"Gather Together in One All Things in Christ"* (Oct 2018); *"Jesus Christ: The Prince of Peace"* (2024); *"Blessings of the Temple"*; and personal temple reflection notes (July 2026).
- **Project refinement report** — the EMR System Optimization project, refined with automated audit logging and tightened Role-Based Access Control, with documented decision-making and impact.
- **Ethical-dilemma alternative** — a well-reasoned alternative handling of the unauthorized-record-access scenario, aligned to honesty, responsibility, and justice.
- **Professional–spiritual alignment** — a temple-reflection narrative connecting technical work to covenants of service.
- **Peer review** — completed separately and submitted in the course discussion thread (per assignment instructions).

The "Week 4" link was also added to the navigation and footer of every existing page so the new content is reachable site-wide.

## Tech Stack

- **HTML5** — semantic, accessible markup (`<nav>`, `<header>`, `<section>`, `<footer>`, ARIA labels on icon-only links)
- **CSS3** — one custom stylesheet using CSS variables as a small design system; responsive grid layouts and a mobile breakpoint
- **Vanilla JavaScript** — no frameworks; mobile menu toggle, active-link synchronization, and a scroll-aware navbar
- **Font Awesome 6** — iconography (CDN)
- **Google Fonts** — Montserrat (display) paired with Roboto (body)
- **Formspree** — handles the contact form submissions
- **GitHub Pages** — static hosting from the `main` branch, root folder

## Design & Interaction

The site is built to feel responsive to the person using it, not to sit as a flat document:

- **Scroll-aware navbar** — the top bar deepens its shadow once the visitor scrolls, giving a sense of place.
- **Hover feedback** — cards lift and bloom a larger shadow on hover; buttons shift color and rise; social icons lift and recolor.
- **Active-link underline** — the current page is marked in the menu, both by a hard-coded class and by `main.js` reading the URL, so navigation always shows where you are.
- **Mobile navigation** — a hamburger menu slides the nav in on small screens and closes on link tap.
- **Type contrast** — bold Montserrat headings against light Roboto body text create rhythm and hierarchy.
- **Layered surfaces** — alternating white and tinted section backgrounds, gradient page headers, and a soft hero wash keep the eye moving down the page.
- **Accessibility** — descriptive `alt` text, `aria-label`s on icon links, keyboard-reachable controls, and a contact form with required-field validation.
- **A small easter egg** — open the browser console to find a friendly developer note.

## Run It Locally

No build tools are required. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder with a local server (e.g. the VS Code **Live Server** extension) so relative links and fonts load cleanly.

```
# example with Python 3
python -m http.server 8000
# then open http://localhost:8000
```

## Deployment

1. The repository is named to match the GitHub Pages user-site convention and is set to **Public**.
2. In **Settings → Pages**, the source is **Deploy from a branch → `main` → `/ (root)`**.
3. On every push to `main`, GitHub Pages rebuilds and republishes the site to [https://contehb.github.io](https://contehb.github.io).

## Connect

- **Email (personal):** [contehbaimba910@gmail.com](mailto:contehbaimba910@gmail.com)
- **Email (school):** [bconteh@byupathway.edu](mailto:bconteh@byupathway.edu)
- **WhatsApp:** [+232 31 363736](https://wa.me/23231363736) · [+232 88 470858](https://wa.me/23288470858)
- **LinkedIn:** [linkedin.com/in/baimba-conteh-b726b120a](https://www.linkedin.com/in/baimba-conteh-b726b120a/)
- **Location:** Koidu City, Kono District, Sierra Leone (GMT / West Africa Time)
- **Repository:** [github.com/contehb/contehb.github.io](https://github.com/contehb/contehb.github.io)

## Academic Integrity & AI Use

This portfolio and its accompanying course documents were created with the assistance of AI tools strictly for brainstorming, structuring, and organizational purposes, in full compliance with Ensign College's student AI policy. All spiritual reflections, professional experiences, résumé details, and project content have been personally reviewed, edited, and customized to authentically reflect my own life, beliefs, and understanding. Grammarly was used to check punctuation, grammar, clarity, and tone.

## Motto

> **IT CAN ONLY BE GOD 🙏 | LEARN BEFORE YOU EARN 💻**

Built with faith, HTML, CSS, and JavaScript. © 2026 Baimba Conteh.